"use client";

/**
 * Laboratorio de predicción (26-nov-2026): experiencia insignia del catálogo, diseñada desde cero.
 * Predecir → observar → explicar sobre un tablero de Galton holográfico: el participante dibuja dónde cree que
 * van a caer mil partículas, las lanza, compara y explica por qué aparece la campana. El desafío final repite
 * con 20 partículas para ver por qué una muestra pequeña engaña (ley de los grandes números).
 * Respaldo: Brod (2021), «Predicting as a learning strategy», Psychonomic Bulletin & Review.
 */
import { useCallback, useEffect, useRef, useState, type PointerEvent as RPointerEvent } from "react";
import { Eraser, FastForward, Play, Sparkles, Undo2 } from "lucide-react";
import { cls, tx, useEventLog, EventLog, DemoShell, useReducedMotion, type DemoProps } from "./ui";

const ROWS = 12;
const BINS = ROWS + 1;
const N_MAIN = 1000;
const N_SMALL = 20;

type Phase = "predict" | "drop" | "result" | "explained" | "small";
type Particle = { k: number[]; born: number; dur: number; hue: number };

/** Probabilidad teórica de cada tubo: binomial(12, 0,5). */
const choose = (n: number, k: number) => {
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return r;
};
const TEORIA = Array.from({ length: BINS }, (_, k) => choose(ROWS, k) / 2 ** ROWS);

const fmt = (lang: "es" | "en", n: number) => n.toLocaleString(lang === "es" ? "es-CO" : "en-US");

/** Coincidencia entre dos distribuciones: suma de los mínimos (0 a 100 %). */
function coincidencia(pred: number[], obs: number[]) {
  const sp = pred.reduce((a, b) => a + b, 0) || 1;
  const so = obs.reduce((a, b) => a + b, 0) || 1;
  return Math.round(100 * pred.reduce((acc, p, i) => acc + Math.min(p / sp, obs[i] / so), 0));
}

const EXPLICACIONES: { id: "caminos" | "atraccion" | "azar"; text: [string, string]; ok: boolean; fb: [string, string] }[] = [
  {
    id: "caminos",
    ok: true,
    text: ["Hay muchos más caminos que llevan al centro que a los extremos", "There are many more paths to the middle than to the edges"],
    fb: [
      "Para llegar al tubo del borde, una partícula tiene que rebotar 12 veces hacia el mismo lado: hay un solo camino. Al tubo del centro llegan 924 caminos distintos. Por eso se forma la campana.",
      "To reach the edge tube, a particle must bounce the same way 12 times: there is only one path. 924 different paths lead to the middle tube. That is why the bell appears.",
    ],
  },
  {
    id: "atraccion",
    ok: false,
    text: ["Las partículas se atraen hacia el centro", "The particles are drawn toward the middle"],
    fb: [
      "No. Cada rebote es 50 y 50, y ninguna partícula sabe dónde cayeron las demás. La campana sale de contar caminos, no de una fuerza.",
      "No. Each bounce is 50-50, and no particle knows where the others landed. The bell comes from counting paths, not from a force.",
    ],
  },
  {
    id: "azar",
    ok: false,
    text: ["Es azar: en otra tirada la forma cambiaría por completo", "It is chance: another run would look completely different"],
    fb: [
      "Con mil partículas, no. Cada partícula es impredecible, pero el conjunto repite la misma forma. Pruébalo en el desafío con solo 20.",
      "Not with a thousand particles. Each particle is unpredictable, but the group repeats the same shape. Try the challenge with only 20.",
    ],
  },
];

export default function LaboratorioParticulas({ lang }: DemoProps) {
  const es = lang === "es";
  const i18 = es ? 0 : 1;
  const T = (a: string, b: string) => tx(lang, a, b);
  const reduced = useReducedMotion();
  const { events, log, clear } = useEventLog();

  const [phase, setPhase] = useState<Phase>("predict");
  const [pred, setPred] = useState<number[]>(() => Array(BINS).fill(0));
  const [counts, setCounts] = useState<number[]>(() => Array(BINS).fill(0));
  const [landed, setLanded] = useState(0);
  const [target, setTarget] = useState(N_MAIN);
  const [score, setScore] = useState<number | null>(null);
  const [exp, setExp] = useState<(typeof EXPLICACIONES)[number]["id"] | null>(null);
  const [teoria, setTeoria] = useState(false);
  const [rapido, setRapido] = useState(false);
  const [smallRuns, setSmallRuns] = useState<{ n: number; sc: number }[]>([]);

  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const staticRef = useRef<HTMLCanvasElement | null>(null);
  const geo = useRef({ w: 0, h: 0, dpr: 1, cx: 0, gap: 0, y0: 0, rowH: 0, yb0: 0, yb1: 0 });
  const parts = useRef<Particle[]>([]);
  const queue = useRef(0);
  const lastSpawn = useRef(0);
  const countsRef = useRef<number[]>(Array(BINS).fill(0));
  const predRef = useRef<number[]>(Array(BINS).fill(0));
  const live = useRef({ phase: "predict" as Phase, teoria: false, rapido: false, target: N_MAIN, focus: -1, drawing: false, lastBin: -1 });
  const visible = useRef(true);

  predRef.current = pred;
  live.current.phase = phase;
  live.current.teoria = teoria;
  live.current.rapido = rapido;
  live.current.target = target;

  const V = es
    ? { pred: "predijo", drop: "lanzó", got: "obtuvo", exp: "explicó", chal: "desafío", theory: "comparó" }
    : { pred: "predicted", drop: "dropped", got: "scored", exp: "explained", chal: "challenge", theory: "compared" };

  /* ── Geometría y capa fija (pivotes y tubos) ── */
  const layout = useCallback(() => {
    const c = canvasRef.current;
    const wrap = wrapRef.current;
    if (!c || !wrap) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = wrap.clientWidth;
    const h = Math.max(340, Math.round(w * 0.6));
    c.width = Math.round(w * dpr);
    c.height = Math.round(h * dpr);
    c.style.height = `${h}px`;
    const gap = Math.min((w * 0.86) / BINS, 64);
    const g = { w, h, dpr, cx: w / 2, gap, y0: h * 0.13, rowH: (h * 0.42) / ROWS, yb0: h * 0.6, yb1: h * 0.93 };
    geo.current = g;
    const s = document.createElement("canvas");
    s.width = c.width;
    s.height = c.height;
    const x = s.getContext("2d")!;
    x.scale(dpr, dpr);
    // pivotes con halo
    for (let r = 0; r < ROWS; r++) {
      for (let i = 0; i <= r; i++) {
        const px = g.cx + (i - r / 2) * gap;
        const py = g.y0 + r * g.rowH;
        const grd = x.createRadialGradient(px, py, 0, px, py, gap * 0.28);
        grd.addColorStop(0, "rgba(192,132,252,0.55)");
        grd.addColorStop(1, "rgba(192,132,252,0)");
        x.fillStyle = grd;
        x.beginPath();
        x.arc(px, py, gap * 0.28, 0, Math.PI * 2);
        x.fill();
        x.fillStyle = "#E9D5FF";
        x.beginPath();
        x.arc(px, py, Math.max(1.6, gap * 0.055), 0, Math.PI * 2);
        x.fill();
      }
    }
    // tubos de vidrio
    const bw = gap * 0.78;
    for (let k = 0; k < BINS; k++) {
      const bx = g.cx + (k - ROWS / 2) * gap - bw / 2;
      x.strokeStyle = "rgba(255,255,255,0.14)";
      x.lineWidth = 1;
      x.beginPath();
      x.roundRect(bx, g.yb0, bw, g.yb1 - g.yb0, [4, 4, 8, 8]);
      x.stroke();
      x.fillStyle = "rgba(255,255,255,0.025)";
      x.fill();
    }
    // base luminosa
    const base = x.createLinearGradient(0, 0, w, 0);
    base.addColorStop(0, "rgba(34,211,238,0)");
    base.addColorStop(0.5, "rgba(34,211,238,0.55)");
    base.addColorStop(1, "rgba(34,211,238,0)");
    x.fillStyle = base;
    x.fillRect(w * 0.05, g.yb1 + 3, w * 0.9, 1.5);
    staticRef.current = s;
  }, []);

  /* ── Dibujo de cada cuadro ── */
  const draw = useCallback((now: number) => {
    const c = canvasRef.current;
    const s = staticRef.current;
    if (!c || !s) return;
    const x = c.getContext("2d")!;
    const g = geo.current;
    const L = live.current;
    x.setTransform(1, 0, 0, 1, 0, 0);
    x.clearRect(0, 0, c.width, c.height);
    x.drawImage(s, 0, 0);
    x.setTransform(g.dpr, 0, 0, g.dpr, 0, 0);

    // línea de escaneo
    if (!L.rapido) {
      const sy = g.y0 - g.rowH + (((now / 2600) % 1) * (g.yb0 - g.y0 + g.rowH));
      const sc = x.createLinearGradient(0, sy - 24, 0, sy);
      sc.addColorStop(0, "rgba(124,58,237,0)");
      sc.addColorStop(1, "rgba(124,58,237,0.10)");
      x.fillStyle = sc;
      x.fillRect(0, sy - 24, g.w, 24);
    }

    // relleno de los tubos
    const cnt = countsRef.current;
    const scale = Math.max(1, L.target * 0.226 * 1.32);
    const bw = g.gap * 0.78;
    const H = g.yb1 - g.yb0;
    for (let k = 0; k < BINS; k++) {
      if (!cnt[k]) continue;
      const hh = Math.min(H, (cnt[k] / scale) * H);
      const bx = g.cx + (k - ROWS / 2) * g.gap - bw / 2;
      const gr = x.createLinearGradient(0, g.yb1 - hh, 0, g.yb1);
      gr.addColorStop(0, "rgba(34,211,238,0.95)");
      gr.addColorStop(1, "rgba(124,58,237,0.75)");
      x.fillStyle = gr;
      x.beginPath();
      x.roundRect(bx + 2, g.yb1 - hh, bw - 4, hh, [3, 3, 6, 6]);
      x.fill();
      x.fillStyle = "rgba(255,255,255,0.85)";
      x.fillRect(bx + 3, g.yb1 - hh, bw - 6, 1.5);
    }

    // curva teórica
    if (L.teoria) {
      x.save();
      x.setLineDash([5, 5]);
      x.strokeStyle = "rgba(253,224,71,0.9)";
      x.lineWidth = 2;
      x.beginPath();
      TEORIA.forEach((p, k) => {
        const px = g.cx + (k - ROWS / 2) * g.gap;
        const py = g.yb1 - Math.min(H, ((p * L.target) / scale) * H);
        if (k) x.lineTo(px, py);
        else x.moveTo(px, py);
      });
      x.stroke();
      x.restore();
    }

    // predicción del participante
    const pr = predRef.current;
    const hasPred = pr.some((v) => v > 0);
    if ((hasPred && L.phase !== "small") || L.phase === "predict") {
      x.save();
      x.shadowColor = "rgba(244,114,182,0.9)";
      x.shadowBlur = 12;
      x.strokeStyle = "#F472B6";
      x.lineWidth = 3;
      x.lineJoin = "round";
      x.beginPath();
      pr.forEach((v, k) => {
        const px = g.cx + (k - ROWS / 2) * g.gap;
        const py = g.yb1 - v * H;
        if (k) x.lineTo(px, py);
        else x.moveTo(px, py);
      });
      x.stroke();
      x.restore();
      pr.forEach((v, k) => {
        const px = g.cx + (k - ROWS / 2) * g.gap;
        const py = g.yb1 - v * H;
        x.fillStyle = k === L.focus ? "#FFFFFF" : "#FBCFE8";
        x.beginPath();
        x.arc(px, py, k === L.focus ? 6 : 3.5, 0, Math.PI * 2);
        x.fill();
      });
    }

    // partículas
    x.globalCompositeOperation = "lighter";
    for (const p of parts.current) {
      const t = Math.min(1, (now - p.born) / p.dur);
      const steps = t * (ROWS + 1);
      const r = Math.min(ROWS, Math.floor(steps));
      const f = steps - r;
      const kAt = (row: number) => (row <= 0 ? 0 : p.k[row - 1]);
      const posX = (row: number) => g.cx + (kAt(row) - row / 2) * g.gap;
      let px: number;
      let py: number;
      if (r < ROWS) {
        px = posX(r) + (posX(r + 1) - posX(r)) * f;
        py = g.y0 - g.rowH + (r + f) * g.rowH - Math.sin(Math.PI * f) * g.rowH * 0.32;
      } else {
        px = posX(ROWS);
        py = g.y0 + (ROWS - 1) * g.rowH + f * (g.yb1 - g.y0 - (ROWS - 1) * g.rowH);
      }
      const col = p.hue ? "34,211,238" : "240,171,252";
      x.fillStyle = `rgba(${col},0.22)`;
      x.beginPath();
      x.arc(px, py, 5.5, 0, Math.PI * 2);
      x.fill();
      x.fillStyle = `rgba(${col},1)`;
      x.beginPath();
      x.arc(px, py, 2.1, 0, Math.PI * 2);
      x.fill();
    }
    x.globalCompositeOperation = "source-over";
  }, []);

  /* ── Bucle de animación ── */
  useEffect(() => {
    layout();
    const ro = new ResizeObserver(() => layout());
    if (wrapRef.current) ro.observe(wrapRef.current);
    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), { threshold: 0 });
    if (wrapRef.current) io.observe(wrapRef.current);
    let raf = 0;
    const tick = (now: number) => {
      const L = live.current;
      if (L.phase === "drop" || L.phase === "small") {
        const every = L.rapido ? 1 : L.target <= N_SMALL ? 120 : 0;
        const perFrame = L.rapido ? 40 : L.target <= N_SMALL ? 1 : 2;
        if (queue.current > 0 && now - lastSpawn.current > every) {
          for (let n = 0; n < perFrame && queue.current > 0; n++) {
            parts.current.push({
              k: (() => {
                const k: number[] = [];
                let acc = 0;
                for (let i = 0; i < ROWS; i++) {
                  acc += Math.random() < 0.5 ? 1 : 0;
                  k.push(acc);
                }
                return k;
              })(),
              born: now,
              dur: L.rapido ? 420 : 1500 + Math.random() * 300,
              hue: Math.random() < 0.55 ? 1 : 0,
            });
            queue.current--;
          }
          lastSpawn.current = now;
        }
        let done = 0;
        parts.current = parts.current.filter((p) => {
          if (now - p.born >= p.dur) {
            countsRef.current[p.k[ROWS - 1]]++;
            done++;
            return false;
          }
          return true;
        });
        if (done) {
          setLanded((v) => v + done);
          setCounts([...countsRef.current]);
        }
      }
      if (visible.current) draw(now);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [layout, draw]);

  /* ── Fin de una tirada ── */
  useEffect(() => {
    if ((phase === "drop" || phase === "small") && landed >= target && queue.current === 0 && parts.current.length === 0) {
      if (phase === "drop") {
        const sc = coincidencia(predRef.current.some((v) => v > 0) ? predRef.current : Array(BINS).fill(1), countsRef.current);
        setScore(sc);
        setPhase("result");
        log(V.got, `${sc} %`);
      } else {
        const sc = coincidencia(TEORIA, countsRef.current);
        setSmallRuns((r) => [...r, { n: target, sc }]);
        log(V.chal, `${fmt(lang, target)} · ${sc} %`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [landed, phase, target]);

  /* ── Lanzar ── */
  const lanzar = (n: number, ph: "drop" | "small") => {
    countsRef.current = Array(BINS).fill(0);
    setCounts(Array(BINS).fill(0));
    setLanded(0);
    setTarget(n);
    live.current.target = n;
    parts.current = [];
    if (reduced) {
      for (let i = 0; i < n; i++) {
        let k = 0;
        for (let r = 0; r < ROWS; r++) k += Math.random() < 0.5 ? 1 : 0;
        countsRef.current[k]++;
      }
      queue.current = 0;
      setCounts([...countsRef.current]);
      setPhase(ph);
      setLanded(n);
      return;
    }
    queue.current = n;
    setPhase(ph);
  };

  const onLanzar = () => {
    const shape = pred.map((v) => Math.round(v * 100)).join("·");
    log(V.pred, pred.some((v) => v > 0) ? shape : T("sin dibujar", "not drawn"));
    log(V.drop, fmt(lang, N_MAIN));
    lanzar(N_MAIN, "drop");
  };

  /* ── Dibujar la predicción con el puntero ── */
  const setFromPointer = (e: RPointerEvent<HTMLCanvasElement>) => {
    const g = geo.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const k = Math.round((px - g.cx) / g.gap + ROWS / 2);
    if (k < 0 || k >= BINS) return;
    const v = Math.max(0, Math.min(1, (g.yb1 - py) / (g.yb1 - g.yb0)));
    setPred((old) => {
      const n = [...old];
      const from = live.current.lastBin;
      if (from >= 0 && from !== k) {
        const a = Math.min(from, k);
        const b = Math.max(from, k);
        for (let i = a; i <= b; i++) {
          const tt = (i - from) / (k - from);
          n[i] = old[from] + (v - old[from]) * tt;
        }
      } else n[k] = v;
      return n;
    });
    live.current.lastBin = k;
  };
  const onDown = (e: RPointerEvent<HTMLCanvasElement>) => {
    if (phase !== "predict") return;
    const g = geo.current;
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientY - rect.top < g.yb0 - g.rowH * 2) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    live.current.drawing = true;
    live.current.lastBin = -1;
    setFromPointer(e);
  };
  const onMove = (e: RPointerEvent<HTMLCanvasElement>) => {
    if (live.current.drawing && phase === "predict") setFromPointer(e);
  };
  const onUp = () => {
    live.current.drawing = false;
    live.current.lastBin = -1;
  };

  const explicar = (id: (typeof EXPLICACIONES)[number]["id"]) => {
    setExp(id);
    setPhase("explained");
    log(V.exp, EXPLICACIONES.find((e) => e.id === id)!.text[i18]);
  };

  const reset = () => {
    clear();
    parts.current = [];
    queue.current = 0;
    countsRef.current = Array(BINS).fill(0);
    setCounts(Array(BINS).fill(0));
    setPred(Array(BINS).fill(0));
    setLanded(0);
    setTarget(N_MAIN);
    setScore(null);
    setExp(null);
    setTeoria(false);
    setRapido(false);
    setSmallRuns([]);
    setPhase("predict");
  };

  const misiones: [string, string][] = [
    ["Predice", "Predict"],
    ["Observa", "Observe"],
    ["Explica", "Explain"],
    ["Desafío", "Challenge"],
  ];
  const mision = phase === "predict" ? 0 : phase === "drop" || phase === "result" ? (phase === "result" ? 2 : 1) : phase === "explained" ? 2 : 3;
  const fbExp = exp ? EXPLICACIONES.find((e) => e.id === exp)! : null;
  const dibujo = pred.some((v) => v > 0);

  return (
    <DemoShell
      lang={lang}
      onReset={reset}
      instruction={T(
        "Dibuja sobre los tubos dónde crees que van a caer mil partículas, lánzalas y compara. Después explica por qué pasa y prueba con solo 20.",
        "Draw on the tubes where you think a thousand particles will land, drop them and compare. Then explain why it happens and try with only 20.",
      )}
    >
      <div className="flex flex-col gap-3">
        <ol className="grid grid-cols-4 gap-1.5" aria-label={T("Misiones del laboratorio", "Lab missions")}>
          {misiones.map((m, i) => (
            <li
              key={m[0]}
              aria-current={i === mision ? "step" : undefined}
              className={`rounded-lg border px-2 py-1.5 text-center font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                i === mision ? "border-[#22D3EE]/70 bg-[#22D3EE]/10 text-[#A5F3FC]" : i < mision ? "border-white/15 text-white/60" : "border-white/10 text-white/35"
              }`}
            >
              {String(i + 1).padStart(2, "0")} · {m[i18]}
            </li>
          ))}
        </ol>

        <div
          ref={wrapRef}
          className="relative overflow-hidden rounded-2xl border border-[#22D3EE]/25 bg-[#04010B] shadow-[0_0_80px_-20px_rgba(34,211,238,0.35),inset_0_0_60px_rgba(124,58,237,0.12)]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,.28), transparent 70%), radial-gradient(50% 40% at 50% 100%, rgba(34,211,238,.18), transparent 70%), linear-gradient(rgba(124,58,237,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,.10) 1px, transparent 1px)",
              backgroundSize: "auto, auto, 32px 32px, 32px 32px",
            }}
          />
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={T(
              `Tablero de partículas. ${fmt(lang, landed)} de ${fmt(lang, target)} partículas en los tubos.`,
              `Particle board. ${fmt(lang, landed)} of ${fmt(lang, target)} particles in the tubes.`,
            )}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            className={`relative block w-full touch-none ${phase === "predict" ? "cursor-crosshair" : ""}`}
          />
          <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] sm:inset-x-4 sm:top-4 sm:text-xs">
            <span className="rounded-md border border-[#22D3EE]/30 bg-black/50 px-2 py-1 text-[#A5F3FC]">
              {phase === "predict" ? T("Dibuja tu predicción en los tubos", "Draw your prediction on the tubes") : `n = ${fmt(lang, landed)} / ${fmt(lang, target)}`}
            </span>
            <span className="rounded-md border border-white/15 bg-black/50 px-2 py-1 text-white/70">p = 0,50 · {ROWS} {T("filas", "rows")}</span>
          </div>
          {phase === "predict" && !dibujo && (
            <div className="pointer-events-none absolute inset-x-0 bottom-[22%] flex justify-center" aria-hidden>
              <span className="animate-pulse rounded-full bg-[#F472B6]/15 px-3 py-1 text-xs font-semibold text-[#FBCFE8] ring-1 ring-[#F472B6]/40 motion-reduce:animate-none">
                {T("Arrastra el dedo o el mouse sobre los tubos", "Drag your finger or mouse over the tubes")}
              </span>
            </div>
          )}
        </div>

        {/* Predicción por teclado */}
        {phase === "predict" && (
          <fieldset className="sr-only">
            <legend>{T("Tu predicción por tubo, de 0 a 100", "Your prediction per tube, from 0 to 100")}</legend>
            {pred.map((v, k) => (
              <label key={k}>
                {T(`Tubo ${k + 1}`, `Tube ${k + 1}`)}
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={Math.round(v * 100)}
                  onFocus={() => (live.current.focus = k)}
                  onBlur={() => (live.current.focus = -1)}
                  onChange={(e) => setPred((o) => o.map((x, i) => (i === k ? Number(e.target.value) / 100 : x)))}
                />
              </label>
            ))}
          </fieldset>
        )}

        {/* Controles y resultados */}
        <div aria-live="polite" className="flex flex-col gap-3">
          {phase === "predict" && (
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" onClick={onLanzar} className={`${cls.btnPrimary} bg-gradient-to-r from-[#7C3AED] to-[#0891B2] px-5`}>
                <Play className="h-4 w-4" aria-hidden />
                {T(`Lanzar ${fmt(lang, N_MAIN)} partículas`, `Drop ${fmt(lang, N_MAIN)} particles`)}
              </button>
              <button type="button" onClick={() => setPred(Array(BINS).fill(0))} disabled={!dibujo} className={cls.btnGhost}>
                <Eraser className="h-4 w-4" aria-hidden />
                {T("Borrar", "Clear")}
              </button>
              {!dibujo && <span className="text-xs text-white/50">{T("También puedes lanzar sin predecir, pero pierdes la sorpresa.", "You can also drop without predicting, but you lose the surprise.")}</span>}
            </div>
          )}

          {phase === "drop" && (
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => setRapido(true)} disabled={rapido} className={cls.btnGhost}>
                <FastForward className="h-4 w-4" aria-hidden />
                {T("Acelerar", "Speed up")}
              </button>
              <span className="font-mono text-xs text-[#A5F3FC]">{T("Observa cómo se llenan los tubos…", "Watch the tubes fill up…")}</span>
            </div>
          )}

          {(phase === "result" || phase === "explained") && score !== null && (
            <div className="rounded-2xl border border-[#22D3EE]/30 bg-[#22D3EE]/[0.06] p-4 sm:p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#A5F3FC]">{T("Tu predicción frente a lo que pasó", "Your prediction versus what happened")}</p>
              <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                {dibujo ? T(`Coincide en ${score} %`, `${score}% match`) : T("No dibujaste una predicción", "You did not draw a prediction")}
              </p>
              <p className="mt-1 text-sm text-white/70">
                {dibujo
                  ? score >= 80
                    ? T("Anticipaste la campana. Ahora explica por qué se forma.", "You anticipated the bell. Now explain why it forms.")
                    : T("La línea rosada es lo que esperabas y los tubos, lo que pasó. ¿Por qué se amontonan en el centro?", "The pink line is what you expected and the tubes are what happened. Why do they pile up in the middle?")
                  : T("Los tubos muestran lo que pasó. ¿Por qué se amontonan en el centro?", "The tubes show what happened. Why do they pile up in the middle?")}
              </p>
              {phase === "result" && (
                <div className="mt-3 flex flex-col gap-2" role="group" aria-label={T("Explica el resultado", "Explain the result")}>
                  {EXPLICACIONES.map((o) => (
                    <button key={o.id} type="button" onClick={() => explicar(o.id)} className={cls.chip}>
                      {o.text[i18]}
                    </button>
                  ))}
                </div>
              )}
              {phase === "explained" && fbExp && (
                <div className="mt-3">
                  <p className={`border-l-4 px-3 py-2 text-sm leading-relaxed ${fbExp.ok ? "border-[#4ADE80] bg-[#4ADE80]/[0.07] text-white/90" : "border-[#F472B6] bg-[#F472B6]/[0.07] text-white/90"}`}>
                    <span className="font-semibold">{fbExp.ok ? T("Correcto. ", "Correct. ") : T("Revisa esto. ", "Look again. ")}</span>
                    {fbExp.fb[i18]}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {!fbExp.ok && (
                      <button type="button" onClick={() => setPhase("result")} className={cls.btnGhost}>
                        <Undo2 className="h-4 w-4" aria-hidden />
                        {T("Elegir otra explicación", "Choose another explanation")}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setTeoria((v) => !v);
                        log(V.theory, T("curva teórica", "theoretical curve"));
                      }}
                      aria-pressed={teoria}
                      className={cls.btnGhost}
                    >
                      <Sparkles className="h-4 w-4" aria-hidden />
                      {teoria ? T("Ocultar la curva teórica", "Hide the theoretical curve") : T("Ver la curva teórica", "Show the theoretical curve")}
                    </button>
                    <button type="button" onClick={() => lanzar(N_SMALL, "small")} className={`${cls.btnPrimary} bg-gradient-to-r from-[#7C3AED] to-[#0891B2]`}>
                      <Play className="h-4 w-4" aria-hidden />
                      {T(`Desafío: lanzar solo ${N_SMALL}`, `Challenge: drop only ${N_SMALL}`)}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {phase === "small" && (
            <div className="rounded-2xl border border-[#F472B6]/30 bg-[#F472B6]/[0.06] p-4 sm:p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FBCFE8]">{T(`Desafío · muestras de ${N_SMALL}`, `Challenge · samples of ${N_SMALL}`)}</p>
              {smallRuns.length === 0 ? (
                <p className="mt-1 text-sm text-white/75">{T("Mira dónde caen solo 20 partículas…", "Watch where only 20 particles land…")}</p>
              ) : (
                <>
                  <p className="mt-1 text-lg font-bold text-white">
                    {T("Parecido con la campana en cada tirada: ", "Similarity to the bell in each run: ")}
                    <span className="font-mono text-[#FBCFE8]">{smallRuns.map((s) => `${s.sc} %${s.n !== N_SMALL ? ` (${fmt(lang, s.n)})` : ""}`).join(" · ")}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">
                    {smallRuns.length < 2
                      ? T("Lanza otras 20 y compara: la forma cambia de una tirada a otra.", "Drop another 20 and compare: the shape changes from run to run.")
                      : T(
                          "Con 20 partículas la forma cambia en cada tirada. Con mil, se repite. Por eso una muestra pequeña puede engañar a quien decide con datos.",
                          "With 20 particles the shape changes every run. With a thousand, it repeats. That is why a small sample can mislead anyone who decides with data.",
                        )}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button type="button" onClick={() => lanzar(N_SMALL, "small")} className={cls.btnPrimary}>
                      <Play className="h-4 w-4" aria-hidden />
                      {T(`Lanzar otras ${N_SMALL}`, `Drop another ${N_SMALL}`)}
                    </button>
                    <button type="button" onClick={() => lanzar(N_MAIN, "small")} className={cls.btnGhost}>
                      {T(`Volver a ${fmt(lang, N_MAIN)}`, `Back to ${fmt(lang, N_MAIN)}`)}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <EventLog lang={lang} events={events} />
      </div>
    </DemoShell>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BellRing, BookOpen, CirclePlay, SkipForward, Sparkles, Users } from "lucide-react";
import { cls, useEventLog, EventLog, DemoShell, useReducedMotion, type DemoProps } from "./ui";

type T = [string, string];
type Kind = "ask" | "hint" | "answer" | "insist" | "more";
type Opt = { l: T; to: string; k: Kind };
type Nodo = { t: T; chip?: boolean; plot?: boolean; opts: Opt[] };
type Msg = { k: "s"; id: number; l: T } | { k: "c"; id: number; node: string };

const CITA: T = ["Lección 2 · minuto 4:10", "Lesson 2 · minute 4:10"];

const pista = (to: string): Opt => ({ l: ["Dame una pista", "Give me a hint"], to, k: "hint" });
const otra: Opt = { l: ["Hacer otra pregunta", "Ask something else"], to: "menu", k: "more" };

const INICIALES: Opt[] = [
  { l: ["¿Por qué no usar el promedio?", "Why not just use the average?"], to: "a1", k: "ask" },
  { l: ["Dame la respuesta del taller 2", "Give me the answer to assignment 2"], to: "b1", k: "ask" },
  { l: ["No entiendo la gráfica", "I don't understand the chart"], to: "c1", k: "ask" },
];

const MEDIANA: Opt = { l: ["La mediana, el dato del centro", "The median, the middle value"], to: "a3", k: "answer" };
const ORDENE: Opt = { l: ["Ya los ordené, ¿y ahora?", "I sorted them, now what?"], to: "b2", k: "answer" };
const INSISTIR: Opt = { l: ["Solo dame la respuesta, por favor", "Just give me the answer, please"], to: "b1i", k: "insist" };
const SUBE: Opt = { l: ["Lo sube y deja de parecerse a la mayoría", "It pulls it up and it stops resembling most people"], to: "a2", k: "answer" };
const SEIS: Opt = { l: ["Seis puntos juntos y uno muy lejos", "Six points close together and one far away"], to: "c2", k: "answer" };
const BARRA: Opt = { l: ["La barra más alta, sola, jala el promedio", "The tallest bar, standing alone, pulls the average"], to: "c3", k: "answer" };

const NODOS: Record<string, Nodo> = {
  inicio: {
    t: [
      "Hola, soy el copiloto de tu curso. Estás en la Lección 2, Media y mediana, de «Analítica de Datos para la Toma de Decisiones». Te guío con preguntas y pistas, pero no resuelvo tus talleres calificados. ¿Con qué empezamos?",
      "Hi, I'm your course copilot. You're in Lesson 2, Mean and median, of “Data Analytics for Decision Making”. I guide you with questions and hints, but I don't solve your graded assignments. Where do we start?",
    ],
    opts: INICIALES,
  },
  menu: {
    t: ["Claro. ¿Qué otra duda de la Lección 2 quieres revisar?", "Sure. Which other doubt from Lesson 2 do you want to go over?"],
    opts: INICIALES,
  },

  // Camino A: por qué no usar el promedio
  a1: {
    t: [
      "Buena pregunta. Mira estos siete sueldos mensuales, en millones de pesos: 1,8 · 2,0 · 2,2 · 2,4 · 2,6 · 2,9 y 12,0. Seis están alrededor de 2 y uno llega a 12. ¿Qué crees que le pasa al promedio por culpa de ese 12?",
      "Good question. Look at these seven monthly salaries, in millions of pesos: 1.8 · 2.0 · 2.2 · 2.4 · 2.6 · 2.9 and 12.0. Six are around 2 and one reaches 12. What do you think that 12 does to the average?",
    ],
    opts: [SUBE, { l: ["No le pasa nada, es un dato más", "Nothing, it's just one more data point"], to: "a1w", k: "answer" }, pista("a1h")],
  },
  a1w: {
    t: [
      "Hagamos la prueba en vez de adivinar. Calcula el promedio de los siete y luego el de los seis sin el 12. ¿Siguen contando la misma historia?",
      "Let's test it instead of guessing. Calculate the average of all seven, then the average of the six without the 12. Do they still tell the same story?",
    ],
    opts: [SUBE, pista("a1h")],
  },
  a1h: {
    t: [
      "Pista 1 de 2. El promedio suma todo y lo reparte en partes iguales, así que un valor muy grande pesa más que los demás. Fíjate a cuántos de los siete les alcanza para llegar al promedio que te dé. Lo explico aquí:",
      "Hint 1 of 2. The average adds everything up and splits it evenly, so a very large value weighs more than the others. See how many of the seven actually reach the average you get. I cover it here:",
    ],
    chip: true,
    opts: [SUBE, { l: ["Sigo sin ver por qué", "I still don't see why"], to: "a1h2", k: "hint" }],
  },
  a1h2: {
    t: [
      "Pista 2 de 2. El promedio de los siete da 3,7 millones y solo uno de ellos gana más que eso. ¿Ese 3,7 describe bien a la mayoría del grupo?",
      "Hint 2 of 2. The average of the seven is 3.7 million and only one of them earns more than that. Does that 3.7 describe most of the group well?",
    ],
    opts: [SUBE],
  },
  a2: {
    t: [
      "Eso es. Un valor extremo jala el promedio hacia él. Ahora la otra mitad: si el promedio no describe bien a este grupo, ¿qué medida te cuenta mejor cuánto gana una persona típica?",
      "Exactly. An extreme value pulls the average toward it. Now the other half: if the average doesn't describe this group well, which measure tells you better what a typical person earns?",
    ],
    opts: [MEDIANA, { l: ["El sueldo más alto", "The highest salary"], to: "a2w", k: "answer" }, pista("a2h")],
  },
  a2w: {
    t: [
      "Piensa al revés: buscamos una medida que ese 12 no pueda arrastrar. ¿Cuál se queda en su sitio aunque el último dato crezca o se encoja?",
      "Think the other way around: we want a measure that the 12 cannot drag. Which one stays put even if the last value grows or shrinks?",
    ],
    opts: [MEDIANA, pista("a2h")],
  },
  a2h: {
    t: [
      "Pista. Ordena los siete de menor a mayor y busca el que queda justo en el centro. Aunque el último valor se duplique, ese no se mueve. Está en la Lección 2:",
      "Hint. Sort the seven from lowest to highest and find the one right in the middle. Even if the last value doubles, that one does not move. It's in Lesson 2:",
    ],
    chip: true,
    opts: [MEDIANA],
  },
  a3: {
    t: [
      "Lo resolviste tú. La mediana del grupo es 2,4 millones, el dato del centro, y el 12 no la mueve. El promedio, en cambio, sube a 3,7. Cuando hay valores extremos, mirar las dos medidas juntas te cuenta más que una sola.",
      "You worked it out yourself. The group's median is 2.4 million, the middle value, and the 12 does not move it. The average, on the other hand, rises to 3.7. When there are extreme values, looking at both measures together tells you more than either one alone.",
    ],
    opts: [otra],
  },

  // Camino B: pide la respuesta del taller calificado
  b1: {
    t: [
      "Entiendo las ganas de terminar, pero no entrego respuestas de talleres calificados. Si te la doy, el taller deja de medir lo que sabes tú. Lo que sí hago es acompañarte. Primer paso: ordena los siete datos de menor a mayor. ¿Cómo seguimos?",
      "I get the urge to finish, but I don't hand out answers to graded assignments. If I give it to you, the assignment stops measuring what you know. What I can do is walk with you. First step: sort the seven values from lowest to highest. How do we continue?",
    ],
    opts: [ORDENE, pista("b1h"), INSISTIR],
  },
  b1h: {
    t: [
      "Pista. Con los datos ordenados, el del centro deja la misma cantidad de valores a cada lado. Cuenta cuántos hay y ubica su posición. La idea está aquí:",
      "Hint. With the values sorted, the middle one leaves the same number of values on each side. Count how many there are and find its position. The idea is here:",
    ],
    chip: true,
    opts: [ORDENE, INSISTIR],
  },
  b1i: {
    t: [
      "Mi respuesta sigue siendo la misma: no te doy la respuesta del taller. Le avisé a tu docente para que pueda acompañarte. Sigamos con lo que sí podemos hacer: ordena los datos y dime cuál queda en el centro.",
      "My answer is still the same: I won't give you the assignment's answer. I let your teacher know so they can support you. Let's keep going with what we can do: sort the values and tell me which one lands in the middle.",
    ],
    opts: [{ l: ["Está bien, ordeno los datos", "Okay, I'll sort the values"], to: "b2", k: "answer" }, pista("b1h")],
  },
  b2: {
    t: [
      "Muy bien. Con los datos en orden, ubica el que queda en el centro y revisa cuántos valores hay a cada lado. Luego compáralo con el promedio y escribe en el taller qué te dice la diferencia. ¿Cómo vas?",
      "Nice. With the values in order, find the one in the middle and check how many values sit on each side. Then compare it with the average and write in the assignment what the difference tells you. How is it going?",
    ],
    opts: [{ l: ["Ya lo tengo, lo escribo yo", "I've got it, I'll write it myself"], to: "b3", k: "answer" }, pista("b1h")],
  },
  b3: {
    t: [
      "Perfecto, esa parte es tuya. Antes de enviar, pregúntate si tu decisión cambiaría según la medida que uses. Esa interpretación es la parte del taller que nadie puede hacer por ti.",
      "Great, that part is yours. Before you submit, ask yourself whether your decision would change depending on the measure you use. That interpretation is the part of the assignment nobody can do for you.",
    ],
    opts: [otra],
  },

  // Camino C: no entiende la gráfica
  c1: {
    t: [
      "Lo mismo, de otra forma. Cada punto de la línea es un sueldo mensual, en millones de pesos, de menor a mayor. Cuéntame con tus palabras: ¿cómo se reparten los puntos?",
      "The same thing, shown differently. Each point on the line is a monthly salary, in millions of pesos, from lowest to highest. Tell me in your own words: how are the points spread out?",
    ],
    plot: true,
    opts: [SEIS, { l: ["Siete puntos repartidos parejo", "Seven points evenly spread"], to: "c1w", k: "answer" }, pista("c1h")],
  },
  c1w: {
    t: [
      "Mira otra vez las distancias entre puntos vecinos. ¿Hay alguna mucho más grande que las demás? Vuelve a describirlo.",
      "Look again at the distances between neighboring points. Is any of them much larger than the rest? Describe it once more.",
    ],
    opts: [SEIS, pista("c1h")],
  },
  c1h: {
    t: [
      "Pista. Compara el espacio entre 2,9 y 12,0 con el espacio entre 1,8 y 2,9. Aquí muestro cómo leer esos huecos en la gráfica:",
      "Hint. Compare the gap between 2.9 and 12.0 with the gap between 1.8 and 2.9. Here I show how to read those gaps on the chart:",
    ],
    chip: true,
    opts: [SEIS],
  },
  c2: {
    t: [
      "Eso mismo. Seis datos casi pegados y uno muy lejos, lo que se llama un valor atípico. Ahora vuelve a la gráfica del curso: ¿cuál de sus barras hace el papel de ese punto lejano y qué crees que le hace al promedio?",
      "That's it. Six values almost touching and one far away, what is called an outlier. Now go back to the course chart: which of its bars plays the role of that far point and what do you think it does to the average?",
    ],
    opts: [BARRA, { l: ["Todas las barras pesan lo mismo", "All bars weigh the same"], to: "c2w", k: "answer" }, pista("c2h")],
  },
  c2w: {
    t: [
      "Fíjate en cuál barra se separa del resto. Una sola barra muy alta, ¿pesa igual que las demás cuando se suma todo?",
      "Notice which bar stands apart from the rest. A single very tall bar, does it weigh the same as the others when everything is added up?",
    ],
    opts: [BARRA, pista("c2h")],
  },
  c2h: {
    t: [
      "Pista. Busca la barra que queda lejos de las otras. El promedio se acerca a ella aunque sea una sola. Lo vemos en la Lección 2:",
      "Hint. Look for the bar that sits far from the others. The average moves toward it even if it is just one. We see it in Lesson 2:",
    ],
    chip: true,
    opts: [BARRA],
  },
  c3: {
    t: [
      "Así se lee la gráfica. Un valor atípico se ve como una barra aislada y arrastra el promedio hacia él. Si otra parte de la gráfica sigue sin quedar clara, dime cuál y la miramos desde otro ángulo.",
      "That's how you read the chart. An outlier shows up as an isolated bar and drags the average toward it. If another part of the chart is still unclear, tell me which one and we'll look at it from another angle.",
    ],
    opts: [otra],
  },
};

const TEMA: Record<string, T> = {
  a: ["el promedio", "the average"],
  b: ["el taller 2", "assignment 2"],
  c: ["la gráfica", "the chart"],
};

const DUDAS: { id: string; n: number; l: T }[] = [
  { id: "a", n: 14, l: ["¿Por qué no usar el promedio?", "Why not just use the average?"] },
  { id: "b", n: 9, l: ["Piden la respuesta de un taller", "Asking for an assignment's answer"] },
  { id: "c", n: 7, l: ["No entienden la gráfica", "Not understanding the chart"] },
];

/** Línea de puntos en texto: seis sueldos juntos y uno lejano. */
function lineaDePuntos(es: boolean) {
  const dec = (s: string) => (es ? s.replace(".", ",") : s);
  const vals = ["1.8", "2.0", "2.2", "2.4", "2.6", "2.9"].map(dec);
  const etiquetas = vals.join(" ") + " ".repeat(8) + dec("12.0");
  const puntos = vals.map(() => " ● ").join(" ") + "·".repeat(9) + "●";
  return `${etiquetas}\n${puntos}`;
}

function Typed({ text, animate, onDone, onTick }: { text: string; animate: boolean; onDone: () => void; onTick: () => void }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const id = setTimeout(() => {
      const next = n + 1;
      setN(next);
      onTick();
      if (next >= text.length) onDone();
    }, 25);
    return () => clearTimeout(id);
  }, [animate, n, text, onDone, onTick]);
  if (!animate) return <>{text}</>;
  return (
    <>
      <span aria-hidden>{text.slice(0, n)}</span>
      <span className="sr-only">{text}</span>
    </>
  );
}

function Panel({ es, topics, alerted }: { es: boolean; topics: Set<string>; alerted: boolean }) {
  const L = es ? 0 : 1;
  const max = Math.max(...DUDAS.map((d) => d.n));
  const badge = (
    <span className="rounded-full border border-[#F472B6]/40 bg-[#F472B6]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#F9A8D4]">
      {es ? "Ejemplo ilustrativo" : "Illustrative example"}
    </span>
  );
  return (
    <div className="flex flex-col gap-4 p-4">
      <section>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-sm font-semibold text-white">{es ? "Dudas frecuentes de la cohorte" : "Most frequent doubts in the cohort"}</h4>
          {badge}
        </div>
        <ul className="space-y-2.5">
          {DUDAS.map((d) => {
            const on = topics.has(d.id);
            return (
              <li key={d.id}>
                <div className="flex items-baseline justify-between gap-3 text-xs">
                  <span className={on ? "font-medium text-white" : "text-white/70"}>
                    {d.l[L]}
                    {on && <span className="ml-1.5 text-[#F9A8D4]">{es ? "(tu conversación)" : "(your conversation)"}</span>}
                  </span>
                  <span className="shrink-0 text-white/50">{es ? `${d.n} estudiantes` : `${d.n} students`}</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-white/10" aria-hidden>
                  <div className={`h-full rounded-full ${on ? "bg-[#F472B6]" : "bg-[#7C3AED]"}`} style={{ width: `${(d.n / max) * 100}%` }} />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <Users className="h-4 w-4 text-[#C084FC]" aria-hidden />
          {es ? "Estudiantes atascados: 3" : "Stuck students: 3"}
        </p>
        {badge}
      </section>

      <section>
        <h4 className="mb-2 text-sm font-semibold text-white">{es ? "Avisos en vivo" : "Live alerts"}</h4>
        <div aria-live="polite">
          {alerted ? (
            <div className="rounded-xl border border-[#F472B6]/50 bg-[#F472B6]/10 p-3">
              <p className="flex items-center gap-2 text-sm font-semibold text-[#F9A8D4]">
                <BellRing className="h-4 w-4" aria-hidden />
                {es ? "Aviso enviado" : "Alert sent"}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/85">
                {es
                  ? "Un estudiante pidió por segunda vez la respuesta del taller 2. El copiloto no la dio y lo sigue guiando con pistas. Puedes escribirle un mensaje de apoyo."
                  : "A student asked for the answer to assignment 2 a second time. The copilot did not give it and keeps guiding with hints. You can send a supportive message."}
              </p>
            </div>
          ) : (
            <p className="rounded-xl border border-dashed border-white/15 px-3 py-2.5 text-sm text-white/50">
              {es ? "Sin avisos en esta conversación." : "No alerts in this conversation."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default function Copiloto({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const reduced = useReducedMotion();
  const { events, log, clear } = useEventLog();
  const [msgs, setMsgs] = useState<Msg[]>([{ k: "c", id: 0, node: "inicio" }]);
  const [typingId, setTypingId] = useState<number | null>(0);
  const [run, setRun] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const optsRef = useRef<HTMLDivElement>(null);
  const acted = useRef(false);

  const typing = typingId !== null && !reduced;
  const last = msgs[msgs.length - 1];
  const nodo = last.k === "c" ? NODOS[last.node] : null;
  const alerted = msgs.some((m) => m.k === "c" && m.node === "b1i");
  const topics = new Set<string>();
  msgs.forEach((m) => {
    if (m.k === "c" && "abc".includes(m.node[0])) topics.add(m.node[0]);
  });

  const scrollDown = useCallback(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);
  const onTick = useCallback(() => {
    requestAnimationFrame(scrollDown);
  }, [scrollDown]);
  const onDone = useCallback(() => setTypingId(null), []);

  useEffect(() => {
    scrollDown();
  }, [msgs.length, scrollDown]);

  useEffect(() => {
    if (!typing && acted.current) optsRef.current?.querySelector<HTMLButtonElement>("button")?.focus({ preventScroll: true });
  }, [typing, msgs.length]);

  const V = es
    ? { ask: "preguntó", hint: "usó pista", notify: "aviso al docente", ans: "respondió" }
    : { ask: "asked", hint: "used hint", notify: "teacher alert", ans: "answered" };

  const pick = (o: Opt) => {
    acted.current = true;
    const tema = last.k === "c" ? TEMA[last.node[0]] : undefined;
    if (o.k === "ask") log(V.ask, o.l[L]);
    if (o.k === "answer") log(V.ans, o.l[L]);
    if (o.k === "hint") log(V.hint, `${es ? "Pista sobre" : "Hint on"} ${tema ? tema[L] : ""}`.trim());
    if (o.k === "insist") {
      log(V.ask, o.l[L]);
      if (!alerted) log(V.notify, es ? "Pidió otra vez la respuesta del taller 2" : "Asked again for the answer to assignment 2");
    }
    const base = msgs.length;
    setMsgs([...msgs, { k: "s", id: base, l: o.l }, { k: "c", id: base + 1, node: o.to }]);
    setTypingId(base + 1);
  };

  const reset = () => {
    acted.current = false;
    setMsgs([{ k: "c", id: 0, node: "inicio" }]);
    setTypingId(0);
    setRun((r) => r + 1);
    clear();
  };

  return (
    <DemoShell
      lang={lang}
      onReset={reset}
      instruction={
        es
          ? "Hazle una pregunta al copiloto y mira cómo te guía sin darte la respuesta. En el panel del docente ves lo que recibe tu profesor."
          : "Ask the copilot a question and see how it guides you without giving you the answer. The teacher panel shows what your teacher receives."
      }
    >
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start">
        <div className={`${cls.stage} lg:col-start-1`}>
          <div className="flex items-start gap-3 border-b border-white/10 px-4 py-3">
            <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[#C084FC]" aria-hidden />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{es ? "Lección 2 · Media y mediana" : "Lesson 2 · Mean and median"}</p>
              <p className="text-xs text-white/55">{es ? "Analítica de Datos para la Toma de Decisiones" : "Data Analytics for Decision Making"}</p>
            </div>
          </div>

          <div
            ref={listRef}
            role="log"
            aria-live="polite"
            aria-label={es ? "Conversación con el copiloto" : "Conversation with the copilot"}
            className="h-[24rem] space-y-4 overflow-y-auto px-4 py-4 sm:h-[26rem]"
          >
            {msgs.map((m) => {
              if (m.k === "s") {
                return (
                  <div key={`${run}-${m.id}`} className="flex flex-col items-end">
                    <span className="mb-1 text-[11px] text-white/45">{es ? "Tú" : "You"}</span>
                    <p className="max-w-[88%] rounded-2xl rounded-tr-sm bg-[#7C3AED]/80 px-3.5 py-2.5 text-sm leading-relaxed text-white">{m.l[L]}</p>
                  </div>
                );
              }
              const n = NODOS[m.node];
              const animate = typing && typingId === m.id;
              return (
                <div key={`${run}-${m.id}`} className="flex items-start gap-2.5">
                  <span className="mt-5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F472B6]" aria-hidden>
                    <Sparkles className="h-3.5 w-3.5 text-white" />
                  </span>
                  <div className="min-w-0 max-w-[88%]">
                    <span className="mb-1 block text-[11px] text-white/45">{es ? "Copiloto" : "Copilot"}</span>
                    <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-sm leading-relaxed text-white/90">
                      {n.plot && (
                        <pre
                          role="img"
                          aria-label={es ? "Línea de puntos con los siete sueldos en millones: 1,8 · 2,0 · 2,2 · 2,4 · 2,6 · 2,9 y 12,0" : "Dot line with the seven salaries in millions: 1.8 · 2.0 · 2.2 · 2.4 · 2.6 · 2.9 and 12.0"}
                          className="mb-2.5 overflow-x-auto rounded-lg bg-black/40 px-3 py-2 font-mono text-xs leading-snug text-[#C084FC]"
                        >
                          {lineaDePuntos(es)}
                        </pre>
                      )}
                      <Typed text={n.t[L]} animate={animate} onDone={onDone} onTick={onTick} />
                      {n.chip && !animate && (
                        <span className="mt-2 flex w-fit items-center gap-1.5 rounded-full border border-[#C084FC]/40 bg-[#7C3AED]/20 px-2.5 py-1 text-xs font-medium text-[#E9D5FF]">
                          <CirclePlay className="h-3.5 w-3.5" aria-hidden />
                          <span className="sr-only">{es ? "Fuente: " : "Source: "}</span>
                          {CITA[L]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="min-h-[9.5rem] border-t border-white/10 px-4 py-3">
            {typing ? (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-white/50">{es ? "El copiloto está escribiendo…" : "The copilot is typing…"}</span>
                <button type="button" onClick={onDone} className={`${cls.btnGhost} px-3 py-1.5 text-xs`}>
                  <SkipForward className="h-3.5 w-3.5" aria-hidden />
                  {es ? "Saltar" : "Skip"}
                </button>
              </div>
            ) : (
              nodo && (
                <div ref={optsRef}>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">{es ? "Responde como estudiante" : "Reply as the student"}</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {nodo.opts.map((o) => (
                      <button key={o.to + o.l[0]} type="button" onClick={() => pick(o)} className={cls.chip}>
                        {o.l[L]}
                      </button>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <aside
          aria-label={es ? "Lo que ve el docente" : "What the teacher sees"}
          className={`${cls.stage} hidden lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:block`}
        >
          <div className="border-b border-white/10 px-4 py-3">
            <h3 className="text-sm font-semibold text-white">{es ? "Lo que ve el docente" : "What the teacher sees"}</h3>
          </div>
          <Panel es={es} topics={topics} alerted={alerted} />
        </aside>

        <details className={`${cls.stage} lg:hidden`}>
          <summary className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-white ${cls.focus}`}>
            <span>{es ? "Lo que ve el docente" : "What the teacher sees"}</span>
            {alerted && (
              <span className="rounded-full bg-[#F472B6]/20 px-2 py-0.5 text-[11px] font-semibold text-[#F9A8D4]">{es ? "1 aviso" : "1 alert"}</span>
            )}
          </summary>
          <div className="border-t border-white/10">
            <Panel es={es} topics={topics} alerted={alerted} />
          </div>
        </details>

        <div className="lg:col-start-1">
          <EventLog lang={lang} events={events} />
        </div>
      </div>
    </DemoShell>
  );
}

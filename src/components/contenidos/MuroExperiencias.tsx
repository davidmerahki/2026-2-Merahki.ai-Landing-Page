/**
 * Muro de vistas previas del encabezado del catálogo (25-nov-2026): dos filas que se desplazan en sentidos
 * opuestos sobre un plano inclinado. Es decorativo (aria-hidden); cada mosaico abre la ficha con #exp-<id>.
 * Sin JavaScript: animación CSS que se detiene al pasar el mouse y no corre con movimiento reducido.
 */
import { EXPERIENCIAS, type Experiencia, type Lang } from "@/content/contenidos/experiencias";
import { FONDO } from "@/content/contenidos/visual";

const CSS = `
.mw-stage{position:relative;height:430px;perspective:1600px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)}
.mw-plane{position:absolute;left:50%;top:10px;width:150%;margin-left:-75%;transform:rotateX(16deg) rotateZ(-5deg);transform-origin:50% 0;display:flex;flex-direction:column;gap:20px}
.mw-row{display:flex;width:max-content;animation:mw-l 70s linear infinite}
.mw-row.mw-r{animation-name:mw-r;animation-duration:80s}
@keyframes mw-l{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes mw-r{from{transform:translateX(-50%)}to{transform:translateX(0)}}
.mw-stage:hover .mw-row{animation-play-state:paused}
.mw-tile{transition:transform .5s cubic-bezier(.2,.8,.2,1)}
.mw-tile:hover{transform:translateY(-6px) scale(1.02)}
@media (max-width:767px){.mw-stage{height:300px}.mw-plane{gap:14px}}
@media (prefers-reduced-motion:reduce){.mw-row{animation:none}.mw-tile,.mw-tile:hover{transition:none;transform:none}}
`;

type Tile = { e: Experiencia; img: string; tipo: "captura" | "foto" };

function tiles(lang: Lang, lista: Experiencia[]): Tile[] {
  return lista.map((e) => {
    if (e.vista.tipo === "captura") return { e, img: `/contenidos/previews/${lang}/${e.id}.webp`, tipo: "captura" };
    if (e.vista.tipo === "video") return { e, img: e.vista.poster, tipo: "foto" };
    const r = e.referencias?.[0];
    return { e, img: r ? `https://i.ytimg.com/vi/${r.videoId}/${r.miniatura ?? "hqdefault"}.jpg` : "", tipo: "foto" };
  });
}

function Mosaico({ t, lang }: { t: Tile; lang: Lang }) {
  return (
    <a
      href={`#exp-${t.e.id}`}
      tabIndex={-1}
      className="mw-tile relative mr-5 block h-[150px] w-[240px] shrink-0 overflow-hidden rounded-2xl border border-white/12 md:h-[200px] md:w-[320px]"
      style={{ background: FONDO[t.e.familia] }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={t.img}
        alt=""
        loading="eager"
        decoding="async"
        className={t.tipo === "captura" ? "absolute left-[8%] top-[11%] w-[92%] rounded-lg shadow-[0_24px_48px_-14px_rgba(0,0,0,.85)] ring-1 ring-white/10" : "absolute inset-0 h-full w-full object-cover"}
      />
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />
      <span className="absolute bottom-3 left-3 right-3 truncate text-sm font-semibold text-white">{t.e.nombre[lang]}</span>
    </a>
  );
}

export default function MuroExperiencias({ lang }: { lang: Lang }) {
  const mitad = Math.ceil(EXPERIENCIAS.length / 2);
  const fila1 = tiles(lang, EXPERIENCIAS.slice(0, mitad));
  const fila2 = tiles(lang, [...EXPERIENCIAS.slice(mitad), EXPERIENCIAS[0]]);
  return (
    <div className="mw-stage" aria-hidden>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="mw-plane">
        {[fila1, fila2].map((f, i) => (
          <div key={i} className={`mw-row ${i ? "mw-r" : ""}`}>
            {[...f, ...f].map((t, k) => (
              <Mosaico key={`${t.e.id}-${k}`} t={t} lang={lang} />
            ))}
          </div>
        ))}
      </div>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

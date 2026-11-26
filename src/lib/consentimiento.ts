// Consentimiento para las cookies de HubSpot en merahki.ai (26-nov-2026).
// Ley 1581 de 2012 y Decreto 1377 de 2013: el permiso tiene que ser previo, expreso e informado.
// Por eso el código de seguimiento de HubSpot no se carga hasta que la persona elige «Aceptar» en el aviso.
// La decisión vive en una cookie propia y necesaria (`merahki-cookies`), con la versión del aviso y la fecha.
// Si el aviso cambia de fondo (por ejemplo, si se agregan cookies de publicidad), sube VERSION_AVISO
// y el sitio vuelve a preguntarle a todo el mundo.

export type Decision = "aceptadas" | "rechazadas";

export const COOKIE_CONSENTIMIENTO = "merahki-cookies";
export const VERSION_AVISO = "v1";
const DURACION_SEGUNDOS = 60 * 60 * 24 * 180; // 6 meses, igual que las cookies principales de HubSpot

// Eventos de ventana: el aviso avisa la decisión y el pie de página pide abrir el aviso otra vez.
export const EVENTO_DECISION = "merahki:cookies-decision";
export const EVENTO_ABRIR = "merahki:cookies-abrir";

// Cookies de seguimiento que pone HubSpot (knowledge.hubspot.com, «What cookies does HubSpot set»).
const COOKIES_HUBSPOT = ["__hstc", "hubspotutk", "__hssc", "__hssrc"];

declare global {
  interface Window {
    _hsq?: unknown[][];
    _hsp?: unknown[][];
    disableHubSpotCookieBanner?: boolean;
  }
}

export function leerDecision(): Decision | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|;\s*)merahki-cookies=([^;]+)/);
  if (!m) return null;
  const [version, decision] = decodeURIComponent(m[1]).split(".");
  if (version !== VERSION_AVISO) return null;
  return decision === "aceptadas" || decision === "rechazadas" ? decision : null;
}

export function guardarDecision(decision: Decision) {
  const fecha = new Date().toISOString().slice(0, 10);
  const segura = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_CONSENTIMIENTO}=${VERSION_AVISO}.${decision}.${fecha}; path=/; max-age=${DURACION_SEGUNDOS}; SameSite=Lax${segura}`;
  window.dispatchEvent(new CustomEvent<Decision>(EVENTO_DECISION, { detail: decision }));
}

export function abrirAvisoCookies() {
  window.dispatchEvent(new Event(EVENTO_ABRIR));
}

// Borra las cookies de HubSpot en el dominio actual y en el dominio raíz (HubSpot las pone en .merahki.ai).
export function borrarCookiesHubSpot() {
  const host = window.location.hostname;
  const partes = host.split(".");
  const dominios = ["", host, "." + host];
  if (partes.length > 2) dominios.push("." + partes.slice(-2).join("."));
  for (const nombre of COOKIES_HUBSPOT) {
    for (const d of dominios) {
      document.cookie = `${nombre}=; path=/; max-age=0${d ? "; domain=" + d : ""}`;
    }
  }
}

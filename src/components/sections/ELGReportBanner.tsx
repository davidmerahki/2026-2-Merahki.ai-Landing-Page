"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, BookOpen, Download } from "lucide-react";

const ELG_REPORT_URL = "https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w";
const BOOK_DEMO_URL =
  "https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651";

export default function ELGReportBanner() {
  const pathname = usePathname();
  const isEs = pathname.startsWith("/es");

  return (
    <section className="relative py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-2xl border border-accent-purple/25 overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 120% 140% at 0% 50%, rgba(88,28,135,0.22), rgba(49,10,101,0.18), rgba(10,5,20,0.55))",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
            {/* Icon */}
            <div className="hidden md:flex w-14 h-14 rounded-2xl bg-accent-purple/20 border border-accent-purple/30 items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-accent-purple" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-xs font-bold tracking-widest uppercase mb-3">
                <BookOpen className="w-3 h-3 md:hidden" />
                {isEs ? "Reporte Gratuito" : "Free Report"}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                {isEs ? (
                  <>
                    El{" "}
                    <span className="text-gradient-peach-purple">
                      Reporte ELG
                    </span>{" "}
                    — cómo convertir la educación en tu canal de crecimiento #1
                  </>
                ) : (
                  <>
                    The{" "}
                    <span className="text-gradient-peach-purple">
                      ELG Report
                    </span>{" "}
                    — how to turn education into your #1 growth channel
                  </>
                )}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {isEs
                  ? "Estrategias, frameworks y datos reales de Education-Led Growth para escalar tu academia y convertir la educación en revenue."
                  : "Strategies, frameworks, and real data on Education-Led Growth to scale your academy and turn education into measurable revenue."}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0 w-full sm:w-auto md:w-auto">
              <Link
                href={ELG_REPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                {isEs ? "Descargar el Reporte" : "Download the Report"}
              </Link>
              <Link
                href={BOOK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white/80 border border-white/20 hover:bg-white/5 hover:text-white transition-all text-sm whitespace-nowrap"
              >
                {isEs ? "Agenda un Demo" : "Book a Demo"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

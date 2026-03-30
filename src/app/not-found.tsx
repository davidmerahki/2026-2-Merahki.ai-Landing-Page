import GlowBackground from "@/components/ui/GlowBackground";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-void flex items-center justify-center px-6">
      <GlowBackground
        indigoPosition={{ x: "35%", y: "50%" }}
        rustPosition={{ x: "65%", y: "50%" }}
      />
      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
        <p className="text-8xl font-bold text-gradient-peach-purple">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Page not found
        </h1>
        <p className="text-white/50 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
          you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

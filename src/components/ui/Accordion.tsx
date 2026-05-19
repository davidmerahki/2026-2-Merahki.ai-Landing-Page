"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface AccordionItem {
  question: string;
  answer: string;
  cta?: { label: string; href: string };
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-white font-semibold text-sm pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-white/50 flex-shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="text-white/60 text-sm leading-relaxed">
                {item.answer}
              </p>
              {item.cta && (
                <Link
                  href={item.cta.href}
                  className="inline-flex items-center gap-1 text-accent-purple text-sm font-medium mt-3 hover:text-accent-purple/80 transition-colors"
                >
                  {item.cta.label} →
                </Link>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

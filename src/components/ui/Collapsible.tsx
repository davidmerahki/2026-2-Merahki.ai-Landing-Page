"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Collapsible({
  trigger,
  children,
  defaultOpen = false,
}: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="pr-4">{trigger}</span>
        <ChevronDown
          className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="px-8 pb-8">{children}</div>}
    </div>
  );
}

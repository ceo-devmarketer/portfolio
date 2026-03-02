"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Linkedin, Mail } from "lucide-react";

export default function ShopContactOptions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon-purple px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(190,24,255,0.4)] transition-all hover:bg-neon-blue hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]"
      >
        Contact to Buy
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <a
            href="https://wa.me/+8801326098934"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-colors"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.linkedin.com/in/devmarketer-mahedi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 transition-colors"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:mahedihasan98934@gmail.com?subject=Shop%20Order%20-%207%20Day%20Website%20Work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neon-blue/40 bg-neon-blue/10 px-4 py-2 text-xs sm:text-sm font-medium text-neon-blue hover:bg-neon-blue/20 hover:border-neon-blue transition-colors"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>
      )}
    </div>
  );
}


"use client";

import { useState } from "react";
import { MessageCircle, Linkedin, Mail, X } from "lucide-react";

interface ShopContactOptionsProps {
  productName: string;
}

export default function ShopContactOptions({ productName }: ShopContactOptionsProps) {
  const [open, setOpen] = useState(false);

  const emailSubject = encodeURIComponent(`Shop Order - ${productName}`);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon-purple px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(190,24,255,0.4)] transition-all hover:bg-neon-blue hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]"
      >
        Contact to Buy
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/10 bg-deep-dark/95 p-5 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-neon-blue mb-1">
                  Contact options
                </p>
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  For: <span className="text-neon-blue">{productName}</span>
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 p-1 text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-gray-400 mb-4">
              <p>Choose how you want to contact me. I&apos;ll reply as soon as possible.</p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <a
                href="http://wa.me/+8801326098934"
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
                href={`mailto:mahedihasan98934@gmail.com?subject=${emailSubject}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neon-blue/40 bg-neon-blue/10 px-4 py-2 text-xs sm:text-sm font-medium text-neon-blue hover:bg-neon-blue/20 hover:border-neon-blue transition-colors"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


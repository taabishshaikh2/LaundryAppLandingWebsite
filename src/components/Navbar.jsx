import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS, WEBAPP_URL } from "../config/siteConfig";
import CtaButton from "./CtaButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cotton/90 backdrop-blur border-b border-ink/[0.06]">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo text-cotton font-display text-lg">
            घ
          </span>
          <span className="font-display text-xl text-ink">{BRAND.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-ink/70 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton href={WEBAPP_URL} className="!px-5 !py-2.5 !text-[15px]">
            Book a Service
          </CtaButton>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/[0.06] bg-cotton px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[15px] text-ink/80"
            >
              {link.label}
            </a>
          ))}
          <CtaButton href={WEBAPP_URL} className="mt-1 w-full">
            Book a Service
          </CtaButton>
        </div>
      )}
    </header>
  );
}

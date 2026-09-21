import React from "react";
import { BRAND, FOOTER_LINKS } from "../config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-ink text-cotton/70 py-14">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cotton/10 font-display text-base text-cotton">
                घ
              </span>
              <span className="font-display text-lg text-cotton">
                {BRAND.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              {FOOTER_LINKS.contact.area}.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            {FOOTER_LINKS.company.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-cotton">
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-sm">
            <p>{FOOTER_LINKS.contact.phone}</p>
            <p className="mt-1">{FOOTER_LINKS.contact.email}</p>
          </div>
        </div>

        <p className="mt-12 text-xs text-cotton/40">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

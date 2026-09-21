import React from "react";
import { getIcon } from "./icons";
import { SERVICES } from "../config/siteConfig";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            One booking, every kind of care
          </h2>
          <p className="mt-4 text-ink/65 leading-relaxed">
            Send one garment or a full week's wash — mix and match services
            in a single pickup. Pricing lives in the app, so this list stays
            simple.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="tag-card rounded-2xl px-6 py-7 shadow-[0_1px_2px_rgba(27,42,74,0.04)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo/10 text-indigo">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">
                  {service.name}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/60">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

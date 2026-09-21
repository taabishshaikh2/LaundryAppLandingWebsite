import React from "react";
import { getIcon } from "./icons";
import { WHY_US } from "../config/siteConfig";

export default function WhyDhobiGhat() {
  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Why people stick with{" "}
              <span className="whitespace-nowrap">Dhobi Ghat</span>
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed max-w-sm">
              Not the biggest laundromat in the city — the one that shows up
              on time and treats your clothes like they matter.
            </p>

            <div className="mt-10 rounded-2xl bg-ink text-cotton p-7 max-w-sm">
              <p className="font-display text-2xl leading-snug">
                "Garments are sorted and treated by hand, not bulk-processed
                with everyone else's."
              </p>
              <p className="mt-4 text-sm text-cotton/60">
                Our care standard, on every order.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
            {WHY_US.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf/10 text-leaf">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

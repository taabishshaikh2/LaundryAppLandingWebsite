import React from "react";
import { getIcon } from "./icons";
import { SHOWCASE_ITEMS } from "../config/siteConfig";

export default function Showcase() {
  return (
    <section className="bg-ink text-cotton py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl">
            More than a wash
          </h2>
          <p className="mt-4 text-cotton/65 leading-relaxed">
            Dhobi Ghat isn't only for the weekly load. Send clothes for
            exactly what they need — ironing on its own, a steam press, a
            wash, a dry clean, or any combination in one pickup.
          </p>
        </div>

        <div className="mt-14 flex flex-col divide-y divide-cotton/10">
          {SHOWCASE_ITEMS.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.title}
                className="flex items-start gap-5 py-8 first:pt-0 last:pb-0 border-l-2 border-marigold/70 pl-6"
              >
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cotton/10 text-marigold sm:flex">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-cotton/60">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

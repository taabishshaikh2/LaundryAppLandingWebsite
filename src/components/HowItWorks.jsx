import React from "react";
import { getIcon } from "./icons";
import { BRAND, PROCESS_STEPS } from "../config/siteConfig";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper py-20 md:py-28 border-y border-ink/[0.06]">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            How {BRAND.name} works
          </h2>
          <p className="mt-4 text-ink/65 leading-relaxed">
            Four steps, start to finish. You only need to do the first one.
          </p>
        </div>

        {/* Desktop: steps pegged along a horizontal line */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            <div className="clothesline absolute left-0 right-0 top-0 h-[3px] rounded-full" />
            <div className="grid grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step) => (
                <StepCard key={step.step} step={step} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: steps pegged along a vertical line */}
        <div className="mt-12 md:hidden relative pl-10">
          <div className="clothesline-vertical absolute left-[7px] top-2 bottom-2 w-[3px] rounded-full" />
          <div className="flex flex-col gap-10">
            {PROCESS_STEPS.map((step) => (
              <StepCard key={step.step} step={step} mobile />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, mobile }) {
  const Icon = getIcon(step.icon);

  if (mobile) {
    return (
      <div className="relative">
        <span className="absolute -left-10 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-marigold ring-4 ring-paper" />
        <div className="flex items-center gap-2 text-ink/40 text-sm">
          <span>Step {step.step}</span>
        </div>
        <div className="mt-1.5 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo/10 text-indigo">
            <Icon size={20} strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="font-display text-lg text-ink">{step.title}</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-ink/60">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center">
      <span className="h-4 w-4 rounded-full bg-marigold ring-4 ring-paper" />
      <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo/10 text-indigo">
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <span className="mt-4 text-sm text-ink/40">Step {step.step}</span>
      <h3 className="mt-1 font-display text-xl text-ink">{step.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink/60 max-w-[220px]">
        {step.description}
      </p>
    </div>
  );
}

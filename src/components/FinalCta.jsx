import React from "react";
import { ArrowRight } from "lucide-react";
import { WEBAPP_URL } from "../config/siteConfig";
import CtaButton from "./CtaButton";

export default function FinalCta() {
  return (
    <section className="bg-indigo text-cotton py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem] max-w-2xl mx-auto">
          Your clothes deserve better. We'll handle the rest.
        </h2>
        <p className="mt-5 text-cotton/70 max-w-md mx-auto">
          Book your first pickup in the Dhobi Ghat app and see what doorstep
          care actually feels like.
        </p>
        <div className="mt-9">
          <CtaButton href={WEBAPP_URL} variant="marigold">
            Book Your Service
            <ArrowRight size={18} />
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

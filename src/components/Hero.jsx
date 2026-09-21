import React from "react";
import { ArrowDown } from "lucide-react";
import { BRAND, WEBAPP_URL } from "../config/siteConfig";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-10">
        <div className="max-w-xl">
          <h1 className="font-display text-[2.6rem] leading-[1.08] text-ink sm:text-5xl md:text-[3.4rem]">
            Effortless laundry, doorstep to doorstep.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70 max-w-md">
            {BRAND.name} picks up your clothes, treats them the way each
            fabric deserves, and brings them back fresh — ironed, washed or
            dry cleaned, without you leaving the house.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <CtaButton href={WEBAPP_URL}>Book a Service</CtaButton>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 text-[15px] font-medium text-ink/70 hover:text-ink transition-colors py-3.5"
            >
              See how it works
              <ArrowDown size={16} />
            </a>
          </div>

          <p className="mt-8 text-sm text-ink/50">
            Serving select neighbourhoods across {BRAND.city}.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <ClotheslineIllustration />
        </div>
      </div>
    </section>
  );
}

/**
 * Original illustration: a length of rope strung between two posts, with
 * three garments pegged to it. A single gentle sway plays continuously
 * (disabled automatically for prefers-reduced-motion, see index.css).
 */
function ClotheslineIllustration() {
  return (
    <svg
      viewBox="0 0 420 360"
      className="w-full h-auto"
      role="img"
      aria-label="A shirt, a kurta and a saree hanging clean and pressed on a clothesline"
    >
      <ellipse cx="210" cy="330" rx="150" ry="18" fill="#1B2A4A" opacity="0.05" />

      {/* posts */}
      <rect x="26" y="60" width="6" height="230" rx="3" fill="#CBBB9C" />
      <rect x="388" y="60" width="6" height="230" rx="3" fill="#CBBB9C" />

      {/* rope */}
      <path
        d="M 29 78 Q 210 100 391 78"
        stroke="#CBBB9C"
        strokeWidth="3"
        fill="none"
      />

      {/* shirt */}
      <g className="origin-top animate-sway" style={{ transformOrigin: "108px 84px" }}>
        <rect x="98" y="80" width="20" height="10" fill="#2F4B7C" />
        <path
          d="M78 108 L98 92 L118 92 L138 108 L128 122 L118 112 L118 176 Q108 184 98 176 L98 112 L88 122 Z"
          fill="#4C6FA3"
        />
        <path d="M98 92 Q108 104 118 92" fill="none" stroke="#2F4B7C" strokeWidth="2" />
      </g>

      {/* kurta */}
      <g className="origin-top animate-sway" style={{ transformOrigin: "210px 84px", animationDelay: "0.6s" }}>
        <rect x="200" y="80" width="20" height="10" fill="#C97A31" />
        <path
          d="M182 106 L200 92 L220 92 L238 106 L232 200 Q210 212 188 200 Z"
          fill="#E8974A"
        />
        <path d="M200 92 Q210 106 220 92" fill="none" stroke="#C97A31" strokeWidth="2" />
      </g>

      {/* saree drape */}
      <g className="origin-top animate-sway" style={{ transformOrigin: "312px 84px", animationDelay: "1.1s" }}>
        <rect x="302" y="80" width="20" height="10" fill="#3F5A2E" />
        <path
          d="M286 96 Q312 90 338 96 L344 210 Q312 224 280 210 Z"
          fill="#52734D"
        />
        <path d="M300 100 L296 208 M324 100 L328 208" stroke="#3F5A2E" strokeWidth="1.5" opacity="0.5" />
      </g>
    </svg>
  );
}

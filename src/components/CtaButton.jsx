import React from "react";

/**
 * Primary call-to-action. Always points at the external ordering webapp
 * (WEBAPP_URL in src/config/siteConfig.js), opened in a new tab since this
 * landing page is not part of the webapp itself.
 */
export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-colors duration-200 focus-visible:outline-2";

  const variants = {
    primary: "bg-indigo text-cotton hover:bg-indigo-dark",
    marigold: "bg-marigold text-ink hover:bg-marigold-dark",
    ghost: "bg-transparent text-ink hover:bg-ink/5",
    outline: "bg-transparent text-cotton border border-cotton/40 hover:bg-cotton/10",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

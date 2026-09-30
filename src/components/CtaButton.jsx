import { ArrowUpRight } from "lucide-react";
import { WEBAPP_URL, UI } from "../config/siteConfig";

export default function CtaButton({ children = UI.book, variant = "primary", className = "" }) {
  return <a href={WEBAPP_URL} className={`cta cta--${variant} ${className}`}>
    {children}<ArrowUpRight size={18} aria-hidden="true" />
  </a>;
}

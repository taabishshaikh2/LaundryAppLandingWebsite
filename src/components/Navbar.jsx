import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS, UI } from "../config/siteConfig";
import CtaButton from "./CtaButton";

export function BrandMark({ light = false }) {
  return <a href={BRAND.home} className={`brand ${light ? "brand--light" : ""}`}>
    <span className="brand-mark" aria-hidden="true">{BRAND.monogram}<span /></span>
    <span>{BRAND.name}<small>{BRAND.tagline}</small></span>
  </a>;
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  useEffect(() => {
    const handle = (event) => { if (event.key === "Escape" && open) { setOpen(false); button.current?.focus(); } };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open]);
  return <header className="site-header">
    <div className="shell nav-bar">
      <BrandMark />
      <nav className="desktop-nav" aria-label={UI.footerNav}>{NAV_LINKS.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      <CtaButton className="nav-cta" />
      <button ref={button} className="menu-toggle" aria-label={open ? UI.closeMenu : UI.openMenu} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
    <nav id="mobile-nav" className="mobile-nav shell" hidden={!open} aria-label={UI.footerNav}>
      {NAV_LINKS.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      <CtaButton />
    </nav>
  </header>;
}

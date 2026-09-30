import { BRAND, FOOTER_LINKS, UI } from "../config/siteConfig";
import { BrandMark } from "./Navbar";
export default function Footer() {
  const contact = FOOTER_LINKS.contact;
  return <footer className="footer"><div className="shell">
    <div className="footer-grid"><div><BrandMark light/><p>{contact.area}</p></div><nav aria-label={UI.footerNav}><h3>{UI.footerNav}</h3>{FOOTER_LINKS.company.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><div className="footer-contact"><h3>{UI.contact}</h3><a href={contact.phoneHref}>{contact.phone}</a><a href={contact.emailHref}>{contact.email}</a></div></div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} {BRAND.name}. {UI.rights}</p><span>{BRAND.tagline}</span></div>
  </div></footer>;
}

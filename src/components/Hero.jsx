import { ArrowDown, Check, MapPin } from "lucide-react";
import { HERO, UI, NAV_LINKS } from "../config/siteConfig";
import CtaButton from "./CtaButton";
import GarmentVisual from "./GarmentVisual";
export default function Hero() {
  return <>
    <section id="top" className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow"><span className="tiny-line" />{HERO.eyebrow}</p>
        <h1>{HERO.headline}<em>{HERO.emphasis}</em></h1>
        <p className="hero-description">{HERO.description}</p>
        <div className="hero-actions"><CtaButton variant="marigold" /><a className="text-link" href={NAV_LINKS[1].href}>{UI.how}<ArrowDown size={16} aria-hidden="true" /></a></div>
        <div className="hero-chips">{HERO.chips.map(chip => <span key={chip}><Check size={14} aria-hidden="true" />{chip}</span>)}</div>
        <div className="location"><MapPin size={17} aria-hidden="true"/><div><strong>{HERO.location}</strong><small>{HERO.availability}</small></div></div>
      </div>
      <div className="hero-visual">
        <div className="visual-heading"><span>{HERO.visual.eyebrow}</span><span>{HERO.visual.index}</span></div>
        <p className="visual-title">{HERO.visual.title}</p>
        <GarmentVisual />
        <div className="care-stamp"><span>{HERO.visual.stamp}</span><span className="stamp-flower" aria-hidden="true">✳</span><span>{HERO.visual.stampBottom}</span></div>
        <div className="visual-bottom"><span>{HERO.visual.tag}</span><span>{HERO.visual.detail}</span></div>
      </div>
    </section>
    <div className="trust-strip"><div className="shell">{HERO.trust.map((text, i) => <p key={text}><span aria-hidden="true">0{i + 1}</span>{text}</p>)}</div></div>
  </>;
}

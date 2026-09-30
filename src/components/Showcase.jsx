import { Check } from "lucide-react";
import { SHOWCASE_ITEMS, SECTION_COPY } from "../config/siteConfig";
import GarmentVisual from "./GarmentVisual";
export default function Showcase() {
  const copy = SECTION_COPY.showcase;
  return <section className="showcase section"><div className="shell showcase-grid">
    <div className="showcase-visual"><p className="eyebrow">{copy.visualLabel}</p><GarmentVisual compact label={copy.visualAlt}/><div className="care-tags">{copy.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
    <div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}<em>{copy.emphasis}</em></h2><p className="section-description">{copy.description}</p><div className="showcase-list">{SHOWCASE_ITEMS.map(item => <article key={item.title}><Check size={18} aria-hidden="true"/><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div>
  </div></section>;
}

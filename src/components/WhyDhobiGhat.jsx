import { getIcon } from "./icons";
import { WHY_US, SECTION_COPY } from "../config/siteConfig";
export default function WhyDhobiGhat() {
  const copy = SECTION_COPY.why;
  return <section id="why-us" className="section shell why-grid">
    <div className="why-intro"><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}<em>{copy.emphasis}</em></h2><p className="section-description">{copy.description}</p><div className="care-note"><span aria-hidden="true">✳</span><h3>{copy.noteTitle}</h3><p>{copy.note}</p></div></div>
    <div className="benefit-grid">{WHY_US.map(item => { const Icon = getIcon(item.icon); return <article key={item.title}><Icon size={24} strokeWidth={1.5} aria-hidden="true"/><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div>
  </section>;
}

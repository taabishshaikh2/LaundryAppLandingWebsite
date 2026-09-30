import { ArrowUpRight } from "lucide-react";
import { getIcon } from "./icons";
import { SERVICES, SECTION_COPY, WEBAPP_URL, UI } from "../config/siteConfig";
export default function Services() {
  const copy = SECTION_COPY.services;
  return <section id="services" className="section shell">
    <div className="section-heading"><div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}<em>{copy.emphasis}</em></h2></div><p className="section-description">{copy.description}</p></div>
    <div className="service-grid">{SERVICES.map((service, i) => {
      const Icon = getIcon(service.icon);
      return <article className={`service-card ${i === 6 ? "service-card--premium" : ""}`} key={service.id}>
        <div className="service-top"><span className="service-icon"><Icon size={25} strokeWidth={1.4} aria-hidden="true" /></span><span className="tag-hole" aria-hidden="true" /></div>
        <span className="service-label">{service.tag}</span><h3>{service.name}</h3><p>{service.description}</p>
        <a href={WEBAPP_URL} className="service-link" aria-label={`${UI.book}: ${service.name}`}><ArrowUpRight size={20} aria-hidden="true" /></a>
      </article>;
    })}<a href={WEBAPP_URL} className="service-note"><span className="note-mark" aria-hidden="true">✳</span><p>{copy.note}</p><span>{UI.explore}<ArrowUpRight size={17} aria-hidden="true" /></span></a></div>
  </section>;
}

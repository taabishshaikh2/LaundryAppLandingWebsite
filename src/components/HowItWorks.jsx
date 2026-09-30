import { getIcon } from "./icons";
import { PROCESS_STEPS, SECTION_COPY, UI } from "../config/siteConfig";
export default function HowItWorks() {
  const copy = SECTION_COPY.process;
  return <section id="how-it-works" className="process section">
    <div className="shell"><div className="center-heading"><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}<em>{copy.emphasis}</em></h2><p>{copy.description}</p></div>
      <ol className="step-grid">{PROCESS_STEPS.map(step => { const Icon = getIcon(step.icon); return <li className="step-card" key={step.step}>
        <span className="step-peg" aria-hidden="true"/><span className="step-number">{UI.step} 0{step.step}</span><Icon className="step-icon" size={34} strokeWidth={1.35} aria-hidden="true"/><h3>{step.title}</h3><p>{step.description}</p>
      </li>; })}</ol><p className="process-note">{copy.footnote}</p>
    </div>
  </section>;
}

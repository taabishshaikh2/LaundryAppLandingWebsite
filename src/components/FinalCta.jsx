import { FINAL_CTA, UI } from "../config/siteConfig";
import CtaButton from "./CtaButton";
export default function FinalCta() {
  return <section className="final-cta"><div className="shell">
    <span className="final-flower" aria-hidden="true">✳</span><p className="eyebrow">{FINAL_CTA.eyebrow}</p><h2>{FINAL_CTA.title}<em>{FINAL_CTA.emphasis}</em></h2><p>{FINAL_CTA.description}</p><CtaButton variant="marigold">{UI.bookFinal}</CtaButton>
  </div></section>;
}

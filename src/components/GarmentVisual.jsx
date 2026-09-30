import { HERO } from "../config/siteConfig";

// Original vector artwork: no remote images or image service required.
export default function GarmentVisual({ compact = false, label = HERO.visual.alt }) {
  return <svg viewBox="0 0 520 560" role="img" aria-label={label} className={compact ? "garment-art garment-art--compact" : "garment-art"}>
    <defs>
      <linearGradient id={compact ? "shirt-small" : "shirt"} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#DCE7F0"/><stop offset=".55" stopColor="#ADC4D9"/><stop offset="1" stopColor="#7899BA"/></linearGradient>
      <linearGradient id={compact ? "fold-small" : "fold"} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#FFFCF4"/><stop offset="1" stopColor="#D8D0BF"/></linearGradient>
      <filter id={compact ? "shadow-small" : "shadow"} x="-40%" y="-30%" width="180%" height="180%"><feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#061322" floodOpacity=".22"/></filter>
      <pattern id={compact ? "weave-small" : "weave"} width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 0H6M0 0V6" fill="none" stroke="#fff" strokeOpacity=".1" strokeWidth=".6"/></pattern>
    </defs>
    <ellipse cx="271" cy="484" rx="192" ry="22" fill="#061322" opacity=".14"/>
    <path d="M20 61Q270 96 500 61" fill="none" stroke="#C6B79B" strokeWidth="2"/>
    <path d="M259 88V68q0-16 12-16t12 12" fill="none" stroke="#D3B77B" strokeWidth="4" strokeLinecap="round"/>
    <path d="M259 86L156 138q-10 8 5 8h196q15 0 5-8Z" fill="none" stroke="#D3B77B" strokeWidth="5" strokeLinejoin="round"/>
    <g filter={`url(#${compact ? "shadow-small" : "shadow"})`}>
      <path d="M214 128l-57 19-77 97 51 35 43-53-5 199q89 20 183 0l-5-199 43 53 51-35-77-97-57-19-46 10Z" fill={`url(#${compact ? "shirt-small" : "shirt"})`}/>
      <path d="M214 128l-57 19-77 97 51 35 43-53-5 199q89 20 183 0l-5-199 43 53 51-35-77-97-57-19-46 10Z" fill={`url(#${compact ? "weave-small" : "weave"})`}/>
      <path d="M214 127l47 14-28 45-30-37ZM307 127l-46 14 28 45 29-37Z" fill="#E0EAF2" stroke="#96B0C8" strokeWidth="1"/>
      <path d="M261 147v283M174 227l-17-79M347 227l17-79" stroke="#7A9AB8" strokeWidth="1.5" opacity=".65"/>
      <path d="M294 215h38v39q-19 15-38 0Z" fill="#BFD1E1" stroke="#8FAAC2"/>
      <path d="M173 414q86 20 176 0M89 235l49 35M383 270l49-35" fill="none" stroke="#809EB8" strokeWidth="2" opacity=".7"/>
      {[190,230,270,310,350,390].map(y => <circle key={y} cx="265" cy={y} r="3" fill="#F7F7EF" stroke="#8CA9C2"/>)}
      <path d="M77 462q6-11 25-12h212q20 0 24 13l-3 26H85Z" fill="#92A9B7"/>
      <path d="M87 451h228l17 14H78Z" fill="#B8C9D2"/>
      <path d="M96 430q7-10 22-10h218q18 0 21 12l-3 26H101Z" fill={`url(#${compact ? "fold-small" : "fold"})`}/>
      <path d="M109 420h225l19 14H96Z" fill="#FFFCF4"/>
      <path d="M108 442h233" stroke="#BAAF9B" strokeWidth="1" opacity=".6"/>
    </g>
    <g transform="translate(338 344) rotate(9)">
      <path d="M13 0q-3-33-22-41" stroke="#D6C6A7" fill="none"/>
      <path d="M0 13L13 0h70v111H0Z" fill="#F2CE7E"/>
      <circle cx="14" cy="16" r="4" fill="#213851"/>
      <path d="M18 76h49M18 84h34" stroke="#7E652F" opacity=".5"/>
      <text x="42" y="55" textAnchor="middle" fill="#1B2A4A" fontFamily="Georgia,serif" fontSize="28">{HERO.visual.mark}</text>
    </g>
  </svg>;
}

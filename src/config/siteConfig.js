// All customer-facing copy, navigation and booking links live here.
export const WEBAPP_URL = "https://laundryapp-1.onrender.com/";
export const BRAND = { name: "Dhobi Ghat", city: "Mumbai", tagline: "Good care. Close to home.", monogram: "dg", home: "#top" };
export const UI = { book: "Book a Service", bookFinal: "Book Your Service", how: "See How It Works", openMenu: "Open menu", closeMenu: "Close menu", skip: "Skip to content", step: "Step", explore: "Explore services", rights: "All rights reserved.", footerNav: "Explore", contact: "Get in touch" };
export const NAV_LINKS = [
  { label: "Our services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Our care", href: "#why-us" },
];
export const HERO = {
  eyebrow: "YOUR NEIGHBOURHOOD GARMENT-CARE SERVICE",
  headline: "A little less laundry.",
  emphasis: "A lot more life.",
  description: "Freshly washed. Beautifully pressed. Thoughtfully cared for. Laundry and garment care, picked up and delivered to your doorstep in Mumbai.",
  location: "Made for Mumbai neighbourhoods",
  availability: "Check pickup availability for your address in the app.",
  chips: ["Doorstep pickup & delivery", "Care for every kind of garment"],
  visual: { eyebrow: "THE FRESH FEELING", title: "Ready for your everyday.", index: "01 / DG", mark: "dg.", tag: "PRESSED WITH CARE", detail: "Your wardrobe, refreshed.", alt: "A freshly pressed blue shirt and folded cotton garments with a Dhobi Ghat care tag", stamp: "GOOD CARE", stampBottom: "CLOSE TO HOME" },
  trust: ["Your doorstep. Both ways.", "Seven ways to care.", "Prices in the booking app."],
};
export const SECTION_COPY = {
  services: { eyebrow: "THE CARE MENU", title: "Every garment has a story.", emphasis: "We know how to care for it.", description: "From the everyday pile to your favourite occasion wear. Choose the care your clothes need, all in one place.", note: "Choose your services and view current prices in the booking app." },
  process: { eyebrow: "LESS EFFORT. MORE FRESH.", title: "From your door.", emphasis: "Back to your wardrobe.", description: "One simple booking. Four thoughtful steps.", footnote: "Your part? Make a little room for freshly cared-for clothes." },
  why: { eyebrow: "GOOD CARE, CLOSE TO HOME", title: "Big on care.", emphasis: "Local at heart.", description: "A laundry service that fits into neighbourhood life. Everyday convenience, considered garment care, and a simpler way to get the laundry done.", noteTitle: "Your clothes aren't all the same.", note: "Neither is their care. Choose a service for each garment, from a simple press to delicate garment care." },
  showcase: { eyebrow: "MORE THAN A WASH", title: "Already clean?", emphasis: "Just send the creases.", description: "You don't have to send everything for washing. Choose ironing, steam pressing, washing, dry cleaning — or a mix that suits your wardrobe.", visualLabel: "ONE PICKUP. YOUR KIND OF CARE.", visualAlt: "A pressed shirt beside neatly folded garments, each assigned its own care service", tags: ["Shirt → Iron only", "Everyday wear → Wash & fold", "Occasion wear → Dry clean"] },
};
export const SERVICES = [
  { id: "regular-ironing", name: "Regular Ironing", description: "A crisp finish for everyday shirts, trousers, kurtas and uniforms.", icon: "Shirt", tag: "EVERYDAY ESSENTIALS" },
  { id: "steam-ironing", name: "Steam Ironing", description: "A smooth, refreshed finish for garments that need a little extra attention.", icon: "Wind", tag: "A FINER FINISH" },
  { id: "express-ironing", name: "Express Ironing", description: "Pressed for the plans ahead. Check express availability when you book.", icon: "Zap", tag: "WHEN TIME MATTERS" },
  { id: "wash-fold", name: "Wash & Fold", description: "Everyday laundry, freshly cleaned and neatly folded for your wardrobe.", icon: "Waves", tag: "FRESH & FOLDED" },
  { id: "wash-iron", name: "Wash & Iron", description: "From the laundry basket to ready-to-wear, with a clean and a crisp press.", icon: "Sparkles", tag: "THE COMPLETE RESET" },
  { id: "dry-cleaning", name: "Dry Cleaning", description: "Specialist care for suits, blazers and garments that call for dry cleaning.", icon: "Layers", tag: "OCCASION READY" },
  { id: "premium-care", name: "Premium / Delicate Garment Care", description: "Thoughtful care for sarees, silks and the pieces you hold close.", icon: "Gem", tag: "FOR YOUR FAVOURITES" },
];
export const PROCESS_STEPS = [
  { step: 1, title: "Book", description: "Choose your services and arrange your pickup in the booking app.", icon: "CalendarCheck" },
  { step: 2, title: "Doorstep pickup", description: "Hand over your garments without a trip to the laundry shop.", icon: "PackageOpen" },
  { step: 3, title: "We clean, iron, care", description: "Your clothes get the care you've selected for them.", icon: "ShowerHead" },
  { step: 4, title: "Doorstep delivery", description: "Freshly cared-for garments, brought back to your door.", icon: "Home" },
];
export const WHY_US = [
  { title: "Doorstep convenience", description: "Pickup and delivery where you live. One less errand in your day.", icon: "MapPin" },
  { title: "More ways to care", description: "Everyday ironing, washing, dry cleaning and delicate care in one place.", icon: "Shirt" },
  { title: "Transparent pricing", description: "View current service prices in the app before placing your order.", icon: "ReceiptText" },
  { title: "Careful handling", description: "Select care that suits the garment and share any special requirements.", icon: "HandHeart" },
  { title: "Easy reordering", description: "The same simple booking link, whenever the laundry starts piling up.", icon: "RotateCcw" },
  { title: "A local, reliable approach", description: "Built around nearby neighbourhoods and everyday laundry needs.", icon: "ShieldCheck" },
];
export const SHOWCASE_ITEMS = [
  { title: "Washed at home. Pressed by us.", description: "Send your clean shirts and uniforms for ironing only.", icon: "Shirt" },
  { title: "A little steam goes a long way.", description: "Choose steam ironing for a beautifully finished outfit.", icon: "Wind" },
  { title: "Different garments. One pickup.", description: "Pair everyday washing with dry cleaning or delicate care.", icon: "Layers" },
];
export const FINAL_CTA = { eyebrow: "LET'S LIGHTEN YOUR LAUNDRY DAY", title: "Your clothes deserve better.", emphasis: "We'll handle the rest.", description: "A fresher wardrobe starts with one simple booking." };
export const FOOTER_LINKS = {
  company: NAV_LINKS,
  contact: { phone: "+91 8692881750", phoneHref: "tel:+918692881750", email: "hello@dhobighat.in", emailHref: "mailto:hello@dhobighat.in", area: "Doorstep laundry & garment care in Mumbai." },
};

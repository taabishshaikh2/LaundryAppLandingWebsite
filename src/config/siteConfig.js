// -----------------------------------------------------------------------
// Dhobi Ghat — single source of truth for content and links.
// Edit values here; no component code needs to change.
// -----------------------------------------------------------------------

// The separate ordering webapp. Swap this for the live URL any time.
export const WEBAPP_URL = "https://laundryapp-1.onrender.com/";

export const BRAND = {
  name: "Dhobi Ghat",
  tagline: "Doorstep laundry and garment care, done properly.",
  city: "Mumbai",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Dhobi Ghat", href: "#why-us" },
];

export const SERVICES = [
  {
    id: "regular-ironing",
    name: "Regular Ironing",
    description: "Everyday shirts, trousers and kurtas, pressed crisp and folded neatly.",
    icon: "Shirt",
  },
  {
    id: "steam-ironing",
    name: "Steam Ironing",
    description: "Deeper heat for stubborn creases, without stressing the fabric.",
    icon: "Wind",
  },
  {
    id: "express-ironing",
    name: "Express Ironing",
    description: "Same-day turnaround for the outfit you forgot you needed tonight.",
    icon: "Zap",
  },
  {
    id: "wash-fold",
    name: "Wash & Fold",
    description: "A full clean, tumble-dried and folded, ready to put away.",
    icon: "Waves",
  },
  {
    id: "wash-iron",
    name: "Wash & Iron",
    description: "Washed and pressed in one trip — our most-booked combination.",
    icon: "Sparkles",
  },
  {
    id: "dry-cleaning",
    name: "Dry Cleaning",
    description: "Solvent cleaning for suits, blazers and structured wear.",
    icon: "Layers",
  },
  {
    id: "premium-care",
    name: "Premium & Delicate Care",
    description: "Sarees, silks and fine fabrics, handled by hand where it matters.",
    icon: "Gem",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Book",
    description: "Choose your services and a pickup slot in the Dhobi Ghat app.",
    icon: "CalendarCheck",
  },
  {
    step: 2,
    title: "Doorstep pickup",
    description: "A runner collects your clothes at your door, at the time you picked.",
    icon: "PackageOpen",
  },
  {
    step: 3,
    title: "We clean, iron, care",
    description: "Every garment is sorted and treated the way it's meant to be.",
    icon: "ShowerHead",
  },
  {
    step: 4,
    title: "Doorstep delivery",
    description: "Fresh, folded and back at your door — no follow-up needed.",
    icon: "Home",
  },
];

export const WHY_US = [
  {
    title: "Doorstep, both ways",
    description: "No drop-off, no queueing. Pickup and delivery happen where you live.",
    icon: "MapPin",
  },
  {
    title: "One service for every garment",
    description: "Ironing, steam, wash, dry clean or a mix — sorted under one booking.",
    icon: "Shirt",
  },
  {
    title: "Pricing you see upfront",
    description: "The app shows the cost before you confirm. No surprises at delivery.",
    icon: "ReceiptText",
  },
  {
    title: "Handled with care",
    description: "Garments are tagged and sorted by hand, not thrown in with everything else.",
    icon: "HandHeart",
  },
  {
    title: "Reorder in seconds",
    description: "Your last order is saved, so the next one takes a few taps.",
    icon: "RotateCcw",
  },
  {
    title: "Local, and accountable",
    description: "A neighbourhood team that answers for every order, not a call centre.",
    icon: "ShieldCheck",
  },
];

export const SHOWCASE_ITEMS = [
  {
    title: "Send only what needs ironing",
    description:
      "Already washed at home? Send just the ironing — office shirts, school uniforms, the pile that keeps growing on the chair.",
    icon: "Shirt",
  },
  {
    title: "Steam for the pieces that need it",
    description:
      "Linen, cotton with deep creases, or anything that wilts by evening — steam pressing resets it properly.",
    icon: "Wind",
  },
  {
    title: "Wash, dry clean, or both",
    description:
      "Mix garments across services in a single pickup — everyday wash-and-fold alongside a jacket that needs dry cleaning.",
    icon: "Layers",
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Why Dhobi Ghat", href: "#why-us" },
  ],
  contact: {
    phone: "+91 8692881750",
    email: "hello@dhobighat.in",
    area: "Serving select neighbourhoods across Mumbai",
  },
};

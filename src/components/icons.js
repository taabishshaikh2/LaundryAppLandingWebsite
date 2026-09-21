import {
  Shirt,
  Wind,
  Zap,
  Waves,
  Sparkles,
  Layers,
  Gem,
  CalendarCheck,
  PackageOpen,
  ShowerHead,
  Home,
  MapPin,
  ReceiptText,
  HandHeart,
  RotateCcw,
  ShieldCheck,
  CircleDot,
  CheckCircle2,
} from "lucide-react";

// Maps the icon name strings used in src/config/siteConfig.js to the
// actual lucide-react components, so components only import what's used.
export const ICONS = {
  Shirt,
  Wind,
  Zap,
  Waves,
  Sparkles,
  Layers,
  Gem,
  CalendarCheck,
  PackageOpen,
  ShowerHead,
  Home,
  MapPin,
  ReceiptText,
  HandHeart,
  RotateCcw,
  ShieldCheck,
  CircleDot,
  CheckCircle2,
};

export function getIcon(name, fallback = Sparkles) {
  return ICONS[name] ?? fallback;
}

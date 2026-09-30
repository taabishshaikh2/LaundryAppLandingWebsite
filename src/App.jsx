import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyDhobiGhat from "./components/WhyDhobiGhat";
import Showcase from "./components/Showcase";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import { UI } from "./config/siteConfig";
export default function App() {
  return <><a href="#main-content" className="skip-link">{UI.skip}</a><Navbar/><main id="main-content"><Hero/><Services/><HowItWorks/><WhyDhobiGhat/><Showcase/><FinalCta/></main><Footer/></>;
}

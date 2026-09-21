import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyDhobiGhat from "./components/WhyDhobiGhat";
import Showcase from "./components/Showcase";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cotton">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyDhobiGhat />
        <Showcase />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

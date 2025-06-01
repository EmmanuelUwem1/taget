// import { useState } from 'react'
import Header from "./components/header"
import Hero from "./components/hero-section";
import PartnersMarquee from "./components/partners-marquee";
import WhoWeAre from "./components/who-we-are-section";
import WhyJoin from "./components/why-join-section";

function App() {

  return (
    <>
      <Header />
      {/* Main content area */}
      <Hero />
      <PartnersMarquee />
      <WhoWeAre />
      <WhyJoin />
    </>
  );
}

export default App

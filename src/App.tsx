// import { useState } from 'react'
import Header from "./components/header"
import Hero from "./components/hero-section";
import PartnersMarquee from "./components/partners-marquee";

function App() {

  return (
    <>
      <Header />
      {/* Main content area */}
      <Hero />
      <PartnersMarquee />
    </>
  );
}

export default App

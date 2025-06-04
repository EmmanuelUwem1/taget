// import { useState } from 'react'
import Header from "./components/header"
import Hero from "./components/hero-section";
import PartnersMarquee from "./components/partners-marquee";
import WhoWeAre from "./components/who-we-are-section";
import WhyJoin from "./components/why-join-section";
import EventsSection from "./components/events-section";
import Contact from "./components/contact";
import Join from "./components/join";
import Footer from "./components/footer";
function App() {

  return (
    <>
      <Header />
      {/* Main content area */}
      <Hero />
      <PartnersMarquee />
      <WhoWeAre />
      <WhyJoin />
      <EventsSection />
      <Contact />
      <Join />
      <Footer />
    </>
  );
}

export default App

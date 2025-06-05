import Hero from "../components/hero-section";
import PartnersMarquee from "../components/partners-marquee";
import WhoWeAre from "../components/who-we-are-section";
import WhyJoin from "../components/why-join-section";
import EventsSection from "../components/events-section";
import Contact from "../components/contact";
import Join from "../components/join";
function Home() {
  return (
    <>
     
      {/* Main content area */}
      <Hero />
      <PartnersMarquee />
      <WhoWeAre />
      <WhyJoin />
      <EventsSection />
      <Contact />
      <Join />
     
    </>
  );
}

export default Home
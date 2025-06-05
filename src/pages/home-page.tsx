import { motion } from "framer-motion";
import Hero from "../components/hero-section";
import PartnersMarquee from "../components/partners-marquee";
import WhoWeAre from "../components/who-we-are-section";
import WhyJoin from "../components/why-join-section";
import EventsSection from "../components/events-section";
import Contact from "../components/contact";
import Join from "../components/join";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main content area */}
      <Hero />
      <PartnersMarquee />
      <WhoWeAre />
      <WhyJoin />
      <EventsSection />
      <Contact />
      <Join />
    </motion.div>
  );
}

export default Home;

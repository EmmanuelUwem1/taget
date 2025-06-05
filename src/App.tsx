import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home-page";
import Header from "./components/header";
import Footer from "./components/footer";
import EventDetails from "./pages/events/page";
import ScrollToTop from "./components/scroll-to-top";

function App() {
  const location = useLocation(); // Track current route

  return (
    <>
      <Header /> {/* Navigation bar */}
      <ScrollToTop /> {/* Ensures smooth scrolling */}
      {/* Page Transition Wrapper */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<EventDetails />} />
          {/* Dynamic Route */}
        </Routes>
      </AnimatePresence>
      <Footer /> {/* Footer */}
    </>
  );
}

export default App;

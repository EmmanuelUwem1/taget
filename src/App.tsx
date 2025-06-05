import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";
import Header from "./components/header";
import Footer from "./components/footer";
import EventDetails from "./pages/events/page";
function App() {
  return (
    <>
      <Header /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/events/:id" element={<EventDetails />} />{" "}
        {/* Dynamic Route */}

      </Routes>
      <Footer /> {/* Footer */}
    </>
  );
}

export default App;

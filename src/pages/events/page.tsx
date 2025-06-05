import { useParams, useNavigate } from "react-router-dom";
import { events } from "../../data/events-data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function EventDetails() {
  const { id } = useParams(); // Get event ID from URL
  const navigate = useNavigate(); // Enable navigation
  const event = events.find((event) => event.id === parseInt(id!, 10)); // Find event by ID

  if (!event) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center min-h-screen text-center p-6"
      >
        <h2 className="text-2xl font-bold text-gray-500">Event Not Found</h2>
      </motion.div>
    );
  }

  // Navigate & scroll smoothly to #events section
  const handleScrollToEvents = () => {
    navigate("/"); // Navigate to homepage first
    setTimeout(() => {
      document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay ensures homepage loads first
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen pt-28 max-w-3xl mx-auto px-4 sm:px-8 md:px-16 pb-16"
    >
      {/* Breadcrumb Navigation */}
      <nav className="self-start flex justify-start items-center gap-4 text-gray-600 text-sm mb-4">
        <Link to='/' className="bg-[#0D0D0D] rounded-[6px] sm:py-3 py-2 px-6 transition-class hover:opacity-80 cursor-pointer text-white">
          Back
        </Link>
        <div>
          <button onClick={handleScrollToEvents} className="hover:underline">
            Events
          </button>{" "}
          / <span className="text-black font-medium">{event.title}</span>
        </div>
      </nav>

      {/* Event Title */}
      <h1 className="sm:text-4xl text-3xl text-left font-bold text-black sm:text-center">
        {event.title}
      </h1>

      {/* Event Image */}
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-auto my-4 rounded-lg shadow-md"
      />
      <p className="text-gray-600 mt-2 text-center">
        {event.date} | {event.time}
      </p>

      {/* Event Description */}
      <div
        className="text-gray-700 mt-4 text-left blog-content"
        dangerouslySetInnerHTML={{ __html: event.description }}
      />
    </motion.div>
  );
}

export default EventDetails;

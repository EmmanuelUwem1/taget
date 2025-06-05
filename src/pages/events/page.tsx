import { useParams } from "react-router-dom";
import { events } from "../../data/events-data";
import { Link } from "react-router-dom";

function EventDetails() {
  const { id } = useParams(); // Get event ID from URL
  const event = events.find((event) => event.id === parseInt(id!, 10)); // Find event by ID

  if (!event) {
    return (
      <div className="flex justify-center items-center min-h-screen text-center p-6">
        <h2 className="text-2xl font-bold text-gray-500">Event Not Found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-28 max-w-3xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="self-start text-gray-600 text-sm mb-4">
        <Link to="/events" className="hover:underline">
          Events
        </Link>{" "}
        /<span className="text-black font-medium"> {event.title}</span>
      </nav>

      {/* Event Title */}
      <h1 className="text-4xl font-bold text-black text-center">
        {event.title}
      </h1>

      <p className="text-gray-600 mt-2 text-center">
        {event.date} | {event.time}
      </p>

      {/* Event Image */}
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-auto my-4 rounded-lg shadow-md"
      />

      {/* Event Description */}
      <div
        className="text-gray-700 mt-4 text-left"
        dangerouslySetInnerHTML={{ __html: event.description }}
      />
    </div>
  );
}

export default EventDetails;

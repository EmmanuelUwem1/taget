import EventCard from "./event-card";
import { events } from "../data/events-data";

function EventsSection() {
  return (
    <section id="events" className="flex justify-center items-center flex-col gap-6 px-4 py-4">
      <span className="text-xl text-gray-700 font-semibold">Our Events</span>
      <h1 className="text-black font-bold text-3xl sm:text-4xl text-left sm:text-center">
        Grow Your Skills, Expand Your Network, and Have Fun!
      </h1>

      {/* Responsive grid layout */}
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.imageUrl}
            title={event.title}
            date={event.date}
            time={event.time}
            id={event.id}
            onRegister={() => alert(`Registered for ${event.title}`)}
          />
        ))}
      </div>

      <div>
        <button className="bg-[#0D0D0D] flex justify-center items-center text-base py-3 px-12 transition-class rounded-full hover:opacity-80 cursor-pointer text-white">
          Join Us
        </button>
      </div>
    </section>
  );
}

export default EventsSection;

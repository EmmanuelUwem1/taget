


type EventCardProps = {
  image: string;
  title: string;
  date: string;
  time: string;
  onRegister: () => void;
};

const EventCard = ({ image, title, date, time, onRegister }: EventCardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden cursor-pointer hover:shadow-lg bg-white p-4">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={image}
        alt={title}
      />
      <div className="">
        <h3 className="text-lg py-2 font-extrabold text-[#2D2D2D]">{title}</h3>
        <span className="text-gray-600 flex justify-between items-center gap-2">
          <span>{date}</span> <span>{time}</span>
        </span>
        <button
          onClick={onRegister}
          className="mt-4 px-4 py-2 bg-[#0D0D0D] text-white font-bold flex justify-center items-center w-full rounded hover:opacity-80 transition-class"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;

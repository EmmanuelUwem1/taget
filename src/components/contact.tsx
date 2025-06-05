
function Contact() {
  return (
    <section id="contact" className="flex justify-center items-center flex-col sm:p-10 p-4 bg-white rounded-[30px] shadow-lg border border-gray-700  sm:w-fit w-[90%] mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-black">Talk to Us</h2>
      <p className="text-[#0D0D0D] text-lg font-medium mt-2">
        LET’S FIND YOUR TARGET
      </p>

      {/* Form */}
      <form className="mt-6 w-full md:w-[90%] max-w-xl text-[#333333]">
        {/* Two-column row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border-transparent bg-[#D3D4D8] rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border-transparent bg-[#D3D4D8] rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border-transparent bg-[#D3D4D8] rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border-transparent bg-[#D3D4D8] rounded-md"
          />
        </div>

        {/* One-column row */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border-transparent bg-[#D3D4D8] rounded-md"
          />
        </div>

        {/* Text area */}
        <div className="mt-4">
          <textarea
            placeholder="Tell us something"
            className="w-full p-3 border-transparent bg-[#D3D4D8] rounded-md h-32"
          ></textarea>
        </div>

        {/* Submit button */}
          <button
            type="submit"
            className="mt-4 flex w-full justify-center px-6 py-3 bg-black text-white rounded-md hover:opacity-80 transition-class cursor-pointer"
          >
            Submit
          </button>
      </form>
    </section>
  );
}

export default Contact;
  
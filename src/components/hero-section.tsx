import heroImage from "/hero-image.png"
function Hero() {
  return (
    <section className="flex justify-between items-center gap-8 h-screen lg:flex-nowrap flex-wrap py-8 text-black px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="flex flex-col justify-start items-center w-full lg:w-1/2">
        <div>
          <span></span>
          <span></span>
          <span></span> 200+
        </div>
        <div>
          <h1>Set Your Targets with Taget</h1>
        </div>

        <div>
          <p>
            Empowering communities, igniting innovation, and building a
            decentralized future—one milestone at a time.
          </p>
        </div>
        <div>
          <button className="bg-[#0D0D0D] text-white rounded-[6px] py-3.5 px-6 transition-class hover:opacity-80 cursor-pointer">
            Get Involved Now
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-fit w-[80%] lg:w-[50%]">
        <img
          src={heroImage}
          alt="hero image"
          className="object-contain object-center"
        />
      </div>
    </section>
  );
}

export default Hero
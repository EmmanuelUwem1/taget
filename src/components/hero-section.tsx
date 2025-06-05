import heroImage from "/hero-image.png";
import ProfileOne from "/Profile 1.png";
import ProfileTwo from "/Profile 2.png";
import ProfileThree from "/Profile 3.png";
function Hero() {
  const profiles = [ProfileOne, ProfileTwo, ProfileThree];
  return (
    <section className="flex justify-between items-center gap-8 lg:gap-4 w-full min-h-screen lg:flex-nowrap flex-wrap pb-8 pt-36 text-black px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="flex flex-col gap-4 justify-start items-center w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start w-full items-center gap-3.5 text-[#000000]">
          <div className="flex items-center">
            {profiles.map((profile, index) => (
              <span key={index} className="relative -ml-3 first:ml-0">
                <img
                  src={profile}
                  alt={`Profile ${index + 1}`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
              </span>
            ))}
          </div>{" "}
          <div className="flex flex-col justify-center items-center">
            <span className="font-extrabold text-lg sm:text-2xl text">200+</span>
            <span>Community</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-extrabold text-lg sm:text-2xl">7+</span>
            <span>Partners</span>
          </div>
        </div>
        <div>
          <h1 className="gradient-text text-5xl lg:text-7xl font-bold text-center lg:text-left">
            Set Your Targets with Taget
          </h1>
        </div>

        <div>
          <p className="text-center lg:text-left text-lg text-[#0D0D0D]">
            Empowering communities, igniting innovation, and building a
            decentralized future—one milestone at a time.
          </p>
        </div>
        <div className="flex w-full justify-center lg:justify-start items-center">
          <button className="bg-[#0D0D0D] text-white rounded-[6px] py-3.5 px-6 transition-class hover:opacity-80 cursor-pointer">
            Get Involved Now
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-full mx-auto w-[80%] lg:w-[50%]">
        <img
          src={heroImage}
          alt="hero image"
          className="object-contain object-center w-full sm:w-[80%]"
        />
      </div>
    </section>
  );
}

export default Hero
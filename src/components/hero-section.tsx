import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "/hero-image.png";
import ProfileOne from "/Profile 1.png";
import ProfileTwo from "/Profile 2.png";
import ProfileThree from "/Profile 3.png";

function Hero() {
  const profiles = [ProfileOne, ProfileTwo, ProfileThree];

  // State for counting animations
  const [communityCount, setCommunityCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);

  useEffect(() => {
    const countUp = (setCount: (val: number) => void, target: number) => {
      let current = 0;
      const interval = setInterval(() => {
        if (current < target) {
          current += 5; // Adjust increment speed
          setCount(current);
        } else {
          clearInterval(interval);
          setCount(target);
        }
      }, 50);
    };

    countUp(setCommunityCount, 200);
    countUp(setPartnerCount, 7);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between items-center gap-8 lg:gap-4 w-full min-h-screen lg:flex-nowrap flex-wrap pb-8 pt-36 text-black px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24"
    >
      <div className="flex flex-col gap-4 justify-start items-center w-full lg:w-1/2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center lg:justify-start w-full items-center gap-3.5 text-[#000000]"
        >
          <div className="flex items-center">
            {profiles.map((profile, index) => (
              <motion.span
                key={index}
                className="relative -ml-3 first:ml-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={profile}
                  alt={`Profile ${index + 1}`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col justify-center items-center">
            <span className="font-extrabold text-lg sm:text-2xl">
              {communityCount}+
            </span>
            <span>Community</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-extrabold text-lg sm:text-2xl">
              {partnerCount}+
            </span>
            <span>Partners</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h1 className="gradient-text text-5xl lg:text-7xl font-bold text-center lg:text-left">
            Set Your Targets with Taget
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-center lg:text-left text-lg text-[#0D0D0D]">
            Empowering communities, igniting innovation, and building a
            decentralized future—one milestone at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex w-full justify-center lg:justify-start items-center"
        >
          <button className="bg-[#0D0D0D] text-white rounded-[6px] py-3.5 px-6 transition-class hover:opacity-80 cursor-pointer">
            Get Involved Now
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex justify-center items-center h-full mx-auto w-[80%] lg:w-[50%]"
      >
        <img
          src={heroImage}
          alt="hero image"
          className="object-contain object-center w-full sm:w-[80%]"
        />
      </motion.div>
    </motion.section>
  );
}

export default Hero;

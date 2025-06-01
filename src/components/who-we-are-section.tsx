import arrow from "/Vector 26.png";

function WhoWeAre() {
    return (
      <section className="bg-[#0D0D0D] overflow-x-hidden flex-col flex justify-start items-center ">
        <h2 className="font-bold md:text-8xl text-5xl sm:text-7xl lg:text-9xl mx-auto text-white">
          WHO WE ARE
        </h2>
        <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-20 gap-8 py-8 xl:px-24 flex-wrap-reverse lg:flex-nowrap w-full">
          <div className="flex flex-col justify-center items-center gap-2 text-white w-full lg:w-[50%] ">
            <span className="text-white text-4xl font-medium">Welcome to Taget</span>
            <span className="flex w-full px-4 justify-center items-center ">
              <img src={arrow} alt="arrow" />
            </span>
          </div>
          <div className="w-full lg:w-[50%] text-base font-normal text-white flex flex-col gap-6 opacity-90">
            <p>
              {` Taget is more than a project—it’s a movement. We’re a
              community-driven initiative focused on onboarding, educating, and
              empowering individuals in the world of decentralised organisations
              (DAOs) and beyond. Partnering with innovators like @MprofyDao ,
              we’re breaking barriers and setting new targets for what’s
              possible.`}
              ;
            </p>
            <p>{` In Q1 2025 alone, we hosted the largest DAO event in
              Uyo, kicked off a massive onboarding phase, and laid the
              groundwork for a learning revolution. Ready to join us?`}</p>
          </div>
        </div>
      </section>
    );
}

export default WhoWeAre
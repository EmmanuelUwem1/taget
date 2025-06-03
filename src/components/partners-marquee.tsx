import Marquee from "react-fast-marquee";
import { PartnersData } from "../data/partners-data";
function PartnersMarquee() {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 pb-8 pt-4">
        <Marquee
          play={true}
          pauseOnHover={false}
          pauseOnClick={false}
          direction="right"
          speed={100}
          loop={0}
          autoFill={true}
          gradient={true}
          gradientColor="#ffffff"
                gradientWidth={20}
          className="flex w-full flex-nowrap justify-between"
        >
          {PartnersData.map((partner, index) => (
            <div
              key={index}
              className="flex ml-20 sm:ml-24 items-center justify-center w-full"
            >
              <img
                src={partner.logo} 
                alt={partner.name}
                className="object-contain h-fit w-fit"
              />
            </div>
          ))}
        </Marquee>
      </div>
    );
}

export default PartnersMarquee;

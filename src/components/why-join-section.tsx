
function WhyJoin() {


    const data = [
      {
        title: "COMMUNITY",
        imageUrl: "pexels-shvets-production-7561969 1.png",
        description:
          "Immerse yourself in a community passionate about Web3, where you can connect with pioneers and enthusiasts shaping the on-chain future.",
      },
      {
        title: "EDUCATION",
        imageUrl: "pexels-mikhail-nilov-7887140 1.png",
        description:
          "Explore Web3 technologies with our educational resources, equipping you with the knowledge and tools to engage in the blockchain revolution.",
      },
      {
        title: "JOBS",
        imageUrl: "pexels-rodnae-productions-8098263 1.png",
        description:
          "Discover career opportunities in the growing Web3 industry, from blockchain development to design and NFTs, and shape your future.",
      },
      {
        title: "LIVE SPACES",
        imageUrl: "pexels-mali-maeder-756439 1.png",
        description:
          "Engage in Web3 through live sessions, workshops, and AMAs, gaining real-time access to experts, insights, and the latest developments.",
      }
      
    ];

  return (
    <section className="flex flex-col justify-center items-center  gap-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-8">
      <h1 className="text-[#0D0D0D] text-4xl font-old">{`Why Join Taget ?`}</h1>
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
              {data.map((item, index) => (
                <div
                      key={index}
                      className="flex flex-col justify-center items-center w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-600 text-center">
                          {item.description}
                      </p>
                  </div>
                ))}
      </div>
    </section>
  );
}

export default WhyJoin
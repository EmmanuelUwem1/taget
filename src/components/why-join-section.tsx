
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
    <section className="flex flex-col justify-center items-center  gap-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 pt-8 pb-16">
      <h1 className="text-[#0D0D0D] text-4xl font-semibold">{`Why Join Taget ?`}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex max-w-80 flex-col justify-center items-center bg-[#F0F0F0] w-full gap-2 p-4 rounded-lg shadow-md"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-44 h-44 object-cover rounded-full border-8 border-[#2F212154] mb-4"
            />
            <div className="bg-[#D3D4D8] h-[2px] w-[70%]"></div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="mb-2 text-2xl text-[#0D0D0D] font-semibold">
                {item.title}
              </h2>
              <p className="text-[#0D0D0D] opacity-90 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyJoin
import logo from "/logo.png"

function Header() {
  return (
    <header className="sticky top-4 left-0 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-2 flex justify-center items-center w-full z-[1000]">
      {/* the heade with border */}
      <div className=" py-4 px-4 sm:px-8 md:px-16 flex justify-between items-center rounded-full w-full border bg-blur border-[#000000]">
        <span className="relative flex items-center justify-center h-6 w-20">
          <img
            src={logo}
            alt="Logo"
            className="object-contain object-center flex w-full h-full justify-center items-center"
          />
        </span>
        {/* Navigation links can be added here */}n
        <nav className="hidden lg:flex gap-20 justify-center items-center text-[#0D0D0D]">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Events</a>
          <a href="/">Contact</a>
        </nav>
        <button className="bg-[#0D0D0D] rounded-[6px] py-3.5 px-6 transition-class hover:opacity-80 cursor-pointer">Join Us</button>
      </div>
    </header>
  );
}

export default Header
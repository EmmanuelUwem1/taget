import logo from "/logo.png"

function Header() {
  return (
    <header className="px-4 sm:px-8 md:px-16 flex justify-center items-center w-full">
      {/* the heade with border */}
      <div className=" py-4 sm:px-8 md:px-16 flex justify-between items-center rounded-full border border-[#000000]">
        <span className="relative flex items-center justify-center h-6 w-20">
          <img src={logo} alt="Logo" className="object-contain object-center flex w-full h-full justify-center items-center" />
        </span>
        {/* Navigation links can be added here */}n
              <nav className="gap-20 text-[#0D0D0D]">
                  <a href="/">Home</a> 
                  <a href="/">Home</a> 
                  <a href="/">Home</a> 
                  <a href="/">Home</a> 
        </nav>
      </div>
    </header>
  );
}

export default Header
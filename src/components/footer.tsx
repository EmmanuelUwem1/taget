function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-6">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start md:w-1/4">
          <img src="/logo.png" alt="Logo" className="w-20 mb-3" />
          <p className="text-gray-400 text-sm">
            Building the future, one target at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:w-1/4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/events" className="text-gray-400 hover:text-white">
                Events
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:w-1/4">
          <h3 className="text-lg font-bold">Connect with us</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="https://twitter.com/yourTaget"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:info@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                info@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col md:w-1/4">
          <h3 className="text-lg font-bold">Join our newsletter</h3>
          <div className="mt-3 flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-black outline-none"
            />
            <button className="bg-black text-white px-5 py-3">Send</button>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-gray-700 mt-8" />

      {/* Copyright */}
      <p className="text-gray-400 text-center text-sm mt-4">
        © {new Date().getFullYear()} Taget. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

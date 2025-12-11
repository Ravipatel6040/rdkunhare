import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const menuStyle = "font-medium text-[15px] leading-[30px] tracking-wide";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="w-full bg-black text-white py-2 px-5 flex justify-end items-center space-x-5 lg:hidden">
        <a href="#" className="text-white text-lg">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white text-lg">
          <FaInstagram />
        </a>
        <a href="#" className="text-white text-lg">
          <FaLinkedinIn />
        </a>
      </div>

      <nav className="w-full bg-white text-black shadow-md lg:bg-black lg:text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-35">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Kunhare Logo" className="h-30 w-auto object-contain" />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-10 uppercase">
              <NavLink to="/" className={`${menuStyle} text-white hover:text-gray-300`}>
                Home
              </NavLink>

              <NavLink to="/about" className={`${menuStyle} text-white hover:text-gray-300`}>
                About Us
              </NavLink>

              {/* SERVICES DROPDOWN */}
              <div className="relative group">
                <button className={`inline-flex items-center gap-1 ${menuStyle} text-white hover:text-gray-300`}>
                  <span>Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 
                    10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 
                    4.24a.75.75 0 01-1.06 0L5.21 
                    8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-3 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 
                                scale-95 transform origin-top transition-all duration-150 ease-out 
                                group-hover:opacity-100 group-hover:scale-100 pointer-events-none 
                                group-hover:pointer-events-auto z-30">

                  {[
                    "Architecture Design",
                    "Interior Design",
                    "Building & Construction",
                    "Structure Design",
                    "Property Management",
                    "Map Sanction",
                    "Vastu",
                  ].map((item) => (
                    <Link
                      key={item}
                      to="/services"
                      className="block px-5 py-2.5 text-[15px] leading-[30px] font-medium
                                 text-gray-700 hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/gallery" className={`${menuStyle} text-white hover:text-gray-300`}>
                Gallery
              </NavLink>

              <NavLink to="/careers" className={`${menuStyle} text-white hover:text-gray-300`}>
                Careers
              </NavLink>

              <NavLink to="/blog" className={`${menuStyle} text-white hover:text-gray-300`}>
                Blog
              </NavLink>

              <NavLink to="/contact" className={`${menuStyle} text-white hover:text-gray-300`}>
                Contact Us
              </NavLink>
            </div>

            {/* SEARCH BAR (DESKTOP) */}
            <div className="hidden lg:flex items-center">
              <form
                onSubmit={handleSearchSubmit}
                className={`flex items-center rounded-full px-2 py-1 transition-all duration-300 ease-out border 
                    ${searchOpen ? "border-gray-400 bg-white" : "border-transparent bg-transparent"}`}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`bg-transparent outline-none text-sm text-black placeholder-gray-500 transition-all duration-300 ease-out 
                      ${searchOpen ? "w-40 opacity-100 ml-2" : "w-0 opacity-0"}`}
                />

                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`p-1 transition-colors duration-300 
                      ${searchOpen ? "text-black" : "text-white hover:text-gray-300"}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.65" y1="16.65" x2="21" y2="21" />
                  </svg>
                </button>
              </form>
            </div>

            {/* MOBILE HAMBURGER */}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-4 space-y-2 uppercase">

              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center border border-gray-300 rounded-full px-3 py-1 mb-3"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full outline-none text-black text-sm bg-transparent"
                />
              </form>

              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "Careers", to: "/careers" },
                { label: "Blog", to: "/blog" },
                { label: "Contact Us", to: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`${menuStyle} text-black block`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

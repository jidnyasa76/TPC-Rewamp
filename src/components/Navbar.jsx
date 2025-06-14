import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Statistics", path: "/statistics" },
    { name: "Placements", path: "/placements" },
    { name: "Contact", path: "/contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav
        className={`fixed w-screen top-0 z-50 transition-all duration-300 
          font-poppins px-6 md:px-8 py-4 ${
            scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
          } ${menuOpen ? "hidden" : "flex items-center justify-between"}`}
      >
        {/* Logo */}
        <div className="w-[10rem] h-[5rem] flex items-center z-50">
          <img src="/TPCLogo.svg" alt="TPC-PCE" className="h-full w-auto object-contain" />
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden z-50" onClick={() => setMenuOpen(true)}>
          <Menu size={28} className="text-white" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {navItems.map(({ name, path }) => (
            <li key={name} className="group relative">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-all duration-300 no-underline ${
                    isActive
                      ? "text-green-500 hover:text-green-500"
                      : "text-white hover:text-green-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-[70vh] bg-black/95 backdrop-blur-sm z-50 flex flex-col">
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <img
              src="/TPCLogo.svg"
              alt="TPC-PCE"
              className="h-20 object-contain" // Increased height
            />
            <X
              size={32}
              className="text-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-center gap-5 py-6">
            {navItems.map(({ name, path }) => (
              <li key={name} onClick={() => setMenuOpen(false)} className="group relative">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-lg transition-all duration-300 ${
                      isActive
                        ? "text-green-500 hover:text-green-500"
                        : "text-white hover:text-green-500"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {name}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;

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
    <nav
      className={`fixed w-screen top-0 z-50 transition-all duration-300 
        flex items-center justify-between font-poppins px-6 md:px-8 py-4
        ${scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="w-[10rem] h-[5rem] flex items-center z-50">
        <img src="/TPCLogo.svg" alt="TPC-PCE" className="h-full w-auto object-contain" />
      </div>

      {/* Hamburger - Mobile */}
      <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
        {navItems.map(({ name, path }) => (
          <li key={name} className="group relative">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive ? "text-white" : "text-white hover:text-green-600"
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

      {/* Mobile Dropdown */}
      <ul
        className={`md:hidden absolute top-[100%] left-0 w-full bg-black/90 backdrop-blur-sm transition-all duration-300 flex flex-col items-center gap-4 py-6 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map(({ name, path }) => (
          <li key={name} onClick={() => setMenuOpen(false)} className="group relative">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `text-lg transition-all duration-300 ${
                  isActive ? "text-white" : "text-white hover:text-green-600"
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
  );
}

export default Navbar;

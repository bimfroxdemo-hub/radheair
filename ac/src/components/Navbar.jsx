import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlinePhone } from "react-icons/ai";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Brand with Image Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logos/companylogo.jpg"
              alt="RadheAir Logo"
              className="h-35 w-35 object-contain"
            />
          </Link>


          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-gray-700 hover:text-[#1f71b4] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions (desktop) */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href="tel:+918401012989"
              className="inline-flex items-center px-3 py-2 rounded-md bg-[#1f71b4] text-white text-sm font-medium shadow-sm hover:opacity-95 transition"
            >
              <AiOutlinePhone className="h-4 w-4" />
              <span>+91 8401012989</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1f71b4]"
          >
            {isMobileOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t bg-white transition-max-h duration-300 overflow-hidden ${
          isMobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setIsMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href="tel:+918401012989"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#1f71b4] text-white text-sm font-medium"
            >
              <AiOutlinePhone className="h-4 w-4" />
              <span>+91 8401012989</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

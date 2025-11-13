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
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-400 transform transition-transform group-hover:scale-105">
              <span className="text-white font-bold">AC</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">RadheAir</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions (desktop) */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              <AiOutlinePhone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>

            <Link
              to="/book"
              className="inline-flex items-center px-3 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-emerald-400 text-white text-sm font-medium shadow-sm hover:opacity-95 transition"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
            >
              <AiOutlinePhone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>

            <Link
              to="/book"
              onClick={() => setIsMobileOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-emerald-400 text-white text-sm font-medium"
            >
              Book Service
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

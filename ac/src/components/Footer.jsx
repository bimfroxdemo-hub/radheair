import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-white font-bold">AC</span>
              </div>
              <span className="text-lg font-semibold">RadheAir</span>
            </div>
            <p className="text-sm">
              Trusted partner for AC repair, installation and sales. Quality
              service since 2021.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="mb-4 text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="block hover:text-indigo-600 transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block hover:text-indigo-600 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block hover:text-indigo-600 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block hover:text-indigo-600 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center">
            <h3 className="mb-4 text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="block hover:text-indigo-600 transition"
                >
                  AC Repair & Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block hover:text-indigo-600 transition"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block hover:text-indigo-600 transition"
                >
                  Gas Filling
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block hover:text-indigo-600 transition"
                >
                  AMC Plans
                </Link>
              </li>
                <li>
                <Link
                  to="/services"
                  className="block hover:text-indigo-600 transition"
                >
                  Deep Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-medium">Contact Us</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <FaMapMarkerAlt className="h-4 w-4 text-red-700" />
                </span>
                <address className="not-italic">
                  Shop No.B-1/6, Aakash Prithvi, Vadod Gam Road, Bhestan, Surat - 395023
                </address>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="h-4 w-4 text-green-600" />
                <a href="tel:+918401012989" className="hover:text-indigo-600">
                  +918401012989
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaWhatsapp className="h-4 w-4 text-green-500" />
                <a
                  href="https://wa.me/917486933410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600"
                >
                  +917486933410
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FULL WIDTH COPYRIGHT BAR */}
      <div className="w-full bg-[#0f4f7a] text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} RadheAir AC Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

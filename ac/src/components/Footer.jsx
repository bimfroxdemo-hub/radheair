import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
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
              service since 2015.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="RadheAir on Facebook"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="RadheAir on Instagram"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="RadheAir on Twitter"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
            </div>
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
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>AC Repair & Service</li>
              <li>Installation</li>
              <li>Gas Filling</li>
              <li>AMC Plans</li>
              <li>Deep Cleaning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-medium">Contact Us</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </span>
                <address className="not-italic">
                  123 Service Road, Mumbai, Maharashtra 400001
                </address>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="h-4 w-4" />
                <a href="tel:+919876543210" className="hover:text-indigo-600">
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="h-4 w-4" />
                <a
                  href="mailto:support@radheair.com"
                  className="hover:text-indigo-600"
                >
                  support@radheair.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} RadheAir AC Services. All rights
              reserved.
            </p>

            <div className="text-sm">
              <span className="mr-2">Privacy</span>
              <span className="mx-2">·</span>
              <span className="mr-2">Terms</span>
              <span className="mx-2">·</span>
              <span>Site Map</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

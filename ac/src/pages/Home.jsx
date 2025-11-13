import { Link } from "react-router-dom";
import {
  FiTool,
  FiBox,
  FiWind,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiStar,
  FiPhone,
} from "react-icons/fi";
import heroImage from "/Images/ac_hero1.png";
import splitAC from "/Images/1.5ton1.png";
import splitACHover from "/Images/1.5ton_on1.png";
import windowAC from "/Images/1.5ton.png";
import windowACHover from "/Images/1.5ton_on.png";
import inverterAC from "/Images/1.5ton.png";
import inverterACHover from "/Images/1.5ton_on.png";

const Home = () => {
  const services = [
    { Icon: FiTool, title: "AC Repair", desc: "Expert diagnosis and repair" },
    { Icon: FiBox, title: "Installation", desc: "Professional setup" },
    { Icon: FiWind, title: "Gas Filling", desc: "Quick refill service" },
    { Icon: FiShield, title: "AMC Plans", desc: "Annual maintenance" },
  ];

  const products = [
    {
      image: splitAC,
      hoverImage: splitACHover,
      name: "Split AC 1.5 Ton",
      brand: "Daikin",
      price: "₹32,990",
      rating: 4.5,
      features: ["5 Star Rating", "Inverter", "3 Year Warranty"],
    },
    {
      image: windowAC,
      hoverImage: windowACHover,
      name: "Window AC 1 Ton",
      brand: "LG",
      price: "₹24,990",
      rating: 4.3,
      features: ["3 Star Rating", "Copper Coil", "2 Year Warranty"],
    },
    {
      image: inverterAC,
      hoverImage: inverterACHover,
      name: "Inverter AC 2 Ton",
      brand: "Voltas",
      price: "₹42,990",
      rating: 4.7,
      features: ["5 Star Rating", "Smart WiFi", "5 Year Warranty"],
    },
  ];

  const trustBadges = [
    { Icon: FiClock, text: "Same Day Service" },
    { Icon: FiCheckCircle, text: "Verified Technicians" },
    { Icon: FiShield, text: "Warranty on Repair" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
              Trusted AC Experts Since 2015
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Professional AC Repair & Sales Service
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Expert technicians, quality service, and competitive pricing for all your cooling needs. Same-day repairs available.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:scale-105 transform transition"
              >
                Book Service Now
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 px-5 py-3 text-gray-800 hover:bg-gray-50"
              >
                Buy New AC
              </Link>
            </div>

            {/* trust badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-white shadow-sm rounded-lg px-3 py-2">
                  <div className="p-2 rounded-md bg-blue-50">
                    <b.Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium">{b.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Hero Image */}
          <div className="relative animate-float">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional AC technician at work"
                className="w-full h-72 sm:h-96 object-cover object-center transition-transform transform hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 left-4 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
              <FiStar className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-bold text-lg">4.9/5</div>
                <div className="text-xs text-gray-500">2,500+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
            <p className="mt-2 text-gray-600">
              Comprehensive AC solutions for your home and office
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 mb-4">
                  <s.Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-block text-sm text-blue-600 hover:underline"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured AC Units</h2>
            <p className="mt-2 text-gray-600">
              Top-rated air conditioners from leading brands
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                {/* Hover Image Swap with Fade + Smooth Zoom */}
                <div className="h-56 overflow-hidden relative group">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-all duration-500 transform group-hover:opacity-0 group-hover:scale-105"
                  />
                  <img
                    src={p.hoverImage}
                    alt={`${p.name} hover`}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-500 transform group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm px-2 py-1 rounded-md bg-gray-100 text-gray-700">
                      {p.brand}
                    </span>
                    <div className="flex items-center gap-1">
                      <FiStar className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium">{p.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <ul className="mt-3 text-sm text-gray-600 space-y-1">
                    {p.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {p.price}
                    </div>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-white text-sm"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 rounded-md border border-transparent bg-blue-600 text-white font-medium hover:opacity-95"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Need AC Service Today?
            </h2>
            <p className="mt-2 max-w-2xl mx-auto">
              Our expert technicians are available 24/7 for emergency repairs and installations
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-white font-medium"
              >
                <FiPhone className="w-5 h-5" /> Call Now: +91 98765 43210
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-blue-600 font-medium"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

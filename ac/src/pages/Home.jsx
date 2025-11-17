/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import { FaWhatsapp } from "react-icons/fa";


import heroImage from "/Images/hero_laptop1.png";
import heroMobile from "/Images/hero_mobile.png";

import splitAC from "/Images/1.5ton1.png";
import splitACHover from "/Images/1.5ton_on1.png";
import windowAC from "/Images/windowOff1.png";
import windowACHover from "/Images/windowOn1.png";
import inverterAC from "/Images/2tonOff1.png";
import inverterACHover from "/Images/2tonOn1.png";
import ServicePartners from "../components/ServicePartners";

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
      rating: 4.5,
      features: ["5 Star Rating", "Inverter", "3 Year Warranty"],
    },
    {
      image: windowAC,
      hoverImage: windowACHover,
      name: "Window AC 1 Ton",
      brand: "LG",
      rating: 4.3,
      features: ["3 Star Rating", "Copper Coil", "2 Year Warranty"],
    },
    {
      image: inverterAC,
      hoverImage: inverterACHover,
      name: "Inverter AC 2 Ton",
      brand: "Voltas",
      rating: 4.7,
      features: ["5 Star Rating", "Smart WiFi", "5 Year Warranty"],
    },
  ];

  const trustBadges = [
    { Icon: FiClock, text: "Same Day Service" },
    { Icon: FiCheckCircle, text: "Verified Technicians" },
    { Icon: FiShield, text: "Warranty on Repair" },
  ];

  const cardVariant = {
    initial: { opacity: 0, y: 12 },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
    }),
    hover: {
      y: -8,
      scale: 1.03,
      transition: { type: "spring", stiffness: 260, damping: 22 },
    },
  };

  const imgVariant = {
    initial: { opacity: 1, scale: 1 },
    hover: {
      opacity: 0,
      scale: 1.06,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section
        id="hero-section"
        className="
          relative min-h-screen flex justify-center bg-cover bg-center
          pt-10 sm:pt-16 md:pt-24 lg:pt-32
        "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <style>
          {`
            @media (max-width: 640px) {
              #hero-section {
                background-image: url(${heroMobile}) !important;
              }
            }
          `}
        </style>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left space-y-6 text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
                Professional AC Repair & Sales Service
              </h1>

              <p className="text-lg text-gray-100 max-w-xl md:mx-0">
                Expert technicians, quality service, and competitive pricing for all your cooling needs. Same-day repairs available.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-md bg-green-500 px-5 py-3 text-white font-medium hover:scale-105 transition"
                >
                  Book Service Now
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-white hover:bg-white/10"
                >
                  Buy New AC
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
                {trustBadges.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl">
                    <div className="p-2 rounded-full bg-white/10">
                      <b.Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm font-medium text-white">{b.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
            <p className="mt-2 text-gray-600">Comprehensive AC solutions for your home and office</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center items-stretch">
            {services.map((s, idx) => (
              <article key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition hover:-translate-y-1 flex flex-col items-center justify-center h-full hover:shadow-[#0f4f7a]">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 mb-4">
                  <s.Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-block text-sm text-blue-600 hover:underline">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServicePartners />

      {/* PRODUCTS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured AC Units</h2>
            <p className="mt-2 text-gray-600">Top-rated air conditioners from leading brands</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariant}
                initial="initial"
                animate="enter"
                whileHover="hover"
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="h-56 overflow-hidden relative">
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    variants={imgVariant}
                    initial="initial"
                    whileHover="hover"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <motion.img
                    src={p.hoverImage}
                    alt={`${p.name} hover`}
                    initial={{ opacity: 0, scale: 1 }}
                    whileHover={{ opacity: 1, scale: 1.06, transition: { duration: 0.45 } }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm px-2 py-1 rounded-md bg-gray-100 text-gray-700">{p.brand}</span>
                    <div className="flex items-center gap-1">
                      <FiStar className="w-4 h-4" />
                      <span className="text-sm font-medium">{p.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg">{p.name}</h3>

                  <ul className="mt-3 text-sm text-gray-600 space-y-1">
                    {p.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="text-sm text-gray-500">Contact us for the latest price and installation options.</div>

                    <a
                      href={`https://wa.me/917486933410?text=${encodeURIComponent(
                        `Hi RadheAir, I'm interested in ${p.name}. Please share more details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm bg-[#25D366] text-white 
                        hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
                      <FaWhatsapp className="w-5 h-5" />
                      Enquire
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/products" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:opacity-95">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-10">
            <h2 className="text-2xl md:text-3xl font-bold">Need AC Service Today?</h2>
            <p className="mt-2 max-w-2xl mx-auto">Our expert technicians are available 24/7 for emergency repairs and installations</p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a href="tel:+918401012989" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-white font-medium">
                <FiPhone className="w-5 h-5" /> Call Now: +91 8401012989
              </a>

              <Link to="/services" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-blue-600 font-medium">
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

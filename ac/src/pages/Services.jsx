import React from "react";
import {
  FaWrench,
  FaBox,
  FaWind,
  FaShieldAlt,
  FaTint,
  FaBolt,
  FaCheckCircle,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import Hero from "../components/Hero";
import WhyChooseRadheAir from "../components/WhyChooseRadheAir";

const Services = () => {
  const PRIMARY = "#1f71b4";

  const services = [
    {
      icon: FaWrench,
      title: "AC Repair & Service",
      description: "Complete diagnosis and repair of all AC problems",
      features: ["Expert technicians", "Same day service", "90-day warranty", "Free inspection"],
    },
    {
      icon: FaBox,
      title: "AC Installation",
      description: "Professional installation for all AC types",
      features: ["Standard & split AC", "Pipe & wiring included", "Proper positioning", "1-year warranty"],
    },
    {
      icon: FaWind,
      title: "Gas Filling",
      description: "Quick refrigerant refill for optimal cooling",
      features: ["R22 & R410A gas", "Leak detection", "Pressure testing", "Certified gas"],
    },
    {
      icon: FaShieldAlt,
      title: "AMC Plans",
      description: "Annual maintenance contracts for hassle-free service",
      features: ["4 free services/year", "Priority support", "Discount on repairs", "Gas top-up included"],
    },
    {
      icon: FaTint,
      title: "Deep Cleaning",
      description: "Thorough cleaning of AC units for better performance",
      features: ["Filter cleaning", "Coil deep wash", "Drain pipe cleaning", "Anti-bacterial spray"],
    },
    {
      icon: FaBolt,
      title: "PCB Repair",
      description: "Circuit board repair and replacement",
      features: ["Expert diagnosis", "Genuine parts", "Quick turnaround", "6-month warranty"],
    },
    {
      icon: FaWrench,
      title: "Refrigerator Repair",
      description: "Complete repair for single-door, double-door & side-by-side fridges",
      features: ["Cooling issue fix", "Compressor check", "Thermostat repair", "Water leakage fix"],
    },
    {
      icon: FaWind,
      title: "Refrigerator Gas Filling",
      description: "Accurate refrigerant refill for efficient cooling",
      features: ["R134a & R600a gas", "Leak detection", "Pressure testing", "Certified refrigerant"],
    },
    {
      icon: GrVmMaintenance,
      title: "Refrigerator Maintenance",
      description: "Regular servicing to enhance refrigerator life",
      features: ["Condenser cleaning", "Thermostat calibration", "Door gasket check", "Full system inspection"],
    },
  ];

  const whatsappNumber = "917486933410";

  const generateWhatsAppLink = (service) => {
    const msg = `Hi RadheAir, I want to book: ${service.title}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900"
      style={{ ["--primary"]: PRIMARY }}
    >
      <Hero
        title="Our Services"
        subtitle="Comprehensive AC solutions — transparent visit charge and trusted technicians."
      />

      <main className="px-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <article
                  key={i}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform transition duration-300 ease-out hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex gap-4">
                    <div
                      className="flex items-center justify-center h-14 w-14 rounded-lg shrink-0"
                      style={{ background: `linear-gradient(135deg, ${PRIMARY}, #38bdf8)` }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{service.description}</p>

                      <div
                        className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: "#eef6fb", color: PRIMARY }}
                      >
                        <span>Service Charge</span>
                        <strong>₹300</strong>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 flex-1 flex flex-col justify-between">
                    <ul className="mb-4 grid gap-2 text-sm text-gray-600">
                      {service.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FaCheckCircle className="mt-1 h-4 w-4" style={{ color: PRIMARY }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-3 mt-auto">
                      <a
                        href={generateWhatsAppLink(service)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Contact via WhatsApp about ${service.title}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                        style={{ backgroundColor: "#25D366" }}
                      >
                        <FaWhatsapp className="h-4 w-4" />
                        WhatsApp
                      </a>

                      <a
                        href="tel:+918401012989"
                        className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-100 transition"
                      >
                        <FaPhone className="h-4 w-4" />
                        Call
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Why choose us section as component */}
          <WhyChooseRadheAir primary={PRIMARY} />
        </div>
      </main>
    </div>
  );
};

export default Services;

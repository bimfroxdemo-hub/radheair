/* eslint-disable no-unused-vars */
import React from "react";
import { FaShieldAlt, FaCheckCircle, FaBolt } from "react-icons/fa";

const WhyChooseCard = ({ icon: Icon, title, description, primary }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div
        className="p-4 rounded-full"
        style={{ backgroundColor: `${primary}1A` }} // 10% opacity bg
      >
        <Icon className="h-6 w-6" style={{ color: primary }} />
      </div>
      <h4 className="mt-3 font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseRadheAir = ({ primary = "#1f71b4" }) => {
  const items = [
    {
      icon: FaShieldAlt,
      title: "Quality Assurance",
      description: "All repairs come with warranty and quality guarantee.",
    },
    {
      icon: FaCheckCircle,
      title: "Certified Technicians",
      description: "Experienced professionals with proper training.",
    },
    {
      icon: FaBolt,
      title: "Fast Service",
      description: "Same-day service available for urgent repairs.",
    },
  ];

  return (
    <section className="mt-12 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 md:p-8">
      <h2 className="text-center text-xl sm:text-2xl font-bold mb-6">
        Why Choose RadheAir?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <WhyChooseCard
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
            primary={primary}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseRadheAir;

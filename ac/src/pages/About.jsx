import React from "react";
import { FaAward, FaUsers, FaBriefcase, FaClock } from "react-icons/fa";
import ServicePartners from "../components/ServicePartners";
import Hero from "../components/Hero";

const About = () => {
  const stats = [
    { Icon: FaAward, label: "Years Experience", value: "5+" },
    { Icon: FaUsers, label: "Happy Customers", value: "600+" },
    { Icon: FaBriefcase, label: "Skilled Technicians", value: "5+" },
    { Icon: FaClock, label: "Service Hours", value: "24/7" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Hero
        title="About RadheAir"
        subtitle="Your trusted partner for professional AC services since 2021."
      />

      {/* Stats */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-400 text-white">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{s.value}</div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <div className="space-y-4 text-slate-600">
              <p>
               Founded in 2021, RadheAir began as a small local AC repair shop and has grown into one of the region's most trusted service providers. Over the years, we expanded our expertise into advanced repairs, preventive maintenance, and sales of premium AC units from leading brands.
              </p>
              <p>
                Today, our team includes 2 experienced engineers, 3 fresh trainees, and 2 skilled helpers who work together to deliver fast, reliable, and professional service.
              </p>
              <p>
                With a customer-first approach and a commitment to quality workmanship, we have proudly served 500+ residential and commercial clients and continue building long-term relationships through honesty, expertise, and timely support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h4 className="text-center text-2xl font-bold mb-8">Our Values</h4>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md ">
              <h5 className="font-semibold mb-2">Quality First</h5>
              <p className="text-slate-600 text-sm">
                We never compromise on quality. Every service comes with a satisfaction guarantee.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h5 className="font-semibold mb-2">Transparency</h5>
              <p className="text-slate-600 text-sm">
                Clear pricing, honest assessments, and no hidden charges.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h5 className="font-semibold mb-2">Customer Focus</h5>
              <p className="text-slate-600 text-sm">
                Your comfort is our priority with flexible scheduling &amp; 24/7 service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Partners */}
      <ServicePartners />
    </div>
  );
};

export default About;

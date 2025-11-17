import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Hero from "../components/Hero"; 

const ADDRESS_DISPLAY =
  "Shop No.B-1/6, Aakash Prithvi, Vadod Gam Road, Bhestan, Surat - 395023";
const ADDRESS_MAP = "Aakash Prithvi, Vadod Gam Road, Bhestan, Surat - 395023";

const MAP_QUERY = encodeURIComponent(ADDRESS_MAP);
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

const Contact = () => {
  const contactInfo = [
    {
      Icon: FiPhone,
      title: "Phone",
      details: ["+91 8401012989"],
      action: "Call us anytime",
      hrefs: ["tel:+91 8401012989"],
    },
    {
      Icon: FaWhatsapp,
      title: "WhatsApp",
      details: ["+91 7486933410"],
      action: "Chat with us on WhatsApp",
      hrefs: ["https://wa.me/917486933410"],
    },
    {
      Icon: FiMapPin,
      title: "Address",
      details: [
        "Shop No.B-1/6, Aakash Prithvi",
        "Vadod Gam Road, Bhestan, Surat - 395023",
      ],
      action: "Visit our office",
      hrefs: [],
    },
    {
      Icon: FiClock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      action: "24/7 Emergency Service",
      hrefs: [],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">

      {/* Hero Component */}
      <Hero
        title="Contact Us"
        subtitle="Reach out for service requests, quotes, or general enquiries — we're here to help across Surat and nearby cities."
      />

      {/* Main content */}
      <main className="flex-1">
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-3">

              {/* Left: Contact cards */}
              <div className="lg:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  {contactInfo.map((info, i) => {
                    const Icon = info.Icon;
                    return (
                      <article
                        key={i}
                        className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-[#0f4f7a]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#1f71b4] text-white">
                            <Icon className="h-6 w-6" />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900">{info.title}</h3>
                            <div className="mt-2 text-sm text-slate-600 space-y-1">
                              {info.details.map((d, idx) =>
                                info.hrefs && info.hrefs[idx] ? (
                                  <a key={idx} href={info.hrefs[idx]} className="inline-block hover:underline">
                                    {d}
                                  </a>
                                ) : (
                                  <p key={idx}>{d}</p>
                                )
                              )}
                            </div>
                            <p className="mt-3 text-xs font-medium text-[#0f4f7a]">{info.action}</p>
                          </div>
                        </div>

                        <span className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#1f71b4]/5 blur-2xl pointer-events-none" />
                      </article>
                    );
                  })}
                </div>

                {/* Service Areas */}
                <div className="mt-8 rounded-2xl border border-slate-100 bg-[#f8fbff] p-6">
                  <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Service Coverage Areas</h4>
                      <p className="text-sm text-slate-600">
                        We provide AC services across Surat and nearby regions.
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          { name: "Vesu", focus: false },
                          { name: "Adajan", focus: false },
                          { name: "Pandesara", focus: false },
                          { name: "Bhestan", focus: false },
                          { name: "Piplod", focus: false },
                          { name: "Varachha", focus: false },
                          { name: "Pal Rakh", focus: false },
                          { name: "Citylight", focus: false },
                          { name: "Kamrej", focus: false },
                          { name: "Across Surat", focus: true },
      
                        ].map((area, idx) => (
                          <span
                            key={idx}
                            className={`rounded-full px-3 py-1 text-sm shadow-sm border
                              ${
                                area.focus
                                  ? "bg-[#1f71b4] text-white border-[#1f71b4]" // highlighted
                                  : "bg-white text-slate-700 border-slate-100" // normal
                              }
                            `}
                          >
                            {area.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <a
                        href={DIRECTIONS_URL}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#1f71b4] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 transition"
                      >
                        Visit Office
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side map */}
              <aside className="lg:col-span-1">
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                  <div className="p-5 bg-gradient-to-b from:white to-[#f3fbff]">
                    <h5 className="font-semibold text-slate-900">Our Surat Office</h5>
                    <p className="mt-2 text-sm text-slate-600">{ADDRESS_DISPLAY}</p>

                    <div className="mt-4 flex gap-2">
                      <a
                        href={DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-[#1f71b4] px-3 py-2 text-sm font-medium bg-[#1f71b4]/10 text-[#1f71b4] hover:bg-[#1f71b4] hover:text-white transition"
                      >
                        <FiMapPin className="h-4 w-4" />
                        Directions
                      </a>

                      <a
                        href="tel:+918401012989"
                        className="inline-flex items-center gap-2 rounded-md bg-[#1f71b4] px-3 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 transition"
                      >
                        <FiPhone className="h-4 w-4" />
                        Call
                      </a>
                    </div>
                  </div>

                  <div className="w-full h-[300px] sm:h-[380px]">
                    <iframe
                      title="Surat Office Location"
                      src={MAP_EMBED}
                      className="w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;

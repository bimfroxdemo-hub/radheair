// ServicePartners.jsx
import React from "react";

const brands = [
  { name: "Mitsubishi Electric", logo: "/logos/me01.png" },
  { name: "General", logo: "/logos/general1.png" },
  { name: "Bluestar", logo: "/logos/bluestar.1.png" },
  { name: "Samsung", logo: "/logos/sam1.png" },
  { name: "Daikin", logo: "/logos/daikin01.png" },
  { name: "Panasonic", logo: "/logos/panasonic01.png" },
  { name: "Voltas", logo: "/logos/voltas.jpeg" },
  { name: "Lloyd", logo: "/logos/lloyd.jpg" },
  { name: "Hitachi", logo: "/logos/hitachi.jpg" },
  { name: "Carrier", logo: "/logos/carrier01.png" },
  { name: "Onida", logo: "/logos/onida.jpeg" },
  { name: "Godrej", logo: "/logos/godrej.jpeg" },
  { name: "LG", logo: "/logos/lg.jpg" },
  { name: "Videocon", logo: "/logos/videocon.jpeg" },
];

export default function ServicePartners() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h4 className="text-center text-2xl font-bold mb-4">Authorized Service Partners</h4>
        <p className="text-center text-slate-600 mb-6">Premium AC brands we support</p>

        <style>{`
          .marquee-wrap { overflow: hidden; position: relative; }
          .marquee-track { display: flex; width: max-content; align-items: center; gap: 2rem; }
          .marquee { display: inline-block; will-change: transform; animation: marquee-left 18s linear infinite; }
          .marquee:hover { animation-play-state: paused; }
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="marquee-wrap">
          <div className="marquee">
            <div className="marquee-track">
              {brands.map((b, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md flex items-center justify-center p-5 transition-transform duration-300 hover:scale-110 rounded-4xl"
                  style={{ height: "110px", width: "140px" }}
                >
                  <img src={b.logo} alt={b.name} className="h-20 w-auto object-contain" />
                </div>
              ))}

              {/* duplicate for infinite scroll */}
              {brands.map((b, i) => (
                <div
                  key={`copy-${i}`}
                  className="bg-white shadow-md flex items-center justify-center p-5 transition-transform duration-300 hover:scale-110 rounded-4xl"
                  style={{ height: "110px", width: "140px" }}
                >
                  <img src={b.logo} alt={`${b.name}-copy`} className="h-20 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

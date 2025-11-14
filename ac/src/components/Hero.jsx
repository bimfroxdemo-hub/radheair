import React from "react";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{title}</h2>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;

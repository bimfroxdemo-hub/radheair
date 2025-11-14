import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import Filter from "../filter/Filter";

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      image: "/Images/d.png",
      rating: "4.5 (234)",
      brand: "Daikin",
      model: "1.5 Ton Split AC",
      type: "Split",
      capacity: "1.5 Ton",
      cooling: "5200W",
      power: "1600W",
      star: "5 Star Rating",
      compressor: "Inverter Compressor",
      warranty: "3 Year Warranty",
      installation: "Free Installation",
  
    },
    {
      id: 2,
      image: "/Images/lg.png",
      rating: "4.4 (210)",
      brand: "LG",
      model: "Dual Inverter 1.5 Ton AC",
      type: "Split",
      capacity: "1.5 Ton",
      cooling: "5100W",
      power: "1550W",
      star: "5 Star Rating",
      compressor: "Dual Rotary",
      warranty: "2 Year Warranty",
      installation: "Free Installation",
      
    },
    {
      id: 3,
      image: "/Images/p.png",
      rating: "4.3 (199)",
      brand: "Panasonic",
      model: "1.5 Ton Smart AC",
      type: "Split",
      capacity: "1.5 Ton",
      cooling: "5000W",
      power: "1500W",
      star: "4 Star Rating",
      compressor: "Inverter",
      warranty: "3 Year Warranty",
      installation: "Free Installation",

    },
    {
      id: 4,
      image: "/Images/voltas.png",
      rating: "4.2 (180)",
      brand: "Voltas",
      model: "1.4 Ton AC",
      type: "Split",
      capacity: "1.4 Ton",
      cooling: "4800W",
      power: "1400W",
      star: "3 Star Rating",
      compressor: "Copper Condenser",
      warranty: "1 Year Warranty",
      installation: "Free Installation",
    
    },
    {
      id: 5,
      image: "/Images/s.png",
      rating: "4.6 (310)",
      brand: "Samsung",
      model: "Wind-Free 1.5 Ton AC",
      type: "Split",
      capacity: "1.5 Ton",
      cooling: "5300W",
      power: "1650W",
      star: "5 Star Rating",
      compressor: "Digital Inverter",
      warranty: "3 Year Warranty",
      installation: "Free Installation",
    
    },
    {
      id: 6,
      image: "/Images/blue.png",
      rating: "4.1 (150)",
      brand: "Blue Star",
      model: "1.2 Ton AC",
      type: "Split",
      capacity: "1.2 Ton",
      cooling: "3900W",
      power: "1300W",
      star: "4 Star Rating",
      compressor: "Inverter Compressor",
      warranty: "2 Year Warranty",
      installation: "Free Installation",
     
    },
    {
      id: 7,
      image: "/Images/ll.png",
      rating: "4.4 (250)",
      brand: "Lloyd",
      model: "1.5 Ton Inverter AC",
      type: "Window",
      capacity: "1.5 Ton",
      cooling: "5100W",
      power: "1500W",
      star: "4 Star Rating",
      compressor: "Inverter",
      warranty: "3 Year Warranty",
      installation: "Free Installation",
      
    },
    {
      id: 8,
      image: "/Images/dd.png",
      rating: "4.3 (200)",
      brand: "Hitachi",
      model: "1.5 Ton AC",
      type: "Split",
      capacity: "1.5 Ton",
      cooling: "5000W",
      power: "1500W",
      star: "5 Star Rating",
      compressor: "Tropical Inverter",
      warranty: "2 Year Warranty",
      installation: "Free Installation",
      
    
    },

    {
      id: 9,
      image: "/Images/w.png",
      rating: "4.0 (140)",
      brand: "Whirlpool",
      model: "1.5 Ton AC",
      type: "Split",
      capacity: "1.5 Ton",
      cooling: "4700W",
      power: "1450W",
      star: "3 Star Rating",
      compressor: "IntelliSense Inverter",
      warranty: "1 Year Warranty",
      installation: "Free Installation",
     
    },
    {
      id: 10,
      image: "/Images/career.png",
      rating: "4.2 (170)",
      brand: "Carrier",
      model: "1.5 Ton AC",
      type: "Split",
      capacity: "1.5 Ton",
      cooling: "4950W",
      power: "1550W",
      star: "4 Star Rating",
      compressor: "Flexicool Inverter",
      warranty: "2 Year Warranty",
      installation: "Free Installation",
 
    },
    {
      id: 11,
      image: "/Images/h.png",
      rating: "4.3 (210)",
      brand: "Haier",
      model: "1.5 Ton AC",
      type: "Window",
      capacity: "1.5 Ton",
      cooling: "5050W",
      power: "1500W",
      star: "4 Star Rating",
      compressor: "Triple Inverter",
      warranty: "3 Year Warranty",
      installation: "Free Installation",

    },
    {
      id: 12,
      image: "/Images/g.png",
      rating: "4.1 (160)",
      brand: "Godrej",
      model: "1.5 Ton AC",
      type: "Window",
      capacity: "1.5 Ton",
      cooling: "4750W",
      power: "1450W",
      star: "3 Star Rating",
      compressor: "Inverter",
      warranty: "1 Year Warranty",
      installation: "Free Installation",
   
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredProducts = ProductsData.filter((item) => {
    return (
      (selectedBrand ? item.brand === selectedBrand : true) &&
      (selectedCapacity ? item.capacity === selectedCapacity : true) &&
      (selectedType ? item.type === selectedType : true)
    );
  });

  return (
    <>
      <div className="mt-5 flex flex-col justify-center items-center mb-6">
        <h1 className="font-bold text-3xl">Shop AC Units</h1>
        <p className="mt-2 text-gray-600">
          Browse our collection of premium air conditioners from top brands
        </p>
      </div>

      <Filter
        setBrand={setSelectedBrand}
        setCapacity={setSelectedCapacity}
        setAcType={setSelectedType}
      />

      <hr className="mb-6 mt-2" />

      {/* PRODUCT GRID */}
      <div
        className="
        grid 
        grid-cols-2 
        min-[380px]:grid-cols-3 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-4 p-3
      "
      >
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="
            bg-white rounded-xl shadow-sm overflow-hidden 
            transition-all duration-300 
            hover:shadow-xl hover:-translate-y-[2px]
            active:scale-95
          "
          >
            
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.image}
                className="w-full h-44 sm:h-48 md:h-52 object-cover object-center"
              />

              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                ⭐{" "}
                <span className="font-semibold">
                  {item.rating.split(" ")[0]}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-3">
              <span className="bg-blue-200 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full">
                {item.brand}
              </span>

              <h2 className="text-base font-bold mt-2 leading-tight">
                {item.brand} {item.model}
              </h2>

              {/* SPECS */}
              <div className="grid grid-cols-2 gap-2 text-[11px] mt-2">
                <p><strong>Type:</strong> {item.type}</p>
                <p><strong>Capacity:</strong> {item.capacity}</p>
                <p><strong>Cooling:</strong> {item.cooling}</p>
                <p><strong>Power:</strong> {item.power}</p>
              </div>

              <ul className="text-[11px] text-gray-700 space-y-1 mt-2">
                <li>• {item.star}</li>
                <li>• {item.compressor}</li>
                <li>• {item.warranty}</li>
              </ul>

              <hr className="my-2" />

              <p className="text-blue-600 text-lg font-bold">{item.price}</p>
              <p className="text-green-600 text-xs">{item.installation}</p>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/917486933410?text=Hi! I want to buy this AC: ${item.brand} ${item.model}`}
                target="_blank"
                className="
                w-full flex items-center justify-center gap-2 
                bg-green-600 text-white mt-2 py-2 rounded-lg font-semibold 
                hover:bg-green-700 active:scale-95 transition
                text-sm
              "
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

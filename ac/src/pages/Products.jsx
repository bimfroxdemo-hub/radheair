import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Filter from "../filter/Filter";
import Hero from "../components/Hero";

const Products = () => {
  const allProducts = [
    { id: 1, image: "/Images/d.png", rating: "4.5 (234)", brand: "Daikin", model: "1.5 Ton Split AC", type: "Split", capacity: "1.5 Ton", cooling: "5200W", power: "1600W", star: "5 Star Rating", compressor: "Inverter Compressor", warranty: "3 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 2, image: "/Images/lg.png", rating: "4.4 (210)", brand: "LG", model: "Dual Inverter 1.5 Ton AC", type: "Split", capacity: "1.5 Ton", cooling: "5100W", power: "1550W", star: "5 Star Rating", compressor: "Dual Rotary", warranty: "2 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 3, image: "/Images/p.png", rating: "4.3 (199)", brand: "Panasonic", model: "1.5 Ton Smart AC", type: "Split", capacity: "1.5 Ton", cooling: "5000W", power: "1500W", star: "4 Star Rating", compressor: "Inverter", warranty: "3 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 4, image: "/Images/voltas.png", rating: "4.2 (180)", brand: "Voltas", model: "1.4 Ton AC", type: "Split", capacity: "1.4 Ton", cooling: "4800W", power: "1400W", star: "3 Star Rating", compressor: "Copper Condenser", warranty: "1 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 5, image: "/Images/s.png", rating: "4.6 (310)", brand: "Samsung", model: "Wind-Free 1.5 Ton AC", type: "Split", capacity: "1.5 Ton", cooling: "5300W", power: "1650W", star: "5 Star Rating", compressor: "Digital Inverter", warranty: "3 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 6, image: "/Images/blue.png", rating: "4.1 (150)", brand: "Blue Star", model: "1.2 Ton AC", type: "Split", capacity: "1.2 Ton", cooling: "3900W", power: "1300W", star: "4 Star Rating", compressor: "Inverter Compressor", warranty: "2 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 7, image: "/Images/ll.png", rating: "4.4 (250)", brand: "Lloyd", model: "1.5 Ton Inverter AC", type: "Window", capacity: "1.5 Ton", cooling: "5100W", power: "1500W", star: "4 Star Rating", compressor: "Inverter", warranty: "3 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 8, image: "/Images/dd.png", rating: "4.3 (200)", brand: "Hitachi", model: "1.5 Ton AC", type: "Split", capacity: "1.5 Ton", cooling: "5000W", power: "1500W", star: "5 Star Rating", compressor: "Tropical Inverter", warranty: "2 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 9, image: "/Images/w.png", rating: "4.0 (140)", brand: "Whirlpool", model: "1.5 Ton AC", type: "Split", capacity: "1.5 Ton", cooling: "4700W", power: "1450W", star: "3 Star Rating", compressor: "IntelliSense Inverter", warranty: "1 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 10, image: "/Images/career.png", rating: "4.2 (170)", brand: "Carrier", model: "1.5 Ton AC", type: "Split", capacity: "1.5 Ton", cooling: "4950W", power: "1550W", star: "4 Star Rating", compressor: "Flexicool Inverter", warranty: "2 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 11, image: "/Images/h.png", rating: "4.3 (210)", brand: "Haier", model: "1.5 Ton AC", type: "Window", capacity: "1.5 Ton", cooling: "5050W", power: "1500W", star: "4 Star Rating", compressor: "Triple Inverter", warranty: "3 Year Warranty", installation: "Free Installation", price: "Contact for price" },
    { id: 12, image: "/Images/g.png", rating: "4.1 (160)", brand: "Godrej", model: "1.5 Ton AC", type: "Window", capacity: "1.5 Ton", cooling: "4750W", power: "1450W", star: "3 Star Rating", compressor: "Inverter", warranty: "1 Year Warranty", installation: "Free Installation", price: "Contact for price" },
  ];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // responsive & pagination state
  const [isLarge, setIsLarge] = useState(() => typeof window !== "undefined" ? window.innerWidth >= 1024 : false);
  const [currentPage, setCurrentPage] = useState(1);

  // first page count: 8 on lg+, otherwise 6
  const firstPageCount = isLarge ? 8 : 6;
  // subsequent pages show this many items each
  const otherPageCount = 6;

  // handle resize
  useEffect(() => {
    const onResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filteredProducts = allProducts.filter((item) => {
    return (
      (selectedBrand ? item.brand === selectedBrand : true) &&
      (selectedCapacity ? item.capacity === selectedCapacity : true) &&
      (selectedType ? item.type === selectedType : true)
    );
  });

  // reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrand, selectedCapacity, selectedType]);

  const totalItems = filteredProducts.length;

  // calculate total pages: 1 for first page + pages for remaining items
  const remainingAfterFirst = Math.max(0, totalItems - firstPageCount);
  const extraPages = remainingAfterFirst > 0 ? Math.ceil(remainingAfterFirst / otherPageCount) : 0;
  const totalPages = 1 + extraPages;

  // ensure currentPage bounds
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
    if (currentPage < 1) setCurrentPage(1);
  }, [currentPage, totalPages]);

  // compute slice indices depending on page
  let startIdx = 0;
  let endIdx = 0;
  if (currentPage === 1) {
    startIdx = 0;
    endIdx = Math.min(firstPageCount, totalItems);
  } else {
    const offset = firstPageCount + (currentPage - 2) * otherPageCount;
    startIdx = offset;
    endIdx = Math.min(offset + otherPageCount, totalItems);
  }

  const paginatedProducts = filteredProducts.slice(startIdx, endIdx);

  const goToPage = (n) => setCurrentPage(n);
  const prevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
  const nextPage = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="min-h-screen bg-gray-50 mb-5 ">
      <Hero title={"Shop AC Units"} subtitle={"Browse our collection of premium air conditioners from top brands."} />

      <div className="max-w-7xl mx-auto px-4">
        <Filter setBrand={setSelectedBrand} setCapacity={setSelectedCapacity} setAcType={setSelectedType} />

        <hr className="my-6 border-gray-200" />

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl">
              <div className="relative">
                <img src={item.image} alt={`${item.brand} ${item.model}`} className="w-full h-52 object-cover object-center" />

                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="#1f71b4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.428 2.614c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.585 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                  <span className="text-[#1f71b4]">{item.rating.split(" ")[0]}</span>
                </div>

                <div className="absolute top-3 right-3 bg-[#1f71b4] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {item.star}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#e6f2fb] text-[#1f71b4]">{item.brand}</span>

                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-800">{item.brand} {item.model}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.type} • {item.capacity}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[13px] mt-3 text-gray-600">
                  <div>
                    <p className="font-medium text-gray-800">Cooling</p>
                    <p className="text-sm">{item.cooling}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Power</p>
                    <p className="text-sm">{item.power}</p>
                  </div>
                </div>

                <ul className="mt-3 text-sm text-gray-700 space-y-1">
                  <li>• {item.compressor}</li>
                  <li>• {item.warranty}</li>
                  <li>• {item.installation}</li>
                </ul>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-[#1f71b4]">{item.price}</p>
                    <p className="text-xs text-green-600">{item.installation}</p>
                  </div>

                  <a
                    href={`https://wa.me/917486933410?text=${encodeURIComponent(`Hi! I'm interested in this AC: ${item.brand} ${item.model} (ID: ${item.id})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1f71b4] text-white font-semibold shadow-md hover:opacity-95 transition"
                    aria-label={`Contact about ${item.brand} ${item.model} on WhatsApp`}
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span className="text-sm">Enquire</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-600">No products found for selected filters.</p>
            <button onClick={() => { setSelectedBrand(""); setSelectedCapacity(""); setSelectedType(""); }} className="mt-4 inline-block px-4 py-2 rounded-md border border-[#1f71b4] text-[#1f71b4] font-semibold">
              Reset filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {startIdx + 1} - {Math.min(endIdx, totalItems)} of {totalItems}
            </div>

            <nav className="flex items-center gap-2" aria-label="Pagination">
              <button onClick={prevPage} disabled={currentPage === 1} className="px-3 py-1 rounded-md border disabled:opacity-50">Prev</button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button key={n} onClick={() => goToPage(n)} className={`px-3 py-1 rounded-md border ${n === currentPage ? "bg-[#1f71b4] text-white" : ""}`} aria-current={n === currentPage ? "page" : undefined}>
                    {n}
                  </button>
                ))}
              </div>

              <button onClick={nextPage} disabled={currentPage === totalPages} className="px-3 py-1 rounded-md border disabled:opacity-50">Next</button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

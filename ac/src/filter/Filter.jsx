import React from "react";
import { CiFilter } from "react-icons/ci";

const Filter = ({ setBrand, setCapacity, setAcType }) => {
  return (
    <div
      className="
        w-full bg-white rounded-xl p-4 md:p-5 
        border border-gray-100 shadow-sm
        font-poppins
      "
      style={{ fontSize: "14px" }}
    >
      <div className="flex flex-wrap items-center gap-4 justify-between">
        {/* Left: Title */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
            <CiFilter className="text-lg text-blue-600" />
          </div>
          <div>
            <p className="font-semibold text-[14px] text-slate-800">
              Filter products
            </p>
            <p className="text-[12px] text-slate-500">
              AC & Refrigerator by brand, capacity and type
            </p>
          </div>
        </div>

        {/* Right: Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-slate-500">Brand</label>
            <select
              className="
                rounded-md px-3 py-2 
                cursor-pointer 
                text-[13px]
                bg-gray-100
                border border-gray-300
                focus:outline-none
                focus:ring-2 focus:ring-blue-300
                min-w-[140px]
              "
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">All Brands</option>
              {/* AC + Fridge brands */}
              <option value="Daikin">Daikin</option>
              <option value="LG">LG</option>
              <option value="Panasonic">Panasonic</option>
              <option value="Voltas">Voltas</option>
              <option value="Samsung">Samsung</option>
              <option value="Blue Star">Blue Star</option>
              <option value="Carrier">Carrier</option>
              <option value="Haier">Haier</option>
              <option value="Lloyd">Lloyd</option>
              <option value="Whirlpool">Whirlpool</option>
              <option value="Godrej">Godrej</option>
              <option value="Hitachi">Hitachi</option>
              <option value="Bosch">Bosch</option>
              <option value="Voltas Beko">Voltas Beko</option>
            </select>
          </div>

          {/* Capacity */}
          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-slate-500">Capacity</label>
            <select
              className="
                rounded-md px-3 py-2 
                cursor-pointer 
                text-[13px]
                bg-gray-100
                border border-gray-300
                focus:outline-none
                focus:ring-2 focus:ring-blue-300
                min-w-[140px]
              "
              onChange={(e) => setCapacity(e.target.value)}
            >
              <option value="">All Capacities</option>

              {/* Must match exactly with your product.capacity values */}

              {/* AC (Tons) */}
              <optgroup label="AC (Tons)">
                <option value="1.2 Ton">1.2 Ton</option>
                <option value="1.4 Ton">1.4 Ton</option>
                <option value="1.5 Ton">1.5 Ton</option>
              </optgroup>

              {/* Refrigerators (Litres) */}
              <optgroup label="Refrigerator (Litres)">
                <option value="236L">236L</option>
                <option value="251L">251L</option>
                <option value="253L">253L</option>
                <option value="258L">258L</option>
                <option value="260L">260L</option>
                <option value="265L">265L</option>
                <option value="270L">270L</option>
                <option value="290L">290L</option>
              </optgroup>
            </select>
          </div>

          {/* Product Type */}
          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-slate-500">Product Type</label>
            <select
              className="
                rounded-md px-3 py-2 
                cursor-pointer 
                text-[13px]
                bg-gray-100
                border border-gray-300
                focus:outline-none
                focus:ring-2 focus:ring-blue-300
                min-w-[140px]
              "
              onChange={(e) => setAcType(e.target.value)}
            >
              <option value="">All Types</option>
              <optgroup label="AC">
                <option value="Split">Split AC</option>
                <option value="Window">Window AC</option>
              </optgroup>
              <optgroup label="Refrigerator">
                <option value="Refrigerator">Refrigerator</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

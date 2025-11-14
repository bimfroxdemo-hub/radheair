import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";

const Filter = ({ setBrand, setCapacity, setAcType }) => {
  return (
    <div
      className="
        w-full bg-white rounded-lg p-4  
        font-poppins 
      "
      style={{ fontSize: "14px" }}
    >
      <div className="flex items-center gap-3 flex-wrap">

        {/* Filter Title */}
        <div className="flex items-center gap-2">
          <CiFilter className="text-xl" />
          <p className="font-semibold text-[14px]">Filter by</p>
        </div>

        {/* Dropdowns Row */}
        <div className="flex items-center gap-3 flex-wrap">

          {/* AC Brand */}
          <select
            className="
              rounded-md px-3 py-2 
              cursor-pointer 
              text-[13px]
              bg-gray-100
              border border-gray-300
              focus:ring-2 focus:ring-blue-300
            "
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">AC Brand</option>
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
          </select>

          {/* Capacity */}
          <select
            className="
              rounded-md px-3 py-2 
              cursor-pointer 
              text-[13px]
              bg-gray-100
              border border-gray-300
              focus:ring-2 focus:ring-blue-300
            "
            onChange={(e) => setCapacity(e.target.value)}
          >
            <option value="">Capacity</option>
            <option value="1 Ton">1 Ton</option>
            <option value="1.2 Ton">1.2 Ton</option>
            <option value="1.4 Ton">1.4 Ton</option>
            <option value="1.5 Ton">1.5 Ton</option>
          </select>

          {/* AC Type */}
          <select
            className="
              rounded-md px-3 py-2 
              cursor-pointer 
              text-[13px]
              bg-gray-100
              border border-gray-300
              focus:ring-2 focus:ring-blue-300
            "
            onChange={(e) => setAcType(e.target.value)}
          >
            <option value="">AC Type</option>
            <option value="Split">Split</option>
            <option value="Window">Window</option>
          </select>

        </div>
      </div>
    </div>
  );
};

export default Filter;

import { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";

export function SuggestionField({ suggestions }) {
  return (
    <div className="absolute z-50 w-[567px] h-[200px] bg-white rounded-[24px]  top-[120px] left-[40px] text-[28px] bg-gradient-to-t from-[#FFFF] to-[#FFFF]">
      {suggestions.map((c, i) => (
        <div key={i} className="flex items-center mt-[5px]">
          <IoLocationOutline className="opacity-[20%] font-[1100] ml-[30px] mr-[20px]" />
          {c.city}, {c.country}
        </div>
      ))}
    </div>
  );
}

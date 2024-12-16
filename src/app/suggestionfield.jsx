import { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Page } from "./page";

export function SuggestionField({ suggestions, setSearch, handleNotFocus }) {
  return (
    <div className="absolute z-50 w-[567px] h-[200px] bg-white rounded-[24px]  top-[120px] left-[40px] text-[28px] bg-gradient-to-t from-[#FFFF] to-[#FFFF] drop-shadow-[10px_5px_25px_rgba(200,200,200,5)] ">
      {suggestions.map((c, i) => (
        <div
          key={i}
          onClick={() => {
            console.log("daragdlaaa");
            setSearch(c.city);
          }}
          className="flex items-center mt-[5px] z-50"
        >
          <IoLocationOutline className="opacity-[20%] font-[1100] ml-[30px] mr-[20px]" />
          {c.city}, {c.country}
        </div>
      ))}
    </div>
  );
}

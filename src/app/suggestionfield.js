import { useState, useEffect } from "react";

export function SuggestionField({ suggestions }) {
  return (
    <div className="absolute z-50 w-[567px] h-[200px] bg-white rounded-[24px]  top-[120px] left-[40px] ">
      {suggestions.map((c, i) => (
        <div key={i}>{c.city}</div>
      ))}
    </div>
  );
}

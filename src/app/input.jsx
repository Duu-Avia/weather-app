import { FaMagnifyingGlass } from "react-icons/fa6";
import { SuggestionField } from "./suggestionfield";
import { useEffect, useState } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export function InputFunction({ value, onChangeText, keyDown, setSearch }) {
  const [isFocused, setIsFocused] = useState(false);
  const handleOnFocus = () => {
    setIsFocused(true);
  };
  const handleNotFocus = () => {
    setIsFocused(false);
  };

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries`)
      .then((res) => res.json())
      .then((countryData) => {
        let arr = [];
        countryData.data.forEach((country) => {
          country.cities.forEach((cities) =>
            arr.push({
              city: cities.toLowerCase(),
              country: country.country.toLowerCase(),
            })
          );
        });

        setCities(arr);
      });
  }, []);

  const filteredCities = cities.filter((obj) => obj.city.includes(value));

  // console.log(value, cities.slice(0, 7), filteredCities.slice(0, 7));

  return (
    <div className={`${manrope.className} font-[600]`}>
      <div className="relative">
        <input
          onFocus={handleOnFocus}
          className="rounded-[48px] w-[567px] ml-[40px] py-[20px] pl-[50px] mt-[40px] text-black outline-none  absolute  z-50"
          type="text"
          placeholder="Search"
          onChange={onChangeText}
          value={value}
          onKeyDown={keyDown}
          onBlur={handleNotFocus}
        />
        <span>
          <FaMagnifyingGlass className="text-[black] opacity-[20%] top-[60px] left-[55px] size-6  absolute z-50" />
        </span>
        {isFocused && (
          <SuggestionField
            suggestions={filteredCities.slice(0, 4)}
            setSearch={setSearch}
            handleNotFocus={handleNotFocus}
          />
        )}
      </div>
    </div>
  );
}

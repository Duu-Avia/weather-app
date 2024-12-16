"use client";
import Image from "next/image";
import { DayCard } from "./daycard";
import { InputFunction } from "./input";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { SuggestionField } from "./suggestionfield";

const API_KEY = "b99c7cbce5bc40968d785001241312";
export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState({
    dayTemp: "",
    nightTemp: "",
    condition: "",
  });
  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
  const keyDown = (e) => {
    if (e.key === "Enter") {
      setCity(search);
    }
  };
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=b99c7cbce5bc40968d785001241312&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          nightTemp: data.forecast.forecastday[0].day.mintemp_c,
          dayTemp: data.forecast.forecastday[0].day.maxtemp_c,
          conditionDay: data.forecast.forecastday[0].day.condition.text,
          conditionNight: data.forecast.forecastday[0].hour[23].condition.text,
        });
      });
  }, [city]);

  return (
    <div
      id="container"
      className=" relative overflow-hidden w-[1600px]  mx-auto  bg-[#F3F4F6] flex"
    >
      <div id="halfCircle" className="absolute top-[525px] left-[723px] z-20">
        <Image src="/pictures/Ellipse25.png" width={74} height={0} alt="" />
      </div>
      <div className="absolute top-[430px] left-[635px] size-[340px] z-30 border-[#000000] border-[1px]   opacity-[10%]  rounded-full"></div>
      <div className="absolute top-[330px] left-[535px] size-[540px] z-30 border-[#000000] border-[1px]  opacity-[10%] rounded-full"></div>
      <div className="absolute top-[130px] left-[335px] size-[940px] z-30 border-[#000000] border-[1px]  opacity-[10%] rounded-full"></div>
      <div className="absolute top-[-100px] left-[130px] size-[1340px] z-30 border-[#000000] border-[1px]  opacity-[10%] rounded-full "></div>
      <div className="absolute top-[430px] left-[635px] size-[340px] z-30 border-[white] border-[1px]   opacity-[10%]  rounded-full"></div>
      <div className="absolute top-[330px] left-[535px] size-[540px] z-30 border-[white] border-[1px]  opacity-[10%] rounded-full"></div>
      <div className="absolute top-[130px] left-[335px] size-[940px] z-30 border-[white] border-[1px]  opacity-[10%] rounded-full"></div>
      <div className="absolute top-[-100px] left-[130px] size-[1340px] z-30 border-[white] border-[1px]  opacity-[10%] rounded-full "></div>
      <div className="size-[160px] rounded-[200px]  bg-[#F3F4F6] absolute z-10  top-0 left-0 right-0 bottom-0 m-auto">
        <div
          id="pineConeLogoContainer"
          className="flex gap-5 ml-[35px] mt-[35px]"
        >
          <div
            id="pineconeLogoLeft"
            className="w-[43.29px] h-[86px] bg-cover bg-[url('/pictures/leftside.png')] "
          ></div>
          <div
            id="pineconeLogoRight"
            className="w-[43.29px] h-[86px] bg-cover bg-[url('/pictures/rightside.png')] "
          ></div>
        </div>
      </div>
      <div id="left-container" className="w-[100%] h-[1200px] ">
        <InputFunction
          value={search}
          onChangeText={onChangeText}
          keyDown={keyDown}
          setSearch={setSearch}
        />
        <DayCard value="day" city={city} weather={weather} />
      </div>

      <div
        id="blackdiv"
        className="bg-[#0F141E] w-32 h-40 absolute z-0 top-[530px] left-[849px]"
      ></div>
      <div id="right-container" className=" w-[100%] relative">
        <div className="bg-[#0F141E] h-[550px] rounded-bl-[98px]"></div>

        <div className="bg-[#0F141E] h-[100px]  ml-[60px]">
          <DayCard value="night" city={city} weather={weather} />
        </div>
        <div className="bg-[#0F141E] rounded-tl-[98px] h-[550px]"></div>
        <div
          id="nightCircle"
          className="size-[128px] bg-[#6E72C9] rounded-full absolute top-[970px] left-[500px] "
        ></div>
        <div
          id="dayCircle"
          className="size-[128px] bg-[#FF8E27] rounded-full absolute top-[250px] left-[-660px] "
        >
          hi
        </div>
      </div>
    </div>
  );
}

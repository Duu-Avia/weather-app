"use client";
import Image from "next/image";
import { DayCard } from "./daycard";
import { InputFunction } from "./input";
export default function Home() {
  return (
    <div
      id="container"
      className=" relative w-[1600px] mx-auto  bg-[#F3F4F6] flex"
    >
      <div className="size-[160px] rounded-[200px]  bg-[#F3F4F6] absolute z-10  top-0 left-0 right-0 bottom-0 m-auto">
        <div className="flex gap-5 ml-[35px] mt-[35px]">
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
        <InputFunction />
        <DayCard value="day" />
      </div>
      <div
        id="blackdiv"
        className="bg-[#0F141E] w-32 h-40 absolute z-0 top-[530px] left-[849px]  "
      ></div>
      <div id="right-container" className=" w-[100%] relative">
        <div className="bg-[#0F141E] h-[550px] rounded-bl-[98px]"></div>
        <div className="bg-[#0F141E] h-[100px]  ml-[60px]">
          <DayCard />
        </div>
        <div className="bg-[#0F141E] rounded-tl-[98px] h-[550px]"></div>
      </div>
    </div>
  );
}

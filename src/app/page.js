"use client";
import Image from "next/image";
import { DayCard } from "./daycard";
export default function Home() {
  return (
    <div
      id="container"
      className=" relative w-[1600px] mx-auto  bg-[#F3F4F6] flex"
    >
      <div className="size-[245px] rounded-[120px]  bg-[#F3F4F6] absolute top-[478px] left-[679px]"></div>
      <div id="left" className="w-[100%] h-[1200px]">
        <DayCard />
      </div>
      <div id="right" className=" w-[100%] ">
        <div className="bg-[#0F141E] h-[500px] rounded-bl-[80px]"></div>
        <div className="bg-[#0F141E] h-[200px]  ml-[60px]"></div>
        <div className="bg-[#0F141E] rounded-tl-[80px] h-[500px]"></div>
      </div>
    </div>
  );
}

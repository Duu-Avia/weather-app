import Image from "next/image";
import { InputFunction } from "./input";
import { CiHome } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

export function DayCard({ className, value }) {
  const weatherIcon = "/pictures/DayCloudy.png";
  const dayCard = "bg-white";
  const nightCard = "bg-gradient-to-b from-[#1F2937] to-[#11182700]";
  const cityNameDay = "text-[#FF8E27]";
  const brightClearDayColor = "text-[#FF8E27]";
  const brightClearText = value == "night" ? "Clear" : "Bright";
  const brightClearColor =
    value == "night" ? "text-[#777CCE]" : brightClearDayColor;
  const cityNameColor = value == "night" ? "text-[#FFFF]" : cityNameDay;
  const cardBackgroundColor = value == "night" ? nightCard : dayCard;
  return (
    <div
      id="dayCard"
      className={`rounded-[50px] w-[18vw] h-[70vh] ${cardBackgroundColor} ml-auto mr-auto mt-[150px] ${className}`}
    >
      <div
        id="date"
        className="pt-[56px] text-[1.125rem] text-[#9CA3AF] ml-[40px]"
      >
        September 10, 2024
      </div>
      <div
        id="cityName"
        className={`text-[3rem] ${cityNameColor} font-[800] ml-[40px]`}
      >
        Krakov
      </div>
      <div id="weatherIcon" className="flex justify-center ">
        <Image src={weatherIcon} width={200} height={200} alt="" />
      </div>
      <div
        id="temperature"
        className="text-[9rem] bg-gradient-to-t from-[#111827] to-[#6B7280] text-transparent bg-clip-text font-extrabold ml-[48px]"
      >
        26°
      </div>
      <div className={`text-[1.5rem] font-[800] ${brightClearColor} ml-[48px]`}>
        {brightClearText}
      </div>
      <div id="footerIcons" className="flex justify-center gap-14 mt-[48px]">
        <CiHome className="" />
        <SlLocationPin />
        <FaRegHeart />
        <IoMdPerson />
      </div>
    </div>
  );
}

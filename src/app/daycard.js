import Image from "next/image";
import { InputFunction } from "./input";
import { CiHome } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";


export function DayCard({ className, value }) {
  const weatherImageDay = "/pictures/DayCloudy.png";
  const weatherImageNight = "/pictures/NightMoon.png"
  const dayCard = "bg-white";
  const nightCard = "bg-gradient-to-b from-[#1F2937] to-[#11182700]";
  const cityNameDay = "text-[#FF8E27]";
  const brightClearDayColor = "text-[#FF8E27]";
  const weatherImage = value == "night" ? weatherImageNight: weatherImageDay 
  const brightClearText = value == "night" ? "Clear" : "Bright";
  const brightClearColor = value == "night" ? "text-[#777CCE]" : brightClearDayColor;
  const cityNameColor = value == "night" ? "text-[#FFFF]" : cityNameDay;
  const cardBackgroundColor = value == "night" ? nightCard : dayCard;
  return (
    <div id="dayCard" className={`rounded-[50px] w-[414px] h-[832px] ${cardBackgroundColor}  absolute top-[200px] left-[190px] z-50 ${className}`} >
      <div id="date" className="pt-[56px] text-[1.125rem] text-[#9CA3AF] ml-[40px]">
        September 10, 2024
      </div>
      <div id="cityName"className={`text-[3rem] ${cityNameColor} font-[800] ml-[40px]`}>
        Krakov
      </div>
      <div id="weatherImage" className="flex justify-center ">
        <Image className="shadow-[0_10px_60px_10px_rgba(150,150,150,0.3)] rounded-full" src={weatherImage} width={200} height={200} alt="" />
      </div>
      <div id="temperature" className="text-[9rem] bg-gradient-to-t from-[#111827] to-[#6B7280] text-transparent bg-clip-text font-extrabold ml-[48px]" >
        26°
      </div>
      <div className={`text-[1.5rem] font-[800] ${brightClearColor} ml-[48px]`}>
        {brightClearText}
      </div>
      <div id="footerIcons" className="flex justify-center gap-14 mt-[100px]">
        <CiHome className="size-[32px] text-[#D1D5DB]" />
        <SlLocationPin className="size-[32px] text-[#D1D5DB]" />
        <FaRegHeart className="size-[32px] text-[#D1D5DB]" />
        <IoMdPerson  className="size-[32px] text-[#D1D5DB]"/>
      </div>
    </div>
  );
}

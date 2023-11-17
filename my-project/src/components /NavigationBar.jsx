import React from "react";
import Logo from "./../assets/Logo.png";
import { useState } from "react";
import Arrow from "./../assets/arrow.svg"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
} from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Analytics",
    icon: BarChart2,
  },
  {
    name: "Transcations",
    icon: ArrowRightLeft,
  },
  {
    name: "HelpCenter",
    icon: HelpCircleIcon,
  },
];

const variants = {
    isExpanded : {width: "20%"},
    nonExpanded : {width: "5%"}
}

function NavigationBar() {
  const [activeNavIndex, setactiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true)


  return (
    <motion.div 
     animate = {isExpanded ? "expanded" : "nonExpanded" }
     variants={variants}
     className=" px-2 flex flex-col border border-r-1 w-1/5 h-screen relative">
      <div className="flex mt-5 items-center space-x-3">
        <img src={Logo} />
        <span className={isExpanded ? "block" : "hidden"}>Money Tracker</span>
      </div>

      <div onClick={() => setIsExpanded(!setIsExpanded)} className="w-8 h-8 rounded-full bg-red-400 absolute top-11 -right-[16px] flex items-center justify-center">
      <img src={Arrow} className=" text-white" />
      </div>

      <div className=" mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <div
            key={index} 
            className={
              "flex space-x-3 p-2 rounded-md" +
              (activeNavIndex === index
                ? " bg-red-400 text-white font-semibold"
                : "")
            }
            onClick={() => setactiveNavIndex(index)}
          >
            <item.icon />
            <span className={isExpanded ? "block" : "hidden"}>{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default NavigationBar;

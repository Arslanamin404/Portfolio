import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaJs,
  FaBootstrap,
  FaPython,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiC, SiCplusplus } from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";

export const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:px-24 md:py-16">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center text-white mb-5">
        Technologies I Know
      </h1>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex flex-wrap justify-center items-center md:w-2/4 lg:w-2/5 gap-6 md:gap-8 md:px-[4.2rem] py-10">
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <FaHtml5 color="#e34f26" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <FaBootstrap color="#7F12F8" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <RiTailwindCssFill  color="#39BCF9" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <FaJs color="#F7E01D" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <FaReact color="#00D8FF" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <FaGithub color="#FFFFFF" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <FaPython color="#3674A7" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <SiC color="#014380" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <SiCplusplus color="#6599D3" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <FaJava color="#CA3134" size={50} className="hover:rotate-360 duration-300" />
          </span>
          <span className="bg-[#09090b] p-3 flex items-center rounded-2xl">
            <SiMysql color="#E48D02" size={50} className="hover:rotate-360 duration-300" />
          </span>
        </div>
      </div>
    </div>
  );
};

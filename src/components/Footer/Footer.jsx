import React from "react";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="Footer" className="text-white">
      <div className="flex justify-around  p-10 md:p-12 flex-col md:flex-row items-center gap-5">
        <div>
          <h1 className="text-2xl md:text-5xl font-extrabold uppercase">
            Let's Connect
          </h1>
        </div>
        <ul className="text-sm md:text-xl flex flex-col gap-3">
          <li>
            <a
              className="flex items-center justify-start hover:underline duration-300 gap-x-3"
              href="mailto:arslanamin.org@gmail.com"
            >
              <MdOutlineEmail size={20} />
              <p>arslanamin.org@gmail.com</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-start hover:underline duration-300 gap-x-3"
              href="www.linkedin.com/in/mohammad-arsalan-rather-27628722a" target="_blank"
            >
              <FaLinkedin size={20} />
              <p>www.linkedin.com/in/mohammad-arsalan-rather-27628722a</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-start hover:underline duration-300 gap-x-3"
              href="https://github.com/Arslanamin404" target="_blank"
            >
              <FaGithub size={20} />
              <p>https://github.com/Arslanamin404</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center bg-black/40">
        <p className="my-16 leading-relaxed px-8 md:px-16 md:text-xl md:w-2/4 text-center">
          Thank you for visiting my portfolio. I am always eager to collaborate
          on interesting projects and take on new challenges. Let’s build
          something amazing together.
        </p>
      </div>
      <footer className="border-t border-white">
        <div className="flex items-center justify-center py-10 flex-col gap-3">
          <p className="flex items-center justify-center gap-2 text-lg">
            <span className="font-bold">{currentYear}</span>{" "}
            <FaRegCopyright size={15} />
            <span className="font-medium tracking-wide">
              All rights reserved
            </span>
          </p>
          <p>
            <span className="text-lg">Made Possible by 🚀</span>
            <a href="#Contact" className="hover:text-orange-400 duration-300">
              <span className="underline tracking-wider font-bold ml-2 text-base md:text-xl">
                Arsalan Rather
              </span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

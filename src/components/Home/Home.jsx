import { FiExternalLink } from "react-icons/fi";
import avatar from "../../assets/avatar.png";
import ArsalanRatherResume from "../../assets/ArsalanRatherResume.pdf";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <div className="text-white w-full flex justify-between gap-x-10 items-center p-10 md:p-16">
      <div className="w-full md:pt-10">
        <h1 className="text-teal-400 text-3xl md:text-6xl font-bold flex leading tracking-tighter">
          <span className="mr-2 md:mr-5 text-white">Hi, I'm</span>
          <Typewriter
            words={["Arsalan Rather"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-sm md:text-2xl leading-snug tracking-tight mt-1 text-justify">
          I'm a passionate and dedicated developer with a focus on FullStack
          development. I'm honing my skills in web technologies, aiming to
          deliver efficient and innovative solutions to real world problems.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-x-5 mt-5 md:mt-2">
          <a
            href={ArsalanRatherResume}
            download="ArsalanRatherResume.pdf"
            className=" flex gap-2 items-center rounded-md md:mt-10 text-lg py-1 px-3 text-white hover:opacity-90 duration-300 active:scale-110  md:font-semibold tracking-widest bg-[#465697] border-2 border-[#465697] hover:bg-transparent hover:cursor-pointer"
          >
            <span>CV</span>
            <FiExternalLink />
          </a>
          <a
            href="mailto:arslanamin.org@gmail.com"
            className="inline-block md:mt-10 text-lg py-2 px-4 text-white hover:opacity-90 duration-300 active:scale-110 tracking-widest bg-black/25 hover:bg-transparent hover:cursor-pointer rounded-lg"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="w-full hidden md:block">
        <img src={avatar} alt="Arsalan Rather" />
      </div>
    </div>
  );
};

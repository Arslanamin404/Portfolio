import { Button } from "@material-tailwind/react";
export const ProjectCard = ({ ImageSrc, cardTitle, cardBody, cardLink }) => {
  return (
    <div className="p-1 md:p-5 flex flex-col w-full md:w-[30rem] bg-[#0c0e19] shadow-xl shadow-[#0f172a] rounded-2xl">
      <img src={ImageSrc} alt={cardTitle} className="p-4" />
      <h3 className="px-4 text-lg text-teal-300 md:text-2xl font-bold leading-normal">
        {cardTitle}
      </h3>
      <p className="px-4 my-3 md:text-lg">{cardBody}</p>
      <a href={cardLink} target="_blank" className="inline-block text-center">
        <Button className="my-3 w-[90%] hover:bg-gray-800 active:scale-105 duration-300 text-sm md:text-base tracking-wider">Live Preview</Button>
      </a>
    </div>
  );
};

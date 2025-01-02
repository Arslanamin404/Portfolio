import { Button } from "@material-tailwind/react";
export const ProjectCard = ({ ImageSrc, cardTitle, cardBody, cardLink,cardSourceCodeLink }) => {
  return (
    <div className="p-1 md:p-5 flex flex-col w-full md:w-[30rem] bg-[#0c0e19] shadow-xl shadow-[#0f172a] rounded-2xl">
      <img src={ImageSrc} alt={cardTitle} className="p-4" />
      <h3 className="px-4 text-lg text-teal-300 md:text-2xl font-bold leading-normal">
        {cardTitle}
      </h3>
      <p className="px-4 my-3 md:text-lg">{cardBody}</p>
      <div className="flex flex-col sm:flex-row gap-0 md:gap-5 justify-center items-center">
          <a 
            href={cardSourceCodeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-center w-full sm:w-auto"
          >
          <Button className="my-3 w-full sm:w-auto px-5 py-2 bg-blue-500 hover:bg-blue-700 active:scale-105 transition duration-300 text-sm md:text-base tracking-wider">
            Source Code
          </Button>
        </a>
        <a 
          href={cardLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block text-center w-full sm:w-auto"
        >
        <Button className="my-3 w-full sm:w-auto px-5 py-2 bg-gray-700 hover:bg-gray-800 active:scale-105 transition duration-300 text-sm md:text-base tracking-wider">
          Live Preview
        </Button>
      </a>
      </div>
    </div>
  );
};

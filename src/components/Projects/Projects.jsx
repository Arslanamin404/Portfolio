import React from "react";
import { ProjectCard } from "./ProjectCard";
import TaxiService from "../../assets/TaxiService.png";
import ExpenseTracker from "../../assets/ExpenseTracker.png";
import PrTracker from "../../assets/PrTracker.png";

export const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:px-24 md:py-14 text-white bg-black/30">
      <h1 className="text-2xl md:text-4xl text-white uppercase font-extrabold text-center">
        Projects
      </h1>
      <div className="py-12 md:px-8 flex items-center justify-center flex-wrap gap-10 md:gap-16">
        <ProjectCard
          ImageSrc={TaxiService}
          cardTitle={"Car Taxi Service Website"}
          cardBody={
            "A static website showcasing car taxi services, complete with a list of vehicles, pricing, and driver details. Responsive design with easy-to-modify components."
          }
          cardLink={"https://turbotaxis.netlify.app"}
        />
        <ProjectCard
          ImageSrc={PrTracker}
          cardTitle={"PR Tracker with Redux Toolkit"}
          cardBody={
            "A performance records tracker built using RTK to add, delete, and search exercise records. Includes state persistence using redux-persist."
          }
          cardLink={"https://strengthquest.netlify.app/"}
        />
        <ProjectCard
          ImageSrc={ExpenseTracker}
          cardTitle={"Expense Tracker with RTK"}
          cardBody={
            "A fully functional expense tracker app that helps users manage their daily expenses. It includes features like adding, editing, deleting, and searching transactions. Built using Redux Toolkit for efficient state management and integrated with redux-persist to retain data across sessions."
          }
          cardLink={"https://expensecanvas.netlify.app/"}
        />
      </div>
    </div>
  );
};

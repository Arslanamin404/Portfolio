import TaxiService from "../assets/TaxiService.png";
import ExpenseTracker from "../assets/ExpenseTracker.png";
import PrTracker from "../assets/PrTracker.png";
import ArTraders from "../assets/ArTraders.png";

export const projectsData = [
    {
        id: 1,
        imageSrc: TaxiService,
        title: "Car Taxi Service Website",
        description:
            "A static website showcasing car taxi services, complete with a list of vehicles, pricing, and driver details. Responsive design with easy-to-modify components.",
        link: "https://turbotaxis.netlify.app"
    },
    {
        id: 2,
        imageSrc: ArTraders,
        title: "JCB Spare Parts Website",
        description:
            "A static promotional website for a JCB spare parts retail shop, providing information on available products and contact details. Designed for ease of use and modification.",
        link: "https://artraders.netlify.app"
    },
    {
        id: 3,
        imageSrc: PrTracker,
        title: "PR Tracker with Redux Toolkit",
        description:
            "A performance records tracker built using RTK to add, delete, and search exercise records. Includes state persistence using redux-persist.",
        link: "https://strengthquest.netlify.app/"
    },
    {
        id: 4,
        imageSrc: ExpenseTracker,
        title: "Expense Tracker with RTK",
        description:
            "A fully functional expense tracker app that helps users manage their daily expenses. It includes features like adding, editing, deleting, and searching transactions. Built using Redux Toolkit for efficient state management and integrated with redux-persist to retain data across sessions.",
        link: "https://expensecanvas.netlify.app/"
    },

];

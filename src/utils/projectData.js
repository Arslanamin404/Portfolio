import TaxiService from "../assets/TaxiService.png";
import ExpenseTracker from "../assets/ExpenseTracker.png";
import PrTracker from "../assets/PrTracker.png";
import BlogWebApp from "../assets/BlogWebApp.png";
import UrlShortener from "../assets/urlShortener.png";

export const projectsData = [
  {
    id: 5,
    imageSrc: BlogWebApp,
    title: "Blog Web Application",
    description:
      "A feature-rich blogging platform built with the MEN stack (MongoDB, Express.js, Node.js). Users can create, edit, delete blogs, manage profiles, and upload profile pictures. Includes role-based access control and a responsive UI designed with Bootstrap.",
    link: "https://word-nest-blogwebapp.onrender.com",
    sourceCodeLink: "https://github.com/Arslanamin404/Word-Nest-BlogWebApp",
  },
  {
    id: 4,
    imageSrc: UrlShortener, // Replace with the appropriate image variable or path
    title: "URL Shortener Web App",
    description:
      "A robust URL shortener built with the MEN stack (MongoDB, Express.js, Node.js). Features include generating short URLs, redirecting to original links, and detailed analytics with visit history and total clicks. The app also tracks user-agent, IP address, and referrer information for each visit.",
    link: "https://zaplink-urlshortner.onrender.com",
    sourceCodeLink: "https://github.com/Arslanamin404/ZapLink_UrlShortner",
  },
  {
    id: 3,
    imageSrc: TaxiService,
    title: "Car Taxi Service Website",
    description:
      "A static website showcasing car taxi services, complete with a list of vehicles, pricing, and driver details. Responsive design with easy-to-modify components.",
    link: "https://turbotaxis.netlify.app",
    sourceCodeLink: "https://github.com/Arslanamin404/StaticTaxiService",
  },
  {
    id: 2,
    imageSrc: PrTracker,
    title: "PR Tracker with Redux Toolkit",
    description:
      "A performance records tracker built using RTK to add, delete, and search exercise records. Includes state persistence using redux-persist.",
    link: "https://strengthquest.netlify.app/",
    sourceCodeLink: "https://github.com/Arslanamin404/PR_Tracker",
  },
  {
    id: 1,
    imageSrc: ExpenseTracker,
    title: "Expense Tracker with RTK",
    description:
      "A fully functional expense tracker app that helps users manage their daily expenses. It includes features like adding, editing, deleting, and searching transactions. Built using Redux Toolkit for efficient state management and integrated with redux-persist to retain data across sessions.",
    link: "https://expensecanvas.netlify.app/",
    sourceCodeLink: "https://github.com/Arslanamin404/ExpenseTracker",
  },
];

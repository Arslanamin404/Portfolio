import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import SimpleNavbar from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Footer } from "./components/Footer/Footer";
export const App = () => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <div className="bg-[#111523]">
        <SimpleNavbar />
      </div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <Footer />
    </div>
  );
};

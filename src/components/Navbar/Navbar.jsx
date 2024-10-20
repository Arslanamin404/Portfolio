import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold md:text-base"
      >
        <a href="#About" className="flex items-center transition-all">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold md:text-base"
      >
        <a href="#Skills" className="flex items-center transition-all">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold md:text-base"
      >
        <a href="#Projects" className="flex items-center transition-all">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold md:text-base"
      >
        <a href="#Contact" className="flex items-center transition-all">
          Contact
        </a>
      </Typography>
    </ul>
  );
}

function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      variant="gradient"
      color="transparent"
      className=" mx-auto max-w-screen-xl px-6 md:py-4"
    >
      <div className="flex items-center justify-between text-gray-50 ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="uppercase mr-4 cursor-pointer py-1.5 md:text-xl"
        >
          Arsalan Rather
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default SimpleNavbar;

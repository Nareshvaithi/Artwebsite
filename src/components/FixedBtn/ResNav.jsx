import { useContext, useState } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import { NavLink } from "react-router-dom";

const ResNavbar = () => {
  const { menu } = useContext(ContextProvide);

  // State to manage background color
  const [bgColor, setBgColor] = useState("bg-black");

  // Hover handlers
  const handleHover = (color) => setBgColor(color);
  const handleLeave = () => setBgColor("bg-black");

  return (
    <div
      className={`w-full z-[99999] pt-32 h-screen px-3 lg:px-10 ${bgColor} fixed top-0 right-0 left-0 ${
        menu ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-1000 flex justify-center items-center`}
    >
      <div className={`${bgColor} transition-all duration-1000`}>
        <div className="flex justify-between gap-5 items-center pb-10">
          <NavLink
            onMouseEnter={() => handleHover("bg-red-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">1 </span>Home
          </NavLink>
          <NavLink
            onMouseEnter={() => handleHover("bg-blue-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">2 </span>About
          </NavLink>
        </div>
        <div className="flex justify-between gap-3 items-center pb-10">
          <NavLink
            onMouseEnter={() => handleHover("bg-green-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">3 </span>Artist
          </NavLink>
          <NavLink
            onMouseEnter={() => handleHover("bg-yellow-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">4 </span>Artwork
          </NavLink>
        </div>
        <div className="flex justify-between gap-3 items-center pb-10">
          <NavLink
            onMouseEnter={() => handleHover("bg-purple-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">5 </span>Gallery
          </NavLink>
          <NavLink
            onMouseEnter={() => handleHover("bg-pink-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">6 </span>Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ResNavbar;

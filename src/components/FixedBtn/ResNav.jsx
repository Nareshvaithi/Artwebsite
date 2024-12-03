import { useContext, useState } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import { NavLink } from "react-router-dom";
import { TfiUser } from "react-icons/tfi";
import { Link, Route,Routes, useNavigate } from 'react-router-dom';

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
      } transition-all duration-1000 flex flex-col lg:flex-row justify-center items-center`}
    >
      <div className="w-full">
      <div className={`${bgColor} transition-all duration-1000`}>
        <div className="flex justify-between gap-5 items-center pb-10">
          <NavLink
            onMouseEnter={() => handleHover("bg-red-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">1 </span>HOME
          </NavLink>
          <NavLink
            onMouseEnter={() => handleHover("bg-blue-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">2 </span>ABOUT
          </NavLink>
        </div>
        <div className="flex justify-between gap-3 items-center pb-10">
          <NavLink
            onMouseEnter={() => handleHover("bg-green-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">3 </span>ARTIST
          </NavLink>
          <NavLink
            onMouseEnter={() => handleHover("bg-yellow-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">4 </span>ARTWORK
          </NavLink>
        </div>
        <div className="flex justify-between items-center pb-10">
          <NavLink
            onMouseEnter={() => handleHover("bg-pink-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-9xl text-transparent hover:text-white transition-colors duration-500 font-Aboreto outline-text"
          >
            <span className="text-sm">5</span>CONTACT
          </NavLink>
        </div>
      </div>
      </div>
      <div className="bg-gray-400 h-screen w-[1px] hidden lg:block"></div>
      <div className="text-white w-[80px] flex">
        <Link to={'/admin'}><div className="mx-auto"><TfiUser size={30} /></div></Link>
      </div>
    </div>
  );
};

export default ResNavbar;

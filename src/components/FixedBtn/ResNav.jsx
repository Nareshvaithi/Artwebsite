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
      <div className={`${bgColor} transition-all duration-1000 px-0 lg:px-5`}>
        <div className="flex justify-between gap-5 items-center pb-10 lg:pb-20">
          <NavLink
          to={'/'}
            onMouseEnter={() => handleHover("bg-red-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-[160px] font-black text-transparent hover:text-white transition-colors duration-500 font-Roboto tracking-tighter outline-text"
          >
            <span className="text-sm tracking-widest">1 </span>HOME
          </NavLink>
          <NavLink
          to={'/artist'}
            onMouseEnter={() => handleHover("bg-green-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-[160px] font-black text-transparent hover:text-white transition-colors duration-500 font-Roboto tracking-tighter outline-text"
          >
            <span className="text-sm tracking-widest">3 </span>ARTIST
          </NavLink>
        </div>
        <div className="flex justify-between gap-3 items-center pb-10 lg:pb-20">
          <NavLink
          to={'/artwork'}
            onMouseEnter={() => handleHover("bg-yellow-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-[120px] font-black text-transparent hover:text-white transition-colors duration-500 font-Roboto tracking-tighter outline-text"
          >
            <span className="text-sm tracking-widest">4 </span>ARTWORK
          </NavLink>
          <NavLink
          to={'/short'}
            onMouseEnter={() => handleHover("bg-yellow-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-[120px] text-transparent font-black hover:text-white transition-colors duration-500 font-Roboto outline-text tracking-tighter"
          >
            <span className="text-sm tracking-widest">5 </span>SHORTS
          </NavLink>
        </div>
        <div className="flex justify-between items-center pb-10 lg:pb-20">
          <NavLink
          to={'/contact'}
            onMouseEnter={() => handleHover("bg-pink-500")}
            onMouseLeave={handleLeave}
            className="text-3xl lg:text-[100px] text-transparent font-black hover:text-white transition-colors duration-500 font-Roboto outline-text tracking-tighter"
          >
            <span className="text-sm tracking-widest">6 </span>CONTACT
          </NavLink>
        </div>
      </div>
      </div>
      <div className="bg-gray-400 h-screen w-[1px] hidden lg:block"></div>
      <div className="text-white w-[80px] h-full flex flex-col justify-start items-center">
        <div className="flex w-full justify-center items-center h-full">
          <Link onClick={()=>window.scrollTo(0,0)} to={'/admin'}><TfiUser size={30} /></Link>
        </div>
      </div>
    </div>
  );
};

export default ResNavbar;

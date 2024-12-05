import React, { useState,useContext } from "react";
import { RxHome } from "react-icons/rx";
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { PiUserSquareFill } from "react-icons/pi";
import { RiHomeWifiLine } from "react-icons/ri";
import { BsSignIntersectionSide } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import AdminHome from "./AdminHome";
import ImagesAdmin from "./ImagesAdmin";
import VideosAdmin from "./VideosAdmin";
import ContactAdmin from "./ContactAdmin";
import { TfiDashboard } from "react-icons/tfi";
import { ContextProvide } from "../../ContextAPI/CreateContext";


function AdminNav() {
  const {display,setDisplay}=useContext(ContextProvide);
  const {addButton,setAddButton}=useContext(ContextProvide);

  return (
    <>
      <section className="fixed left-0 right-0 z-10">
        <div className="flex">
          <div className="bg-[#2c3437] p-4 text-center font-bold w-2/12">
            <h2>
              <span className="text-white font-Roboto">ART</span>{" "}
              <span className="text-green-800 font-Roboto">ADMIN</span>
            </h2>
          </div>
          <div className="bg-[#293d55] py-4  text-center font-bold pr-10 w-10/12">
            <div className="flex justify-end space-x-6">
              <RxHome className=" text-white text-2xl" />
              <GrUserAdmin className=" text-white text-2xl" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex bg-[#009a8a] px-10 py-4 gap-4 font-Roboto w-2/12">
            <div>
              <PiUserSquareFill className="text-6xl" />
            </div>
            <div className="mt-1">
              <p>Welcome</p>
              <p className="text-sm text-[#9ca3a9]">ADMIN</p>
            </div>
          </div>
          <div className="flex items-center  gap-5 border border-b-2 px-10  w-10/12 bg-white">
            <div className="w-11/12 flex gap-2 items-center  ">
              <TfiDashboard className="text-6xl text-[#009a8a]" />
              <div className="">
                <p className="text-lg text-[#009a8a]">Dashboard</p>
                <p className="text-sm">Dashboard Features</p>
              </div>
            </div>
            <div>
              <p onClick={()=>setDisplay(true)}  className={`${addButton ? "block": "hidden"} py-2 px-6 rounded-xl bg-[#4eb19d] text-center text-white`}>
                +Add
              </p>
            </div>
            <div className="">
              <Link to={"/"}>
                <span className="px-1">Home</span>
              </Link>
              <span>/</span>
              <Link to={"/admin"}>
                <span className="px-1">Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminNav;

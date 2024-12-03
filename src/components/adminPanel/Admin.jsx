import React, { useState } from "react";
import { RxHome } from "react-icons/rx";
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { PiUserSquareFill } from "react-icons/pi";
import { RiHomeWifiLine } from "react-icons/ri";
import { BsSignIntersectionSide } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import AdminHome from "./AdminHome";


function Admin() {
  const [display,setDisplay]=useState(false)
  

  return (
    <>
      <section>
        <div className="flex h-screen overflow-y-hidden">
          <div className="w-2/12">
            <div className="bg-[#2c3437] p-4 text-center font-bold">
              <h2>
                <span className="text-white font-Roboto">ART</span>{" "}
                <span className="text-green-800 font-Roboto">ADMIN</span>
              </h2>
            </div>

            <div className="flex bg-[#009a8a] px-10 py-4 gap-4 font-Roboto">
              <div>
                <PiUserSquareFill className="text-6xl" />
              </div>
              <div className="mt-1">
                <p>Welcome</p>
                <p className="text-sm text-[#9ca3a9]">ADMIN</p>
              </div>
            </div>

            <div className="bg-[#151716]  h-screen overflow-y-hidden">
              <ul className="text-[#9ca3a9] p-10">
                <li className="flex  items-center gap-4 text-lg">
                  <RiHomeWifiLine />
                  <p>Home</p>
                </li>
                <li className=" mt-8" onClick={()=>setDisplay(true)} onMouseLeave={()=>setDisplay(false)}>
                  <div>
                    <div className="flex items-center gap-4  text-lg">
                      <BsSignIntersectionSide />

                      <p>Artwork</p>
                    </div>
                    <div className={`${display ? "block" : "hidden"}`}>
                      <ul>
                        <li>Images</li>
                        <li>Shorts</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-4  text-lg  mt-8">
                  <RiContactsLine />

                  <p>Contact</p>
                </li>
                
              </ul> 
            </div>
          </div>
          <div className="w-10/12">
            <div className="bg-[#293d55] py-4  text-center font-bold pr-10">
              <div className="flex justify-end space-x-6">
                <RxHome className=" text-white text-2xl" />
                <GrUserAdmin className=" text-white text-2xl" />
              </div>
            </div>
            <div>
         <AdminHome />
          </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Admin;

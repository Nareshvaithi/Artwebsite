import React, { useState } from "react";
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

function AdminSidebar() {
      const [display, setDisplay] = useState(false);
      const [route, setRoute] = useState("home");
    
      return (
        <>
    
          <section className="fixed left-0 top-36 right-0">
            <div className="flex h-auto">
              <div className="w-2/12 overflow-y-hidden bg-[#151716] h-screen">
                
                  <ul className="text-[#9ca3a9] py-10 px-6">
                    <li
                      onClick={() => setRoute("home")}
                      className="flex  items-center gap-4 text-lg hover:bg-[#009a8a] py-2 px-4"
                    >
                      <RiHomeWifiLine />
                      <Link to={'/admin'}><p>Home</p></Link>
                    </li>
                    <li
                      className=" mt-4"
                      onClick={() => setDisplay(true)}
                      onMouseLeave={() => setDisplay(false)}
                    >
                      <div>
                        <div className="flex items-center gap-4  text-lg hover:bg-[#009a8a] py-2 px-4">
                          <BsSignIntersectionSide />
    
                          <p>Artwork</p>
                        </div>
    
                        <div className={`${display ? "block" : "hidden"}`}>
                          <ul className="px-4">
                            <Link to={'/admin/ImagesAdmin'}><li
                              className="mt-2 py-2 hover:bg-[#009a8a] px-2 "
                              onClick={() => setRoute("images")}
                            >
                              Images
                            </li></Link>
                            <Link to={'/admin/VideosAdmin'}><li
                              className="mt-2 py-2 hover:bg-[#009a8a] px-2 "
                              onClick={() => setRoute("videos")}
                            >
                              Shorts
                            </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li
                      onClick={() => setRoute("contact")}
                      className="flex items-center gap-4  text-lg mt-4  hover:bg-[#009a8a] py-2 px-4"
                    >
                      <RiContactsLine />
    
                      <Link to={'/admin/ContactAdmin'}><p>Contact</p></Link>
                    </li>
                  </ul>
              
              </div>
    
    
              {/* <div className="w-10/12 overflow-auto">
               
                <div className="py-20">
                  {route == "images" ? (
                    <ImagesAdmin />
                  ) : route == "videos" ? (
                    <VideosAdmin />
                  ) : route == "contact" ? (
                    <ContactAdmin />
                  ) : (
                    <AdminHome />
                  )}
                </div>
              </div> */}
            </div>
          </section>
        </>
      );
}

export default AdminSidebar
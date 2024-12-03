import React from "react";
import lionImage from '../../assets/home/lionBanner.jpg'
import { TfiDashboard } from "react-icons/tfi";

function AdminHome() {
  return (
    <>
      <section className=" border border-b-2">
        <div className="px-10 py-1 flex items-center">
          <div className="flex items-center gap-4 w-11/12">
            <TfiDashboard className="text-6xl text-[#009a8a]" />
            <div>
              <p className="text-lg text-[#009a8a]">Dashboard</p>
              <p className="text-sm">Dashboard Features</p>
            </div>
          </div>
          <div>
            <span className="px-1">Home</span>
            <span>/</span>
            <span className="px-1">Dashboard</span>
          </div>
        </div>
      </section>
      <section>
        <div className="flex  pl-10 items-center py-10">
          <div className=" w-3/12 py-[60px] mr-10 text-center bg-[#edb36a] text-[#fdfbfb]">
            Images
          </div>
          <div className=" w-3/12 py-[60px] mr-10 text-center bg-[#dc5653] text-[#fdfbfb]">
            videos
          </div>
          <div className=" w-3/12 py-[60px] mr-10 text-center bg-[#4eb19d] text-[#fdfbfb]">
            Blogs
          </div>
          <div className=" w-3/12 py-[60px] mr-10 text-center bg-[#007dbd] text-[#fdfbfb]">
            About
          </div>
        </div>
      </section>
      <section>
        <div className="flex h-full px-10 items-start">
          <div className=" h-full  p-10 w-3/12">
          <img src={lionImage} alt="" className="h-full"/>
          <p className="text-lg mt-2">Admin Name</p>
          <p className="text-sm">profession</p>
          </div>
          <div className=" h-full  p-10 w-8/12">
          <p className="font-bold">About</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            temporibus aperiam non ut, libero aliquam quos quas nemo
            reprehenderit odio tempore eligendi id sed vero quibusdam
            repellendus eveniet. Consectetur, velit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            temporibus aperiam non ut, libero aliquam quos quas nemo
            reprehenderit odio tempore eligendi id sed vero quibusdam
            repellendus eveniet. Consectetur, velit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            temporibus aperiam non ut, libero aliquam quos quas nemo
            reprehenderit odio tempore eligendi id sed vero quibusdam
            repellendus eveniet. Consectetur, velit.</p>

          </div>
        </div>
      </section>
    </>
  );
}

export default AdminHome;

import React, { useContext } from "react";
import lionImage from "../../assets/home/lionBanner.jpg";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import { FaImages } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";
import { TbLogs } from "react-icons/tb";
import { SiNordicsemiconductor } from "react-icons/si";

function AdminHome() {
  const { images, setImages } = useContext(ContextProvide);
  const { videos, setVideos } = useContext(ContextProvide);
  return (
    <>
      <section className="py-40 pl-52">
        <section>
          <div className="flex  pl-20 items-center py-10">
            <div className="w-3/12 py-[60px]  mr-10 bg-[#009a8a] ]">
            <div className="flex flex-wrap items-center px-10 gap-10 text-gray-50">
            <div>
                <FaImages className="text-3xl"/>
                <p className="font-MonaSans">Images</p>
              </div>
              <p className="tracking-wide font-Roboto font-bold text-6xl">
                {images.length}
              </p>
            </div>
             
            </div>
            <div className="w-3/12 py-[60px] text-gray-50 mr-10 bg-[#009a8a] ]">
            <div className="flex flex-wrap items-center px-10 gap-10">
            <div>
                <BiSolidVideos className="text-3xl"/>
                <p className="font-MonaSans">Videos</p>
              </div>
              <p className="tracking-wide font-Roboto font-bold text-6xl">
                {videos.length}
              </p>
            </div>
             
            </div>
            <div className="w-3/12 py-[60px]  mr-10 bg-[#009a8a] ]">
            <div className="flex flex-wrap items-center px-10 gap-10 text-gray-50">
            <div>
                <TbLogs className="text-3xl"/>
                <p className="font-MonaSans">Blogs</p>
              </div>
              <p className="tracking-wide font-Roboto font-bold text-6xl">
                0
              </p>
            </div>
             
            </div>
            <div className="w-3/12 py-[60px]  mr-10 bg-[#009a8a] ]">
            <div className="flex flex-wrap items-center px-10 gap-10 text-gray-50">
            <div>
                <SiNordicsemiconductor className="text-3xl"/>
                <p className="font-MonaSans">About</p>
              </div>
              <p className="tracking-wide font-Roboto font-bold text-6xl">
                0
              </p>
            </div>
             
            </div>
            {/* <div className=" w-3/12 py-[60px] mr-10 text-center  text-[#fdfbfb]">
              About
            </div> */}
          </div>
        </section>
        <section>
          <div className="flex h-full px-10 items-start">
            <div className=" h-full  p-10 w-3/12">
              <img src={lionImage} alt="" className="h-full" />
              <p className="text-xl mt-2">Augustine Samuel</p>
              <p className="text-sm">
                Embracing Creativity:an Amateur's Artistic Journey
              </p>
            </div>
            <div className=" h-full  p-10 w-8/12">
              <p className="font-bold">About</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                temporibus aperiam non ut, libero aliquam quos quas nemo
                reprehenderit odio tempore eligendi id sed vero quibusdam
                repellendus eveniet. Consectetur, velit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                temporibus aperiam non ut, libero aliquam quos quas nemo
                reprehenderit odio tempore eligendi id sed vero quibusdam
                repellendus eveniet. Consectetur, velit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                temporibus aperiam non ut, libero aliquam quos quas nemo
                reprehenderit odio tempore eligendi id sed vero quibusdam
                repellendus eveniet. Consectetur, velit.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default AdminHome;

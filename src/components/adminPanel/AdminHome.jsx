import React, { useContext } from "react";
import lionImage from '../../assets/home/lionBanner.jpg'
import { ContextProvide } from "../../ContextAPI/CreateContext";
function AdminHome() {
      const {images,setImages}=useContext(ContextProvide);
      const {videos,setVideos}=useContext(ContextProvide);
  return (
    <>
    <section className="py-40 pl-52">
      <section>
        <div className="flex  pl-20 items-center py-10">
          <div className=" w-3/12 py-[60px] mr-10 text-center bg-[#edb36a] text-[#fdfbfb]">
            {images.length}
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
          <p className="text-xl mt-2">Augustine Samuel</p>
          <p className="text-sm">Embracing Creativity:an Amateur's Artistic Journey</p>
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
      </section>
    </>
  );
}

export default AdminHome;

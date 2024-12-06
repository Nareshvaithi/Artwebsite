import React from "react";
import image1 from "../../assets/artists/rounded_1.jpg";
import { GrFormNextLink } from "react-icons/gr";
import { MdCalendarToday } from "react-icons/md";
import { SiTldraw } from "react-icons/si";
import { FaDrawPolygon } from "react-icons/fa6";

function AboutArtist() {
  return (
    <>
      <div className="flex flex-wrap lg:p-20 p-10">
        <div className="lg:w-4/12 lg:px-10">
          <div>
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="lg:w-8/12 w-full">
          <p className="mt-4 lg:mt-2 text-md font-Spectral">Augustine Samuel</p>
          <p className="mt-2 text-xl font-Spectral lg:w-96 leading-7">
            We are ThemeREC, a creative and dedicated group of individuals
          </p>
          <p className=" mt-4  border-b-black lg:w-10/12 font-Spectral leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
            mollitia ducimus neque consequuntur sapiente adipisci ab quisquam
            architecto vel, esse perspiciatis sint, nisi officiis omnis aliquam
            eos. At, ullam eaque!Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quam, mollitia ducimus neque consequuntur sapiente
            adipisci ab quisquam architecto vel, esse perspiciatis sint, nisi
            officiis omnis ullam eaque!Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quam, mollitia
          </p>
          <p className="w-10/12 bg-black h-[1px] mt-6"></p>
          <div className="flex flex-wrap mt-6 font-Spectral">
            <p className="w-6/12">
              <b>Funded</b>: 2024
            </p>
            <p className="w-6/12">
              <b>Location</b>: City, Country
            </p>
            <p className="w-6/12 mt-4">
              <b>CEO</b>: Augustine Samuel
            </p>
            <p className="w-6/12 mt-4">
              <b>Email</b>: contact@example.com
            </p>
          </div>
          <div className="flex items-center mt-10">
            <p className="font-Spectral text-lg">Read More</p>
            <GrFormNextLink />
          </div>
        </div>
        <div className="w-full mt-16">
          <div className="text-center">
            <p className="text-4xl w-12/12">What We Do?</p>
            <p className="w-20 bg-black h-[3px] mx-auto mt-5"></p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 lg:px-10 mt-20">
            <div className="mt-5 lg:mt-0">
              <MdCalendarToday className="text-5xl text-gray-400"/>
              <p className="text-2xl font-Spectral mt-4">Artworks</p>
              <p className="mt-4 leading-8 font-Spectral text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet asperiores saepe, iste tenetur ipsum alias harum, quos et beatae possimus quae incidunt laudantium </p>
            </div>
            <div className="mt-5 lg:mt-0">
            <SiTldraw className="text-5xl text-gray-400"/>
              <p className="text-2xl font-Spectral mt-4">Creativity</p>
              <p className="mt-4 leading-8 font-Spectral text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet asperiores saepe, iste tenetur ipsum alias harum, quos et beatae possimus quae incidunt laudantium .</p>
            </div>
            <div className="mt-5 lg:mt-0">
            <FaDrawPolygon className="text-5xl text-gray-400"/>
              <p className="text-2xl font-Spectral mt-4">Drawing</p>
              <p className="mt-4 leading-8 font-Spectral text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet asperiores saepe, iste tenetur ipsum alias harum, quos et beatae possimus quae incidunt laudantium .</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutArtist;

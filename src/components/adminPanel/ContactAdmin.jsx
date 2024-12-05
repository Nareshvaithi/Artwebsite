import React from "react";
import img from "../../assets/file_upload/373247697_246989518306424_837879749933383715_n.jpg";

function ContactAdmin() {
  return (
    <>
      <div className="container pl-[300px] py-40 ">
        <div className="flex items-center py-4">
          <p className="text-sm pr-10 text-[#009a8a] font-semibold ">My profile</p>
          <div className="w-10/12">
          <p className="h-[1px] bg-zinc-200  shadow-sm"></p>
          </div>
        </div>
        <div className="pr-10">
          <div className="bg-slate-50 mt-2 flex items-center gap-6 px-10 py-2 shadow-md w-12/12 rounded-lg">
            <div className="w-1/12">
              <img src={img} className="w-24 h-24 rounded-full" alt="" />
            </div>
            <div className="w-11/12">
              <p className="font-Roboto text-sm text-[#009a8a]">
                Augustine Samuel
              </p>
              <p className="font-Roboto text-sm mt-1">Admin</p>
              <p className="font-Roboto text-sm mt-1">Artist</p>
            </div>
          </div>
        </div>
        <div className="pr-10 font-MonaSans">
          <div className="bg-slate-50 mt-6  px-10 py-2 shadow-md w-12/12 rounded-lg">
            <div className="w-full">
              <p className="text-[#009a8a] text-sm font-semibold">Personal Information</p>
              <p className="h-[1px] w-full bg-zinc-200 mt-4"></p>
            </div>
            <div className="flex flex-wrap font-MonaSans text-sm py-4">
              <div className="w-3/12">
                <p className="text-gray-400 font-MonaSans">First Name</p>
                <p className="mt-1">Augustine</p>
              </div>
              <div className="w-3/12">
                <p className="text-gray-400">Last Name</p>
                <p className="mt-1">Samuel</p>
              </div>
              <div className="w-6/12">
                <p className="text-gray-400">Date-of-Birth</p>
                <p className="mt-1">01/01/2025</p>
              </div>
              <div className="mt-8 w-3/12">
                <p className="text-gray-400">Email</p>
                <p className="mt-1">samplegmail@gmail.com</p>
              </div>
              <div className="mt-8 w-3/12">
                <p className="text-gray-400">Phone Number</p>
                <p className="mt-1">0123456789</p>
              </div>
              <div className="mt-8 w-6/12">
                <p className="text-gray-400">User Role</p>
                <p className="mt-1">Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-10 font-MonaSans">
          <div className="bg-slate-50 mt-6  px-10 py-2 shadow-md w-12/12 rounded-lg">
            <div className="w-full">
              <p className="text-[#009a8a] text-sm font-semibold">Address</p>
              <p className="h-[1px] w-full bg-zinc-200 mt-4"></p>
            </div>
            <div className="flex flex-wrap font-MonaSans text-sm py-4">
              <div className="w-3/12">
                <p className="text-gray-400 font-MonaSans">Country</p>
                <p className="mt-1">India</p>
              </div>
              <div className="w-3/12">
                <p className="text-gray-400">City</p>
                <p className="mt-1">Example</p>
              </div>
              <div className="w-6/12">
                <p className="text-gray-400">Postal Code</p>
                <p className="mt-1">123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactAdmin;

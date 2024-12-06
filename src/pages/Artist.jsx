
import React from "react";

const Artist = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f6f5f0] overflow-hidden">
      {/* Outer Circle */}
      <div className="relative w-[1200px] h-[1200px] border border-[#e2e7e8] rounded-full flex items-center overflow-hidden justify-center">
        {/* Circle 2 */}
        <div className="w-[1100px] h-[1100px] border border-[#dddfdf] rounded-full flex items-center justify-center overflow-hidden">
          {/* Circle 3 */}
          <div className="w-[1000px] h-[1000px] border border-[#d1eef5] rounded-full flex items-center justify-center overflow-hidden">
            {/* Inner Circle */}
            <div className="w-[900px] h-[900px] border border-[#bae7f3] rounded-full flex items-centre justify-center overflow-hidden">
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className=" mt-[300px]">
                <p className="text-sm font-Aboreto tracking-wider text-center">Represented Artists</p>
              <p className="mt-4 leading-normal text-[40px] text-center  font-Aboreto ">OUR ARTISTS CELEBRATE <span className="block">LIFE'S BEAUTY AND</span> <span className="block">CAPTURE THE ESSENCE OF</span> UNIVERSAL TRUTHS</p>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;

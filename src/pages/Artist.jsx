import React from "react";
import image1 from "../assets/artists/rounded_1.jpg";
import image2 from "../assets/artists/rounded_2.jpg";
import image3 from "../assets/artists/rounded_3.jpg";
import image4 from "../assets/artists/rounded_4.jpg";
import image5 from "../assets/artists/rounded_5.jpg";
import image6 from "../assets/artists/rounded_6.jpg";
import image7 from "../assets/artists/rounded_7.jpg";
import image8 from "../assets/artists/rounded_8.jpg";
import image9 from "../assets/artists/rounded_9.jpg";
import image10 from "../assets/artists/rounded_10.jpg";
import AboutArtist from "../components/about/AboutArtist";

const Artist = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen bg-[#f6f5f0] overflow-hidden">
        {/* Outer Circle */}
        <div className="relative w-[600px] h-[600px] lg:w-[1200px] lg:h-[1200px] border border-[#e2e7e8] rounded-full flex items-center  justify-center">
          {/* Circle 2 */}
          <div className="w-[550px] h-[550px] lg:w-[1100px] lg:h-[1100px] border border-[#dddfdf] rounded-full flex items-center justify-center overflow-hidden">
            {/* Circle 3 */}
            <div className="w-[500px] h-[500px] lg:w-[1000px] lg:h-[1000px] border border-[#d1eef5] rounded-full flex items-center justify-center overflow-hidden">
              {/* Inner Circle */}
              <div className="w-[450px] h-[450px] lg:w-[900px] lg:h-[900px] border border-[#bae7f3] rounded-full flex items-centre justify-around overflow-hidden">
                <div>
                  <div className="mt-10 lg:mt-36  flex justify-center gap-20 lg:gap-96">
                    <img
                      src={image1}
                      alt=""
                      className="animate-drift lg:w-24 lg:h-24 w-10 h-10 rounded-full"
                    />
                    <img
                      src={image2}
                      alt=""
                      className="animate-drift2 lg:w-36 lg:h-36 w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="lg:mt-10 flex items-center lg:justify-evenly gap-4  lg:gap-20">
                    <div className="mt-20">
                      <img
                        src={image3}
                        alt=""
                        className="animate-drift2 lg:w-20 lg:h-20 w-10 h-10 rounded-full"
                      />
                    </div>
                    <div className="mt-14 lg:mt-0">
                      <p className="lg:text-[15px] text-sm text-gray-500 font-Spectral tracking-wider text-center">
                        Represented Artists
                      </p>
                      <p className="lg:mt-4 mt-4 leading-normal text-lg lg:text-[40px] text-center  font-Aboreto ">
                        OUR ARTISTS CELEBRATE
                      </p>
                      <span className="block leading-normal  text-lg lg:text-[40px] text-center  font-Aboreto ">
                        LIFE'S BEAUTY AND
                      </span>
                      <span className="block leading-normal  text-lg lg:text-[40px] text-center  font-Aboreto ">
                        CAPTURE THE ESSENCE OF
                      </span>
                      <span className="block leading-normal  text-lg lg:text-[40px] text-center  font-Aboreto ">
                        UNIVERSAL TRUTHS
                      </span>
                    </div>

                    <div className="">
                      <img
                        src={image4}
                        alt=""
                        className="animate-drift w-10 h-10 lg:w-20 lg:h-20 rounded-full"
                      />
                    </div>
                  </div>
                  <div className=" mt-10 lg:mt-10 flex justify-center gap-32 lg:gap-96">
                    <img
                      src={image5}
                      alt=""
                      className="animate-drift2 w-10 h-10 lg:w-24 lg:h-24 rounded-full"
                    />
                    <img
                      src={image6}
                      alt=""
                      className="animate-drift w-10 h-10 lg:w-32 lg:h-32 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 right-40 lg:right-0 lg:top-80">
              <img
                src={image7}
                alt=""
                className="animate-drift w-10 h-10 lg:w-24 lg:h-24 rounded-full"
              />
            </div>
            <div className="absolute left-24 top-16 lg:left-10 lg:top-[750px]">
              <img
                src={image8}
                alt=""
                className="animate-drift w-16 h-16 lg:w-40 lg:h-40 rounded-full"
              />
            </div>
            <div className="absolute left-32 bottom-10 lg:top-80 lg:left-0">
              <img
                src={image9}
                alt=""
                className="animate-drift2 w-20 h-20 lg:w-48 lg:h-48 rounded-full"
              />
            </div>
            <div className="absolute bottom-14 right-20 lg:right-0 lg:bottom-72">
              <img
                src={image10}
                alt=""
                className="animate-drift w-24 h-24 lg:w-40 lg:h-40 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute top-96 left-1 lg:-rotate-90 lg:font-Aboreto lg:text-lg hidden lg:block">
        <p>ARTISTS</p>
      </div>

      <div>
        <AboutArtist />
      </div>
    </>
  );
};

export default Artist;

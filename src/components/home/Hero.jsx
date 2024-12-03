import { useContext } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import {NavLink} from "react-router-dom"
import Rellax from "rellax";
import { useEffect } from "react";
const Hero = () => {
    const { cursorEnter, cursorLeave } = useContext(ContextProvide) || {};

    useEffect(() => {
        const rellax = new Rellax('.rellax', {
      // Customize speed as needed
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false,
        });
    
        return () => {
          rellax.destroy();
        };
      }, []);
    return (
        <div className="relative z-[9999] w-full h-auto pt-36 px-3 lg:px-10 bg-no-repeat bg-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-top bg-no-repeat bg-cover opacity-70 herobanner"></div>
            
            <div className="relative bg-transparent">
                <div className="text-center flex justify-center bg-transparent">
                    <h1
                        onMouseEnter={cursorEnter || (() => {})}
                        onMouseLeave={cursorLeave || (() => {})}
                        className="font-Aboreto leading-normal w-fit text-4xl capitalize bg-transparent"
                        aria-label="Art is not just a form of expression but a way of life"
                    >
                        art is not just a form
                        <span className="block bg-transparent">of expression but a</span>
                        <span className="block bg-transparent">way of life</span>
                    </h1>
                </div>
                <div className="bg-transparent grid grid-cols-2 lg:grid-cols-2">
                    <div data-rellax-mobile-speed="4" data-rellax-speed="4" className="rellax group bg-transparent border border-gray-400 hover:border-red-400 rounded-full px-2 py-12 lg:py-16 h-fit w-fit mx-auto">
                        <NavLink onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-red-400 px-6 py-12 lg:py-14 rounded-full text-xl lg:text-3xl font-Aboreto"}>About</NavLink>
                    </div>
                    <div data-rellax-mobile-speed="2" data-rellax-speed="4" className="rellax group bg-transparent border border-gray-400 hover:border-green-400 rounded-full px-1 py-12 lg:py-16 h-fit w-fit mx-auto">
                        <NavLink onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-green-400 px-6 py-12 lg:py-14 rounded-full text-xl lg:text-3xl font-Aboreto"}>Artist</NavLink>
                    </div>
                    <div data-rellax-mobile-speed="4" data-rellax-speed="2" className="rellax group bg-transparent border border-gray-400 hover:border-orange-400 rounded-full px-1 py-12 lg:py-20 h-fit w-fit col-span-2 mx-auto">
                        <NavLink onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-orange-400 px-4 py-14 lg:py-20 rounded-full text-lg lg:text-3xl font-Aboreto"}>Artwork</NavLink>
                    </div>
                    <div data-rellax-mobile-speed="2" data-rellax-speed="1" className="rellax group bg-transparent border border-gray-400 hover:border-purple-400 rounded-full px-1 py-12 lg:py-16 h-fit w-fit col-span-2 mx-auto">
                        <NavLink onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-purple-400 px-4 py-12 lg:py-16 rounded-full text-lg lg:text-2xl font-Aboreto"}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

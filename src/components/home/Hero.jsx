import { useContext } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import {NavLink, useNavigate} from "react-router-dom"
import Rellax from "rellax";
import { useEffect } from "react";
const Hero = () => {
    const { cursorEnter, cursorLeave } = useContext(ContextProvide) || {};
    const navigate = useNavigate();
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
        <div className="relative w-full h-auto pt-36 px-3 lg:px-10">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center herobanner"></div>
            
            <div className="relative bg-transparent">
                <div className="text-center flex justify-center bg-transparent">
                    <h1
                        onMouseEnter={cursorEnter || (() => {})}
                        onMouseLeave={cursorLeave || (() => {})}
                        className="font-Aboreto w-fit text-[20px] lg:text-[40px] select-none capitalize bg-transparent"
                        aria-label="Art is not just a form of expression but a way of life"
                    >
                        art is not just a form
                        <span className="block bg-transparent">of expression</span>
                        <span className="block bg-transparent">but a way of life</span>
                    </h1>
                </div>
                <div className="bg-transparent">
                <div className="pr-3 lg:pr-40 mt-20">
                        <div onClick={()=>navigate('/artist')} data-rellax-mobile-speed="0.5" data-rellax-speed="1" className="rellax group bg-transparent border border-gray-400 hover:border-orange-400 rounded-full px-1 py-12 lg:py-16 w-fit h-fit ml-auto">
                            <NavLink onClick={()=>navigate('/artist')} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-orange-400 px-7 py-12 lg:py-16 text-lg lg:text-3xl rounded-full font-Aboreto"}>Artist</NavLink>
                        </div>
                    </div>
                    <div className="pl-3 lg:pl-20 pt-16">
                        <div onClick={()=>navigate('/')} data-rellax-mobile-speed="0.5" data-rellax-speed="1" className="rellax group bg-transparent border border-gray-400 hover:border-red-400 rounded-full px-1 py-10 lg:py-16 w-fit h-fit">
                            <NavLink onClick={()=>navigate('/')} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-red-400 px-5 lg:px-9 py-10 lg:py-16 text-lg lg:text-3xl rounded-full font-Aboreto"}>Home</NavLink>
                        </div>
                    </div>
                    <div className="mt-20 lg:mt-60">
                        <div onClick={()=>navigate('/artwork')} data-rellax-mobile-speed="0.5" data-rellax-speed="1" className="rellax group bg-transparent border border-gray-400 hover:border-blue-400 rounded-full px-1 py-16 lg:py-24 w-fit h-fit mx-auto">
                            <NavLink onClick={()=>navigate('/artwork')} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-blue-400 px-7 lg:px-10 py-16 lg:py-24 text-lg lg:text-3xl rounded-full font-Aboreto"}>Artwork</NavLink>
                        </div>
                    </div>
                    <div className="pl-40 mt-20">
                        <div onClick={()=>navigate('/shorts')} data-rellax-mobile-speed="0.5" data-rellax-speed="1" className="rellax group bg-transparent border border-gray-400 hover:border-green-400 rounded-full px-1 py-12 lg:py-16 w-fit h-fit mr-auto">
                            <NavLink onClick={()=>navigate('/shorts')} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-green-400 px-6 py-12 lg:py-16 text-lg lg:text-3xl rounded-full font-Aboreto"}>Shorts</NavLink>
                        </div>
                    </div>
                    <div className="pr-40 mt-10">
                        <div onClick={()=>navigate('/contact')} data-rellax-mobile-speed="0.5" data-rellax-speed="1" className="rellax group bg-transparent border border-gray-400 hover:border-yellow-400 rounded-full px-1 py-14 lg:py-20 w-fit h-fit ml-auto">
                            <NavLink onClick={()=>navigate('/contact')} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-yellow-400 px-6 py-14 lg:py-20 text-lg lg:text-3xl rounded-full font-Aboreto"}>contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;


{/* <div onClick={()=>navigate('/artist')} data-rellax-mobile-speed="0.5" data-rellax-speed="0.5" className="rellax group bg-transparent border border-gray-400 hover:border-green-400 rounded-full px-1 py-8 lg:py-16 h-fit w-fit mx-auto">
                        <NavLink onClick={()=>navigate('/artist')} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-green-400 px-5 py-8 lg:py-14 rounded-full text-sm lg:text-3xl font-Aboreto"}>Artist</NavLink>
                    </div>
                    <div onClick={()=>navigate('/artwork')} data-rellax-mobile-speed="0.5" data-rellax-speed="0.5" className="rellax group bg-transparent border border-gray-400 hover:border-orange-400 rounded-full px-1 py-10 lg:py-20 h-fit w-fit col-span-2 mx-auto">
                        <NavLink onClick={()=>navigate('/artwork')} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-orange-400 px-4 py-11 lg:py-20 rounded-full text-sm lg:text-3xl font-Aboreto"}>Artwork</NavLink>
                    </div>
                    <div onClick={()=>navigate('/contact')} data-rellax-mobile-speed="0.5" data-rellax-speed="0.5" className="rellax group bg-transparent border border-gray-400 hover:border-purple-400 rounded-full px-1 py-12 lg:py-16 h-fit w-fit mx-auto">
                        <NavLink onClick={()=>navigate('/contact')} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-purple-400 px-4 py-12 lg:py-16 rounded-full text-sm lg:text-2xl font-Aboreto"}>Contact</NavLink>
                    </div>
                    <div onClick={()=>navigate('/shorts')} data-rellax-mobile-speed="0.5" data-rellax-speed="0.5" className="rellax group bg-transparent border border-gray-400 hover:border-yellow-400 rounded-full px-1 py-12 lg:py-16 h-fit w-fit mx-auto">
                        <NavLink onClick={()=>navigate('/shorts')} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className={"bg-gray-100 group-hover:text-yellow-400 px-8 py-14 lg:py-16 rounded-full text-sm lg:text-2xl font-Aboreto"}>Shorts</NavLink>
                    </div> */}
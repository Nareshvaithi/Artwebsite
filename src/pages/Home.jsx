import { useContext } from "react";
import { ContextProvide } from "../ContextAPI/CreateContext";

const Home = ()=>{
    const {cursorEnter,cursorLeave} = useContext(ContextProvide)
    return(
        <section className="w-screen h-screen bg-gray-200 pt-36 px-3 lg:px-10">
           <div className="bg-gray-200">
                <div className="text-center">
                    <h1 onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className="font-Aboreto leading-normal text-4xl capitalize bg-gray-200">art is not  just a form <span className="bg-gray-200 block">of expression but a</span> <span className="bg-gray-200 block">way of life</span></h1>
                </div>
           </div>
        </section>
    )
}

export default Home;
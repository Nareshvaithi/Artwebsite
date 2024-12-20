import { useContext, useEffect, useState } from "react"
import { motion } from "framer-motion";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import { div, text } from "framer-motion/client";
const Cursor = ()=>{
    const [mousePosition,setMousePosition] = useState({
        x:0,
        y:0
    })
    console.log(mousePosition);
    useEffect(()=>{
        const mouseMove = (e)=>{
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })
        }

        window.addEventListener('mousemove',mouseMove);

        return ()=>{
            window.removeEventListener("mousemove",mouseMove);
        }
    },[])

    const variants = {
        default:{
            x:mousePosition.x-10,
            y:mousePosition.y-10,
        },
        text:{
            height:60,
            width:60,
            x:mousePosition.x-35,
            y:mousePosition.y-35,
            backgroundColor:"transparent",
        },
        transition:{
            type:'smooth',
            duration:0,
        },
    } 
    const {cursorvariant} = useContext(ContextProvide)
    return(
            <motion.div animate={cursorvariant} variants={variants} className="bg-transparent h-[20px] w-[20px] rounded-full border border-black fixed top-0 left-0 z-[9999999] pointer-events-none hidden lg:block"></motion.div>
    )
}

export default Cursor;
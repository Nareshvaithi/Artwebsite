import { useContext } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";

const Navbtn = ()=>{
    const {menu,setMenu} = useContext(ContextProvide);
    const {cursorEnter,cursorLeave} = useContext(ContextProvide);
    return(
        <div className="fixed flex justify-between items-center w-full top-10 px-3 lg:px-10 bg-transparent z-[999999]">
            <div onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className="bg-gray-100 rounded-full px-3 py-2 border border-gray-400 hover:scale-110 transition-all duration-500">
                <h1 className="bg-transparent font-Aboreto text-lg lg:text-xl">Get In Touch</h1>
            </div>
            <div onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} onClick={()=>setMenu(!menu)} className="bg-transparent hover:scale-110 transition-all duration-500">
                {menu ?
                <span onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className="material-icons w-fit border bg-gray-100 border-gray-400 rounded-full text-3xl px-4 py-3">
                    close
                </span>
                :
                <span className="material-icons w-fit border bg-gray-100 border-gray-400 rounded-full text-xl lg:text-3xl px-4 py-3">
                    menu
                </span> 
                }
            </div>
        </div>
    )
}

export default Navbtn;
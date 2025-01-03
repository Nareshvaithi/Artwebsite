import { useContext } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import { useNavigate } from "react-router-dom";

const Navbtn = ()=>{
    const {menu,setMenu} = useContext(ContextProvide);
    const {cursorEnter,cursorLeave} = useContext(ContextProvide);
    const navigate = useNavigate();
    return(
        <div className="fixed flex justify-between items-center w-full top-5 px-3 lg:px-10 bg-transparent z-[999999]">
            <div onClick={()=>{navigate('/contact');window.scrollTo(0,0)}} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className="bg-white rounded-full px-6 py-2 border border-gray-400 hover:scale-110 transition-all duration-500 cursor-pointer text-gray-600">
                <h1 className="bg-transparent font-Aboreto text-[18px]">Get In Touch</h1>
            </div>
            <div onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} onClick={()=>setMenu(!menu)} className="bg-transparent hover:scale-110 transition-all duration-500 cursor-pointer">
                {menu ?
                <span onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className="material-icons w-fit border bg-white border-gray-400 rounded-full text-3xl px-4 py-3">
                    close
                </span>
                :
                <span className="material-icons w-fit border bg-white border-gray-400 rounded-full text-xl lg:text-3xl px-4 py-3">
                    menu
                </span> 
                }
            </div>
        </div>
    )
}

export default Navbtn;
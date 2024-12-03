import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextProvide } from "../../ContextAPI/CreateContext";

const Footer = ()=>{
    const {navlinks} = useContext(ContextProvide);
    const {socialmedia} = useContext(ContextProvide);
    const {address} = useContext(ContextProvide);
    const {sitedetails} = useContext(ContextProvide);
    const {cursorEnter,cursorLeave} = useContext(ContextProvide);
    return(
        <div className="px-3 lg:px-10 bg-gray-900 text-white">
            <div className="px-20 flex justify-center">
                <nav className="flex gap-y-5 flex-col lg:flex-row justify-between items-center w-full py-5">
                    <div className="">
                        <NavLink onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>Logo</NavLink>
                    </div>
                    <div className="flex gap-2 lg:gap-10">
                        {
                            navlinks.map(({id,title,to,color})=>(
                                <NavLink onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} key={id} to={to} className={`text-sm lg:text-xl font-Aboreto`}>{title}</NavLink>
                            ))
                        }
                    </div>
                </nav>
            </div>
            <div className="px-20 flex justify-center">
                <nav className="flex gap-y-5 flex-col lg:flex-row justify-between items-center w-full py-5">
                    <div className="flex flex-wrap text-center items-center gap-2 lg:gap-10 font-Spectral text-lg">
                        {
                            address.map(({id,details,link})=>(
                                <NavLink className={'w-full lg:w-fit text-sm lg:text-lg'} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} key={id} onClick={()=>window.location.href = link}>{details}</NavLink>
                            ))
                        }
                    </div>
                    <div className="flex items-center gap-5">
                        {
                            socialmedia.map(({id,icon,link,name})=>(
                                <NavLink onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} key={id} to={link === "" ? "" : link} title={name}>{icon}</NavLink>
                            ))
                        }
                    </div>
                </nav>
            </div>
            <div className="px-20 flex justify-center">
                <nav className="flex gap-y-5 flex-col lg:flex-row justify-between items-center w-full py-5">
                    <div className="flex flex-wrap text-center lg:text-left items-center gap-2 lg:gap-10 font-Spectral">
                        {
                            sitedetails.map(({id,details,link})=>(
                                <NavLink className={'w-full lg:w-fit text-sm lg:text-lg'} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} key={id} onClick={()=>window.location.href = link}>{details}</NavLink>
                            ))
                        }
                    </div>
                    <div>
                        <p className="text-center text-sm" onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>&copy; 2024 Talking Walk. All Rights Reserved</p>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Footer;
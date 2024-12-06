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
        <div className="px-3 lg:px-10 bg-gray-200">
            <div className="px-20 flex justify-center">
                <nav className="flex gap-y-5 flex-col lg:flex-row justify-between items-center w-full py-5 lg:py-10">
                    <div className="">
                        <NavLink onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>Logo</NavLink>
                    </div>
                    <div className="flex gap-2 lg:gap-10">
                        {
                            navlinks.map(({id,title,to,color})=>(
                                <NavLink onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} key={id} to={to} className={`text-[13px] lg:text-xl font-Aboreto`}>{title}</NavLink>
                            ))
                        }
                    </div>
                </nav>
            </div>
            <div className="w-full h-[1px] bg-gray-500 my-0 lg:my-2 opacity-50"></div>
            <div className="px-20 flex justify-center">
                <nav className="flex gap-y-5 flex-col lg:flex-row justify-between items-center w-full py-5 lg:py-10">
                    <div className="flex flex-wrap text-center items-center gap-2 lg:gap-10 font-Spectral text-lg">
                        {
                            address.map(({id,details,link})=>(
                                <NavLink className={'w-[300px] lg:w-fit text-sm lg:text-lg'} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} key={id} onClick={()=>window.location.href = link}>{details}</NavLink>
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
            <div className="w-full h-[1px] bg-gray-500 my-0 lg:my-2 opacity-50"></div>
            <div className="px-20 flex justify-center">
                <nav className="flex gap-y-5 flex-col lg:flex-row justify-between items-center w-full py-5 lg:py-10">
                    <div className="flex flex-wrap text-center lg:text-left items-center gap-2 lg:gap-10 font-Spectral">
                        {
                            sitedetails.map(({id,details,link})=>(
                                <NavLink className={'w-[300px] lg:w-fit text-sm lg:text-lg'} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} key={id} onClick={()=>window.location.href = link}>{details}</NavLink>
                            ))
                        }
                    </div>
                    <div className="w-[300px] lg:w-fit">
                        <p className="text-center text-sm" onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>&copy; 2024 Augustine Samuel Gallery <span className="block lg:inline">All Rights Reserved.</span></p>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Footer;
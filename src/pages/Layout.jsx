import { Outlet } from "react-router-dom"
import Navbtn from "../components/FixedBtn/Navbtn";
import Cursor from "../components/cursor/Cursor";
import ResNavbar from "../components/FixedBtn/ResNav";


const Layout = ()=>{
    return(
        <div>
            <Cursor />
            <Navbtn />
            <ResNavbar/>
            <Outlet />
        </div>
    )
}

export default Layout;
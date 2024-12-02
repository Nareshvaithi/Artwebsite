import { Outlet } from "react-router-dom"
import Navbtn from "../components/FixedBtn/Navbtn";
import Cursor from "../components/cursor/Cursor";


const Layout = ()=>{
    return(
        <div>
            <Cursor />
            <Navbtn />
            <Outlet />
        </div>
    )
}

export default Layout;
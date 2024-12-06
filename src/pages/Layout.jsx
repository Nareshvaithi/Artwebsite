import { Outlet } from "react-router-dom"
import Navbtn from "../components/FixedBtn/Navbtn";
import Cursor from "../components/cursor/Cursor";
import ResNavbar from "../components/FixedBtn/ResNav";
import Footer from "../components/Footer/footer";


const Layout = ()=>{
    return(
        <div>
            <Cursor />
            <Navbtn />
            <ResNavbar/>
            <div className="z-[9999] bg-gray-200">
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;
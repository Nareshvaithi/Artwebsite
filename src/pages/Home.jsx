import { useContext } from "react";
import { ContextProvide } from "../ContextAPI/CreateContext";
import Hero from "../components/home/Hero";

const Home = ()=>{
    const {cursorEnter,cursorLeave} = useContext(ContextProvide)
    return(
        <section>
           <Hero/>
        </section>
    )
}

export default Home;
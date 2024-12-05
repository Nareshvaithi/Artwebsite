import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { Context } from "./ContextAPI/CreateContext";
import Rellax from "rellax";
import Lenis from 'lenis';
import React, { useEffect } from 'react';
import Admin from "./components/adminPanel/Admin";
import Artwork from "./pages/Artwork";
import ArtworkID from "./pages/ArtworkID";
import 'aos/dist/aos.css';
import AOS from "aos";
import Contact from "./pages/Contact";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Allow repeated animations
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Reinitialize AOS on route change
  }, [location.pathname]); // Re-run when the route changes
  useEffect(() => {
    const rellax = new Rellax(".rellax", {
      // Customize speed as needed
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    const lenis = new Lenis({
      easing: (t) => t,
      duration: 0.5,
      direction: "vertical",
      smooth: true,
      smoothTouch: true,
      gestureDirection: "vertical",
      wheelMultiplier: 2.0,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    // Cleanup Rellax on component unmount
    return () => {
      rellax.destroy();
      lenis.destroy();
    };
  }, []);
  return (
    <>
    <Context>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/artwork" element={<Artwork/>}/>
            <Route path="/artwork/:id" element={<ArtworkID/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </Context>
    </>
  );
}

export default App;

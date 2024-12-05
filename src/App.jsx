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
import About from "./pages/About";
import Artist from "./pages/Artist";
import Shorts from "./pages/Shorts";
import AdminLayout from "./pages/AdminLayout";
import AdminHome from "./components/adminPanel/AdminHome";
import ImagesAdmin from "./components/adminPanel/ImagesAdmin";
import VideosAdmin from "./components/adminPanel/VideosAdmin";
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
            <Route path="/about" element={<About/>}/>
            <Route path="/artist" element={<Artist/>}/>
            <Route path="/shorts"  element={<Shorts/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<AdminHome/>}/>
          <Route path="/admin/ImagesAdmin" element={<ImagesAdmin/>}/>
          <Route path="/admin/VideosAdmin" element={<VideosAdmin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
    </>
  );
}

export default App;

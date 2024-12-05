import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Layout from "./pages/Layout";
import { Context } from "./ContextAPI/CreateContext";
import Rellax from "rellax";
import Lenis from 'lenis';
import React, { useEffect } from 'react';
import Admin from "./components/adminPanel/admin";
import AdminLayout from "./pages/AdminLayout";
import AdminHome from "./components/adminPanel/AdminHome";
import ImagesAdmin from "./components/adminPanel/ImagesAdmin";
import VideosAdmin from "./components/adminPanel/VideosAdmin";
import ContactAdmin from "./components/adminPanel/ContactAdmin";
import UploadFiles from "./components/adminPanel/UploadFiles";
import EditFiles from "./components/adminPanel/EditFiles";

function App() {
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
          </Route>
          <Route path="/admin" element={<AdminLayout/>} >
          <Route index element={<AdminHome/>}/>
          <Route path='/admin/ImagesAdmin' element={<ImagesAdmin/>}/>
          <Route path="/admin/VideosAdmin" element={<VideosAdmin/>}/>
          <Route path="/admin/ContactAdmin" element={<ContactAdmin/>}/>
          <Route path="/admin/UploadFiles" element={<UploadFiles/>}/>
          <Route path="/admin/edit/:id" element={<EditFiles/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </Context>
    </>
  );
}

export default App;

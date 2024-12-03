import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Layout from "./pages/Layout";
import { Context } from "./ContextAPI/CreateContext";
import Rellax from "rellax";
import Lenis from 'lenis';
import React, { useEffect } from 'react';
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
        </Routes>
      </BrowserRouter>
    </Context>
    </>
  );
}

export default App;

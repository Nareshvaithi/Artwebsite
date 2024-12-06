import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import LionArt from "../assets/contact/contactimg.jpg"; // Ensure this path is correct
import rounded_1 from "../assets/contact/rounded_1.jpg";
import rounded_2 from "../assets/contact/rounded_2.jpg";
import rounded_3 from "../assets/contact/rounded_3.jpg";
import rounded_4 from "../assets/contact/rounded_4.jpg";
import rounded_5 from "../assets/contact/rounded_5.jpg";
import rounded_6 from "../assets/contact/rounded_6.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const ClothImage = ({ mousePosition, isHovered }) => {

  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, LionArt);

  // Tilt speed and range for smooth back-and-forth motion
  const tiltSpeed = 0.001; // Speed of tilt animation
  const tiltRange = 0.09; // Maximum tilt angle in radians

  // Animate the cloth and apply slow tilt effect
  useFrame(() => {
    if (meshRef.current) {
      // Apply wave motion (cloth effect) based on mouse position
      const { position } = meshRef.current.geometry.attributes;
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);

        const distance = Math.sqrt(
          Math.pow(x - mousePosition.x * 2, 2) + Math.pow(y - mousePosition.y * 2, 2)
        ) * 5;

        const z = Math.sin(distance) * 0.2;
        position.setZ(i, z);
      }
      position.needsUpdate = true;

      // Apply smooth tilt based on sine wave oscillation for back-and-forth motion
      const time = Date.now() * tiltSpeed;
      meshRef.current.rotation.x = Math.sin(time) * tiltRange; // Tilt on X axis
      meshRef.current.rotation.y = Math.cos(time) * tiltRange; // Tilt on Y axis
    }
  });

  // Handle mouse movement to update shake intensity
  const handleMouseMove = () => {};

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => isHovered(true)}
      onPointerOut={() => isHovered(false)}
      onPointerMove={handleMouseMove}
    >
      <planeGeometry args={[3, 5, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

// Contact page component
const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track mouse movement
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const x = (clientX / innerWidth) * 2 - 1;
    const y = -(clientY / innerHeight) * 2 + 1;

    setMousePosition({ x, y });
  };

  return (
    <div
      className="w-full h-auto bg-gray-200"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full h-full px-3 lg:px-10">
        {/* for window */}
        <div className="items-center justify-center w-full h-screen relative hidden lg:flex">
            <div className="flex flex-col justify-center items-center">
                <div className="relative w-full text-[170px] text-gray-500 font-Roboto outline2-text text-center font-bold flex justify-between">
                    <h1 className="relative z-10">UNLEASH</h1> <h1 className="relative">YOUR</h1>
                </div>
                <div className="relative text-[170px] text-gray-400 font-Roboto outline2-text text-center font-bold flex justify-between gap-36">
                    <h1 className="relative">INNER</h1> <h1 className="relative z-10">ARTIST</h1>
                </div>
            </div>
          <div className="absolute -top-10 left-0 right-0 flex rotate-12">
            <Canvas style={{ width: "100%", height: "100vh"}} className="my-auto mx-auto">
              <ambientLight />
              <pointLight position={[1, 1, 1]} />
              <ClothImage mousePosition={mousePosition} isHovered={setIsHovered} />
            </Canvas>
          </div>
        </div>
        {/* for mobile */}
        <div className="lg:hidden pt-28">
            <div>
                <h1 className="w-full text-[40px] font-Roboto outline2-text text-center font-bold">UNLEASH YOUR INNER ARTIST</h1>
            </div>
            <div className="">
            <Canvas style={{ width: "100%", height: "50vh"}} className="mb-auto mx-auto">
              <ambientLight />
              <pointLight position={[1, 1, 1]} />
              <ClothImage mousePosition={mousePosition} isHovered={setIsHovered} />
            </Canvas>
            </div>
        </div>
        <div className="py-20">
          <div className="flex flex-col lg:flex-row items-start text-gray-900">
            <div className="w-full lg:w-1/2 font-Spectral">
              <p className="text-sm lg:text-lg">How it works</p>
              <h1 className="text-2xl lg:text-4xl font-extralight leading-snug w-full lg:w-5/6">Come and experience the magic of our Artwork, where Art is not just a form of expression but a way of life</h1>
            </div>
            <div className="w-full lg:w-1/2 font-Spectral">
              <div className="py-5">
                <p className="text-sm lg:text-lg">Address</p>
                <div className="w-full h-[1px] bg-gray-500 my-2"></div>
                <h1 className="text-2xl lg:text-4xl font-extralight leading-snug w-full lg:w-5/6">#10, My address, My state, My country - 10000</h1>
              </div>
              <div className="py-5">
                <p className="text-sm lg:text-lg">send an Email</p>
                <div className="w-full h-[1px] bg-gray-500 my-2"></div>
                <h1 className="text-2xl lg:text-4xl font-extralight leading-snug w-full lg:w-5/6">example@gmail.com</h1>
              </div>
              <div className="py-5">
                <p className="text-sm lg:text-lg">Call Us</p>
                <div className="w-full h-[1px] bg-gray-500 my-2"></div>
                <h1 className="text-2xl lg:text-4xl font-extralight leading-snug w-full lg:w-5/6">+91 12345 12345</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-40 overflow-hidden">
          <div className="relative border border-gray-500 rounded-full mx-auto w-full lg:w-2/3 py-[150px] lg:py-[300px] flex justify-center items-center">
              <div className="w-fit text-center">
                    <p className="font-Spectral">Social Media</p>
                    <h1 className="font-Aboreto text-xl lg:text-5xl leading-snug">Follow The News</h1>
                    <h1 className="font-Aboreto text-xl lg:text-5xl leading-snug">And Daily Life Of</h1>
                    <h1 className="font-Aboreto text-xl lg:text-5xl leading-snug">The Artwork</h1>
                    <div className="flex gap-5 items-center justify-center pt-5">
                        <div className="rounded-full border border-black p-3 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-500">
                          <FaFacebookF size={30}/>
                        </div>
                        <div className="rounded-full border border-black p-3 hover:bg-[#fb0b54] hover:text-white hover:scale-110 transition-all duration-500">
                          <FaInstagram size={30}/>
                        </div>
                        <div className="rounded-full border border-black p-3 hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-500">
                          <FaPinterest size={30}/>
                        </div>
                    </div>
              </div>
              <div className="absolute w-20 lg:w-52 -top-10 lg:-top-20 animate-drift">
                  <img className="w-full h-full" src={rounded_1} alt="" />
              </div>
              <div className="absolute w-20 lg:w-52 top-10 -left-0">
                  <img className="w-full h-full" src={rounded_2} alt="" />
              </div>
              <div className="absolute w-20 lg:w-52 top-10 -right-0">
                  <img className="w-full h-full" src={rounded_3} alt="" />
              </div>
              <div className="absolute w-20 lg:w-52 -bottom-10 lg:-bottom-20">
                  <img className="w-full h-full" src={rounded_4} alt="" />
              </div>
              <div className="absolute w-20 lg:w-52 -left-10 bottom-20">
                  <img className="w-full h-full" src={rounded_5} alt="" />
              </div>
              <div className="absolute w-20 lg:w-52 -right-10 bottom-20">
                  <img className="w-full h-full" src={rounded_6} alt="" />
              </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;

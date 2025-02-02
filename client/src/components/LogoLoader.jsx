import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/hero_section_image_1.png";

const LogoLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute z-50 top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-backdrop">
      <div className="relative w-40 h-40 flex items-center justify-center">
        <img
          src={Logo} 
          alt="Logo"
          className="absolute z-10 w-full h-full object-contain"
        />

        <motion.div
          className="absolute left-0 w-full h-full"
          initial={{ width: "0%" }}
          animate={{ width: `100%` }}
          transition={{ duration: 4, ease: "linear" }}
          style={{
            backgroundColor: "white",
          }}
        />
      </div>

      <div className="text-xl font-semibold text-white">
        {Math.round(progress)}%
      </div>
      <h1 className="text-white font-semibold text-xl">Rendering</h1>
    </div>
  );
};

export default LogoLoader;

import React from 'react'
import { motion } from "motion/react";
import { div } from 'motion/react-client';
const Button = () => {
  return (
    <div  
      className=" h-screen w-full flex items-center justify-center perspective-distant transform-3d">
       <motion.button
        initial={{
          opacity: 0,
          y:50,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        whileHover={{
          rotateX: 10,
          rotateY: 10,
          rotateZ: 0,
          boxShadow: "0px 0px 10px #78716c",
        }}
        transition={{ duration: 0.3 ,ease: "easeInOut",}}
        style={{ translateZ: 100 ,  boxShadow: "10px 10px  #78716c",}}
        className="px-24 active:scale-95 transition-all duration-300 py-8 text-neutral-200 relative group rounded-md text-4xl outline-neutral-300 outline-2 bg-neutral-700/95 text-shadow-2xs"
      >
        MJ
        <span className="absolute inset-x-0 mx-auto bottom-px bg-linear-to-r from-transparent  via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity h-0.5 w-3/4 "></span>
        <span className="absolute inset-x-0 mx-auto bottom-px bg-linear-to-r from-transparent via-white to-transparent   opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-300 h-1 w-3/4 "></span>
      </motion.button>
      </div>
  )
}

export default Button

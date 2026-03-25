import React from 'react';
import { motion } from 'motion/react';
const Button = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center perspective-distant transform-3d">
      <motion.button
        initial={{
          opacity: 0,
          y: 50,
          filter: 'blur(10px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }}
        whileHover={{
          rotateX: 10,
          rotateY: 10,
          rotateZ: 0,
          boxShadow: '0px 0px 10px #d6d3d1',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ translateZ: 100, boxShadow: '10px 10px  #d6d3d1' }}
        className="group text-md relative rounded-md bg-neutral-200 px-8 py-2 text-neutral-800 outline-2 outline-neutral-300 transition-all duration-300 text-shadow-2xs hover:bg-neutral-200/95 active:scale-95"
      >
        MJ Shaikh
        <span className="absolute inset-x-0 bottom-px mx-auto h-0.5 w-3/4 bg-linear-to-r from-transparent via-neutral-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
        <span className="absolute inset-x-0 bottom-px mx-auto h-1 w-3/4 bg-linear-to-r from-transparent via-neutral-400 to-transparent opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-100"></span>
      </motion.button>
    </div>
  );
};

export default Button;

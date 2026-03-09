import React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
const Card = () => {
  const [isOpen, setIsOpen] = useState(true);
  const overlayText = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
  };

  const cardBlur = {
    initial: {
      filter: 'blur(8px)',
    },
    hover: { filter: 'blur(0px)', boxShadow: '10px 10px 0px 0px #a8a29e' },
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial="initial"
            whileHover="hover"
            exit={{
              opacity: 0,
              x: 10,
              y: -500,
              scale: 0.95,
              filter: 'blur(10px)',
            }}
            className=" flex items-center  transition-all duration-150 justify-center    perspective-distant transform-3d"
          >
            <motion.div
              variants={cardBlur}
              transition={{
                duration: 0.3,
              }}
              className="w-xs h-48 bg-neutral-200 relative rounded-md flex flex-col items-center justify-center text-2xl text-neutral-800"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="mb-4 shadow-md hover:scale-[1.01] transition-all duration-100 active:scale-105 px-3 py-1 rounded-md bg-neutral-400/90"
              >
                close
              </button>
              Hello from the card
            </motion.div>
            <motion.h1
              className="absolute  flex items-center justify-center "
              variants={overlayText}
            >
              Hover me
            </motion.h1>
          </motion.div>
        )}

        {!isOpen && (
          <motion.button
            intial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="px-6 py-2 rounded-md bg-neutral-400/90 shadow-md hover:scale-[1.01] transition-all duration-100 active:scale-105"
            onClick={() => setIsOpen(true)}
          >
            Open Card
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;

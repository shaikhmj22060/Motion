import React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { animate } from 'motion';
import { filter } from 'motion/react-client';
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
  const parentAnimations = {
    initial: {
      opacity: 0,
      y: 25,
      filter: 'blur(10px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
    },
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.2,
    },
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key={'card-container'}
            variants={parentAnimations}
            whileInView="animate"
            viewport={{ amount: 0.5, margin: '0px 0px -100px 0px' }}
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
              className="w-xs text-lg  h-48 bg-neutral-200 relative rounded-lg flex flex-col items-center justify-center  text-neutral-700"
            >
              Hello from the card
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 shadow-md hover:scale-[1.01] transition-all duration-100 active:scale-105 px-3 py-1 rounded-md bg-neutral-400/90"
              >
                close
              </button>
            </motion.div>
            <motion.h1
              className="absolute text-neutral-800 text-sm flex items-center justify-center "
              variants={overlayText}
            >
              Hover me
            </motion.h1>
          </motion.div>
        )}

        {!isOpen && (
          <motion.button
            key={'card-open-button'}
            initial={{
              opacity: 0,
              y: 150,
              filter: 'blur(10px)',
            }}
            exit={{
              y: -50,
              opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 0],
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="px-6 py-2 text-md   rounded-md bg-neutral-200 shadow-md hover:scale-[1.01] transition-all duration-100 active:scale-105"
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

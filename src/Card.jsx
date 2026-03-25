import React from 'react';
import { useState, useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import Container from './Utility/Container';
const Card = () => {
  const [isOpen, setIsOpen] = useState(true);

  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, amount: 0.8 });
  const overlayText = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
  };

  const cardBlur = {
    initial: {
      filter: 'blur(8px)',
    },

    hover: { filter: 'blur(0px)', boxShadow: '10px 10px 0px 0px #d6d3d1' },
  };
  const parentAnimations = {
    initial: {
      opacity: 0,
      y: 25,
      filter: 'blur(10px)',
    },
    animate: {
      opacity: inView ? 1 : 0,
      scale: 0.98,
      delay: 0.4,
      filter: inView ? 'blur(0px)' : 'blur(10px)',
    },
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.2,
    },
  };
  return (
    <>
      <Container className={'p-12'}>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key={'card-container'}
              variants={parentAnimations}
              whileInView="animate"
              initial="initial"
              whileHover="hover"
              exit={{
                opacity: 0,
                x: 10,
                y: -500,
                scale: 0.95,
                filter: 'blur(10px)',
              }}
              className="flex items-center justify-center transition-all duration-150 perspective-distant transform-3d"
            >
              <motion.div
                variants={cardBlur}
                ref={cardRef}
                transition={{
                  duration: 0.3,
                }}
                className="relative flex h-48 w-xs flex-col items-center justify-center rounded-lg bg-neutral-200 text-lg text-neutral-700"
              >
                Hello from the card
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 rounded-md bg-neutral-400/90 px-3 py-1 shadow-md transition-all duration-100 hover:scale-[1.01] active:scale-105"
                >
                  close
                </button>
              </motion.div>
              <motion.h1
                className="absolute flex items-center justify-center text-sm text-neutral-800"
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
                y: 25,
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
              className="text-md rounded-md bg-neutral-200 px-6 py-2 shadow-md transition-all duration-100 hover:scale-[1.01] active:scale-105"
              onClick={() => setIsOpen(true)}
            >
              Open Card
            </motion.button>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Card;

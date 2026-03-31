import { motion, useAnimate } from 'motion/react';

const AnimationSequences = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = async () => {
    animate(
      '.text',
      {
        opacity: 0,
      },
      {
        duration: 0.2,
      }
    );
    await animate(
      'button',
      {
        width: '5rem',
        borderRadius: '1000px',
        backgroundColor: 'var(--color-green-500)',
      },
      {
        duration: 0.5,
        ease: 'easeInOut',
      }
    );
    await animate(
      'button',
      {
        scale: [1, 3, 0.2, 1],
      },
      {
        duration: 0.5,
        ease: 'easeInOut',
      }
    );
    await animate(
      'svg',
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        ease: 'easeInOut',
      }
    );
    await animate(
      'svg path',
      {
        pathLength: 1,
      },
      {
        duration: 0.5,
        ease: 'easeIn',
      }
    );
  };
  return (
    <div className="relative flex items-center justify-center" ref={scope}>
      <button
        onClick={startAnimating}
        style={{
          width: '20rem',
        }}
        className="to h-20 cursor-pointer rounded-lg bg-purple-400 font-bold text-black/80 shadow-sm transition-all duration-300 hover:shadow-purple-800 hover:text-shadow-2xs hover:text-shadow-neutral-600 active:scale-95 active:shadow-none"
      >
        <span className="text">Purchase Now ($150)</span>
      </button>
      <motion.svg
        style={{
          opacity: 0,
        }}
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        viewBox="0 0 48 48"
      >
        <motion.path
          initial={{
            pathLength: 0,
          }}
          transition={{
            duration: 0.3,
            type: 'tween',
          }}
          stroke="#fff"
          strokeWidth="3"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
        ></motion.path>
      </motion.svg>
    </div>
  );
};

export default AnimationSequences;

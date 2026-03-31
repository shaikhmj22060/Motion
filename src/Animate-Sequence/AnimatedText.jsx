import React, { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';
const AnimatedText = () => {
  const [scope, animate] = useAnimate();
  const text =
    "Welcome to F*** C***. The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you don't talk about F*** C***.";
  useEffect(() => {
    startAnimating();
  }, []);
  const startAnimating = () => {
    animate(
      'span',
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
      },
      { duration: 0.3, delay: stagger(0.05), ease: 'easeInOut' }
    );
  };
  return (
    <motion.div
      ref={scope}
      className="max-w-5xl text-4xl font-bold text-neutral-50"
    >
      {text.split(' ').map((word, idx) => (
        <motion.span
          initial={{
            opacity: 0,
            filter: 'blur(10px)',
            y: 10,
          }}
          className="inline-block"
          key={word + idx}
        >
          {' '}
          {word} &nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;

import { motion, useScroll, useTransform } from 'motion/react';
import AnimatedText from './Animate-Sequence/AnimatedText';
import AnimationSequences from './Animate-Sequence/AnimationSequences';
import { useRef } from 'react';

const AnimateSequence = () => {
  return (
    <motion.div className="bg-neutral-900">
      <motion.div className="flex h-screen items-center justify-center">
        <AnimatedText />
      </motion.div>
      <motion.div
        // ref={ref}
        className="flex h-screen items-center justify-center"
      >
        <AnimationSequences />
      </motion.div>
    </motion.div>
  );
};

export default AnimateSequence;

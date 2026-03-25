import { motion } from 'motion/react';

const Container = ({ children, className }) => {
  return (
    <motion.div
      className={`flex h-screen w-full items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Container;

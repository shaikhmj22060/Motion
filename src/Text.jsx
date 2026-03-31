import { easeIn, motion } from 'motion/react';

const Text = () => {
  const text =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. lorem ipsum dolor sit amet consectetur.';
  const characters = text.split('');
  const half = Math.floor(characters.length / 2);
  const staggerDelay = 0.02; // Adjust for speed

  return (
    <div className="flex h-screen items-center justify-center bg-neutral-950">
      <div className="inline-block max-w-xl overflow-hidden font-bold">
        {characters.map((char, i) => {
          return (
            <motion.span
              key={i}
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: staggerDelay * i,
                ease: 'easeInOut',
              }}
              className="inline-block text-4xl whitespace-pre text-white selection:bg-white selection:text-neutral-800"
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Text;

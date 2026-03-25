import { useState } from 'react';
import Container from './Utility/Container';
import {
  IconBell,
  IconChevronDown,
  IconChevronUp,
  IconHome,
  IconSearch,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
const Variants = () => {
  const AccordionLInks = [
    {
      name: 'Home',
      logo: <IconHome className="size-4" />,
    },

    {
      name: 'Settings',
      logo: <IconSettings className="size-4" />,
    },
    {
      name: 'User',
      logo: <IconUser className="size-4" />,
    },
    {
      name: 'Bell',
      logo: <IconBell className="size-4" />,
    },
    {
      name: 'Search',
      logo: <IconSearch className="size-4" />,
    },
  ];
  const [IsOpen, setIsOpen] = useState(false);
  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.03,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        delayChildren: 0.03,
      },
    },
  };
  const chiledVariants = {
    open: {
      initial: {
        height: 0,
      },
      style: { height: IsOpen ? 'auto' : 0 },

      animate: {
        height: IsOpen ? 'auto' : 0,
      },
      opacity: [0, 1],
      y: [-10, 0],
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };
  return (
    <Container>
      <motion.div
        initial={{
          opacity: 0,
          filter: 'blur(10px)',
        }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.3,
          delay: 0.3,
        }}
        className="w-sm cursor-pointer space-y-2.5 bg-neutral-300/60 px-4 py-2 select-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center justify-between gap-4">
          <h1>Accordion with Stagger animations</h1>
          <button
            className={`cursor-pointer items-center justify-center rounded-full bg-neutral-400/50 ${IsOpen ? 'hidden' : 'flex'}`}
          >
            <IconChevronDown stroke={2} size={20} />
          </button>
          <button
            className={`cursor-pointer items-center justify-center rounded-full bg-neutral-400/50 ${IsOpen ? 'flex' : 'hidden'}`}
          >
            <IconChevronUp stroke={2} size={20} />
          </button>
        </div>
        <AnimatePresence type="wait">
          {IsOpen && (
            <motion.div
              className={`flex gap-2`}
              variants={parentVariants}
              animate="open"
              initial="closed"
              exit="closed"
            >
              {AccordionLInks.map((link) => (
                <motion.div
                  key={link.name}
                  className="flex items-center gap-0.5"
                  variants={chiledVariants}
                >
                  <p className="font-light"> {link.logo}</p>

                  <motion.span className="overflow-hidden text-sm">
                    {link.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default Variants;

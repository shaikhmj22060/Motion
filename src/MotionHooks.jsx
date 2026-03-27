import {
  IconBrandFramerMotion,
  IconPlayerPlay,
  IconZoomScan,
} from '@tabler/icons-react';
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { useRef, useState } from 'react';

const MotionHooks = () => {
  const features = [
    {
      title: 'Parallax Scrolling',
      description:
        'Dynamic visual experience with elements moving at different speeds based on scroll position.',
      image:
        'https://plus.unsplash.com/premium_photo-1677159325329-4691ee959a02?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IconBrandFramerMotion size={18} />,
    },
    {
      title: 'Smooth Animations',
      description:
        'Fluid motion effects that enhance user experience with seamless transitions and interactive elements.',
      image:
        'https://images.unsplash.com/photo-1687518587906-aabd63422513?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IconPlayerPlay size={18} />,
    },
    {
      title: 'Dynamic Content',
      description:
        'Interactive content that responds to scroll position creating engaging and immersive user experiences.',
      image:
        'https://images.unsplash.com/photo-1773751392399-241afcb9fac2?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IconZoomScan size={18} />,
    },
  ];
  // console.log(background.length);
  const backgrounds = ['#000814', '#212529', '#1c1c1c'];
  const [background, setBackground] = useState(backgrounds[0]);
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const backgroundValues = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[backgroundValues]);
  });
  return (
    <>
      <motion.div
        ref={containerRef}
        // style={{
        //   background,
        // }}
        animate={{
          background,
        }}
        className={
          'flex w-full flex-col items-center justify-center bg-neutral-900'
        }
      >
        {features.map((feature, index) => (
          <Cards feature={feature} key={feature.title + index} />
        ))}
      </motion.div>
    </>
  );
};

export default MotionHooks;

const Cards = ({ feature }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const translateValues = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -600]),
    {
      damping: 20,
    }
  );
  const opacityValues = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scaleVlues = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  return (
    <div ref={ref} className="flex h-screen items-center justify-center py-60">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
        className="space-y-4"
      >
        <div className="font-semibold text-neutral-50">{feature.icon}</div>
        <h1 className="text-4xl font-bold text-neutral-50">
          Title:-{feature.title}
        </h1>
        <p className="text-md w-xl text-balance text-neutral-200">
          {feature.description}
        </p>
      </motion.div>

      <motion.img
        style={{
          y: translateValues,
          opacity: opacityValues,
          scale: scaleVlues,
        }}
        src={feature.image}
        alt="image1"
        className="rounded-md"
        width={280}
      />
    </div>
  );
};

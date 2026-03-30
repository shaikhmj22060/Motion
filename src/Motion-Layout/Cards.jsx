import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Cards = () => {
  const cards = [
    {
      title: 'Mj Shaikh',
      subTitle: 'Creator of this page',
      imageSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      CTAtext: 'Play',
      desc: 'A profile image description refers to the visual and textual elements that define or accompany a profile picture, commonly used on social media, professional networks, or online platforms. It can include a written explanation of the image, alt text for accessibility, or guidance on how to create an effective and recognizable profile photo. ',
    },
    {
      title: 'John Doe',
      subTitle: 'Lead Developer',
      imageSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'A dedicated developer with a passion for creating responsive and user-friendly web applications. Specializes in front-end technologies and has a keen eye for design details. Brings expertise in modern JavaScript frameworks and responsive design principles to every project.',
      CTAtext: 'Play',
    },
    {
      title: 'Sarah Williams',
      subTitle: 'UI/UX Designer',
      imageSrc:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Creative designer focused on building intuitive interfaces and improving user experience. Brings modern design principles to every project with attention to detail and a passion for creating visually stunning applications that users love.',
      CTAtext: 'Play',
    },
    {
      title: 'Alex Chen',
      subTitle: 'Full Stack Engineer',
      imageSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Experienced full-stack developer with expertise in both frontend and backend technologies. Driven by solving complex problems and delivering scalable solutions. Proficient in multiple programming languages and databases, committed to continuous learning.',
      CTAtext: 'Play',
    },
  ];
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex h-screen w-4xl items-center">
      <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl bg-neutral-200 p-9 inset-shadow-sm inset-shadow-neutral-300">
        {cards.map((cards, idx) => (
          <CardSkeleton
            cards={cards}
            key={cards.title + idx}
            onClick={() => setSelected(cards)}
          />
        ))}

        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelected(null)} // outside click
          >
            <motion.div
              layoutId={`card-${selected.title}`}
              className="w-[20%] rounded-xl bg-white p-6"
              onClick={(e) => e.stopPropagation()} // prevent closing
            >
              <div>
                <motion.img
                  layoutId={`card-image-${selected.title}`}
                  src={selected.imageSrc}
                  alt=""
                  className="aspect-square w-full rounded-xl"
                />
              </div>
              <div className="my-3 flex items-center justify-between">
                <div>
                  <motion.h1
                    layoutId={`card-title-${selected.title}`}
                    className="text-xl font-semibold"
                  >
                    {selected.title}
                  </motion.h1>
                  <motion.p
                    layoutId={`card-subtitle-${selected.title}`}
                    className="text-xs font-medium tracking-tight text-neutral-600"
                  >
                    {selected.subTitle}
                  </motion.p>
                </div>
                <motion.button
                  layoutId={`card-CTA-${selected.title}`}
                  className="rounded-md bg-purple-600 px-5 py-1 font-medium text-neutral-50"
                >
                  {selected.CTAtext}
                </motion.button>
              </div>
              <motion.p
                initial={{
                  opacity: 0,
                  filter: 'blur(10px)',
                }}
                animate={{
                  opacity: 1,
                  filter: 'blur(0px)',
                }}
                transition={{
                  delay: 0.3,
                }}
                className="text-justify text-sm tracking-tighter text-neutral-600"
              >
                {selected.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Cards;

const CardSkeleton = ({ cards, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${cards.title}`}
      onClick={onClick}
      className="flex w-xl cursor-pointer items-center justify-between gap-20 rounded-xl bg-neutral-50 px-4 py-3"
    >
      <div className="flex items-center justify-center gap-2">
        <motion.img
          layoutId={`card-image-${cards.title}`}
          src={cards.imageSrc}
          alt=""
          className="aspect-square size-14 rounded-xl"
        />
        <div className="flex flex-col">
          <motion.h1
            layoutId={`card-title-${cards.title}`}
            className="text-xl font-medium text-neutral-700"
          >
            {cards.title}
          </motion.h1>
          <motion.p
            layoutId={`card-subtitle-${cards.title}`}
            className="text-xs text-neutral-600"
          >
            {cards.subTitle}
          </motion.p>
        </div>
      </div>
      <motion.button
        layoutId={`card-CTA-${cards.title}`}
        className="rounded-md bg-purple-600 px-4 py-1 text-neutral-50"
      >
        {cards.CTAtext}
      </motion.button>
    </motion.div>
  );
};

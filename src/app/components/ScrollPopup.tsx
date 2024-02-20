'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollPopup = () => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [window.innerHeight / 4, 0], [0, 0.25]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 50 });

  return (
    <motion.div
      className='absolute bottom-16 left-1/2 grid h-20 w-12 -translate-x-1/2 place-content-center rounded-3xl border-2 border-white opacity-25'
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.25 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{ opacity }}
    >
      <motion.div
        className='h-6 w-2 rounded-full bg-white'
        animate={{ y: ['-50%', '0%', '50%', '-50%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default ScrollPopup;

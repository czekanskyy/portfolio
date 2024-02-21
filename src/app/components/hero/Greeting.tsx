'use client';

import { MotionValue, motion } from 'framer-motion';
import { Oooh_Baby } from 'next/font/google';

const obFont = Oooh_Baby({ subsets: ['latin'], weight: ['400'] });

interface PropTypes {
  x: MotionValue<string>;
  opacity: MotionValue<number>;
}

const Greeting = ({ x, opacity }: PropTypes) => {
  return (
    <motion.p
      style={{ x, opacity }}
      className={`relative left-4 z-10 -mb-4 text-7xl text-blue-400 drop-shadow ${obFont.className}`}
    >
      Hi, I&apos;m
    </motion.p>
  );
};

export default Greeting;

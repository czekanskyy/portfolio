'use client';

import { MotionValue, motion } from 'framer-motion';

interface PropTypes {
  y: MotionValue<string>;
}

const Title = ({ y }: PropTypes) => {
  return (
    <motion.h1
      className='relative z-20 text-center text-[12rem] font-bold uppercase leading-none drop-shadow'
      style={{ y }}
    >
      Dominik
    </motion.h1>
  );
};

export default Title;

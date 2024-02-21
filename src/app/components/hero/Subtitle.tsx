'use client';

import { MotionValue, motion } from 'framer-motion';

interface PropTypes {
  x: MotionValue<string>;
  opacity: MotionValue<number>;
}

const Subtitle = ({ x, opacity }: PropTypes) => {
  return (
    <motion.h2 style={{ x, opacity }} className='relative left-3 z-10 text-5xl uppercase text-neutral-500 drop-shadow'>
      Front End & WordPress Developer
    </motion.h2>
  );
};

export default Subtitle;

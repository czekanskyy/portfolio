'use client';

import { MotionValue, motion } from 'framer-motion';
import lipsum from '@/app/images/lipsum.webp';

interface PropTypes {
  y: MotionValue<string>;
}

const Background = ({ y }: PropTypes) => {
  return (
    <motion.div
      className='absolute inset-0 z-0 opacity-5'
      style={{
        backgroundImage: `url(${lipsum.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        y,
      }}
    />
  );
};

export default Background;

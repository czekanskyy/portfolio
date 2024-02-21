'use client';

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Poppins } from 'next/font/google';
import Background from './Background';
import Greeting from './Greeting';
import Title from './Title';
import Subtitle from './Subtitle';

const poppinsFont = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const Headings = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textL = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const textR = useTransform(scrollYProgress, [0, 1], ['0%', '300%']);
  const opacity = useTransform(scrollYProgress, [0.2, 0], [0, 1]);

  return (
    <div
      ref={ref}
      className={`relative grid h-screen place-content-center overflow-hidden bg-gradient-to-t from-zinc-950 to-blue-950 ${poppinsFont.className}`}
    >
      <Background y={backgroundY} />
      <Greeting x={textL} opacity={opacity} />
      <Title y={textY} />
      <Subtitle x={textR} opacity={opacity} />
    </div>
  );
};

export default Headings;

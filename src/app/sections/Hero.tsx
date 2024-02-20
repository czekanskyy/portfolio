'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollPopup from '../components/ScrollPopup';
import lipsum from '@/app/images/lipsum.webp';
import { useRef } from 'react';

const Hero = () => {
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
    <main
      ref={ref}
      className='relative grid h-screen place-content-center overflow-hidden bg-gradient-to-t from-zinc-950 to-blue-950 font-sans'
    >
      <motion.div
        className='absolute inset-0 z-0 opacity-5'
        style={{
          backgroundImage: `url(${lipsum.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          y: backgroundY,
        }}
      ></motion.div>
      <motion.p
        style={{ x: textL, opacity }}
        className='relative z-10 -mb-4 ml-5 text-7xl font-bold text-blue-400 drop-shadow'
      >
        Hi, I&apos;m
      </motion.p>
      <motion.h1
        className='relative z-10 text-center text-[12rem] font-bold uppercase leading-none drop-shadow'
        style={{ y: textY }}
      >
        Dominik
      </motion.h1>
      <motion.h2
        style={{ x: textR, opacity }}
        className='relative z-10 ml-5 text-5xl font-semibold uppercase text-neutral-500 drop-shadow'
      >
        Front End & WordPress Developer
      </motion.h2>
      <ScrollPopup />
    </main>
  );
};

export default Hero;

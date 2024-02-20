'use client';

import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({});
  const largerCursor = useRef<HTMLDivElement>(null);
  const smallerCursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const smallerX = event.clientX - smallerCursor.current!.offsetWidth / 2,
        smallerY = event.clientY - smallerCursor.current!.offsetHeight / 2;
      const largerX = event.clientX - largerCursor.current!.offsetWidth / 2,
        largerY = event.clientY - largerCursor.current!.offsetHeight / 2;

      const smallerCursorKeyframes = {
        transform: `translate(${smallerX}px, ${smallerY}px)`,
      };
      const largerCursorKeyframes = {
        transform: `translate(${largerX}px, ${largerY}px)`,
      };

      smallerCursor.current!.animate(smallerCursorKeyframes, {
        duration: 10,
        fill: 'forwards',
      });
      largerCursor.current!.animate(largerCursorKeyframes, {
        duration: 500,
        fill: 'forwards',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={largerCursor}
        className='pointer-events-none fixed left-0 top-0 z-50 rounded-full border border-blue-400 p-6 opacity-50'
      ></div>
      <div
        ref={smallerCursor}
        className='pointer-events-none fixed left-0 top-0 z-50 rounded-full bg-blue-400 p-2'
      ></div>
    </>
  );
};

export default CustomCursor;

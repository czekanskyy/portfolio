'use client';

import { experience } from '@/data/experience';
import Event from './Event';
import { useState } from 'react';

const EventsWrapper = () => {
  const [activeEvent, setActiveEvent] = useState();

  return (
    <div className='col-span-12 mx-auto flex w-[960px] flex-col space-y-4'>
      {experience
        .sort((a, b) => b.id - a.id)
        .map(exp => (
          <Event data={exp} />
        ))}
    </div>
  );
};

export default EventsWrapper;

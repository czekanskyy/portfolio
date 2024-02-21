'use client';

import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';

interface PropTypes {
  collapsed?: boolean;
  data: {
    id: number;
    jobName: string;
    companyName: string;
    dateStart: string;
    dateEnd: string | null;
    logo: string;
    description: string;
    skills: string[];
  };
}

const Event = ({ data, collapsed }: PropTypes) => {
  return (
    <div key={data.id} className='flex flex-col space-y-4 bg-neutral-900 p-4'>
      <div className='relative flex justify-end space-x-4'>
        <p className='absolute left-0'>
          <span className='text-neutral-400'>{data.jobName}</span> @ {data.companyName}
        </p>
        <p className='text-right text-neutral-400'>
          {data.dateStart} - {data.dateEnd ?? 'present'}
        </p>
        <button>
          <FaPlus />
        </button>
      </div>
      <div className='grid grid-cols-12 gap-4'>
        <p className='col-span-8'>{data.description}</p>
        <div className='relative col-span-4 aspect-square max-w-32 bg-white'>
          <Image src={data.logo} alt={data.companyName} fill />
        </div>
        <ul className='col-span-12 flex space-x-2'>
          {data.skills.map(skill => (
            <li className='bg-white px-2 py-1 text-neutral-900'>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Event;

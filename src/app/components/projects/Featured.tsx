import Image from 'next/image';

import code from '@/app/images/code.png';
import arrow from '@/app/images/arrow.webp';

const Featured = () => {
  return (
    <div className='relative col-span-6 row-span-2 flex flex-col space-y-2'>
      <Image src={code} alt='Code' className='mb-2 w-4/5 self-end' />
      <p className='text-sm text-blue-400'>Currently working on:</p>
      <p className='relative w-max text-3xl font-medium'>
        JSInvoices
        <Image src={arrow} alt='Arrow' className='absolute bottom-0 left-full mx-4 mb-2' />
      </p>
    </div>
  );
};

export default Featured;

import Image from 'next/image';
import Link from 'next/link';

interface PropTypes {
  large?: boolean;
  data: {
    id: number;
    title: string;
    description: string;
    cover: string;
    stack: string[];
    links: {
      www: string;
      github: string | null;
    };
  };
}

const Project = ({ data, large }: PropTypes) => {
  return (
    <div key={data.id} className={`${large ? 'col-span-7' : 'col-span-5'} overflow-hidden bg-neutral-900 shadow-lg`}>
      <div className='relative h-48 w-full bg-white text-center text-black'>
        <Image src={data.cover} fill alt={data.title} style={{ objectFit: 'cover' }} />
      </div>
      <div className='space-y-2 p-4'>
        <h3 className='text-2xl'>{data.title}</h3>
        <p>{data.description}</p>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-medium text-neutral-500'>Stack:</p>
            <ul className='flex space-x-2'>
              {data.stack.map(tech => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <p className='font-medium text-neutral-500'>Visit:</p>
              <div className='flex justify-end space-x-2'>
                <Link href={data.links.www}>WWW</Link>
                {data.links.github && <Link href={data.links.github}>Git</Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

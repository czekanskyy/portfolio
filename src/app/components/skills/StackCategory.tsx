import Image from 'next/image';
import Tag from './Tag';

interface PropTypes {
  i: number;
  data: {
    name: string;
    logo: string;
    skills: string[];
    accentColor: string;
  };
}

const StackCategory = ({ data, i }: PropTypes) => {
  return (
    <div key={i} className='col-span-4 grid grid-cols-12 grid-rows-[min-content_1fr] gap-4 border border-white p-4'>
      <div className='relative col-span-4 grid aspect-square place-content-center text-white'>
        <Image src={data.logo} alt={data.name} width={64} height={64} />
      </div>
      <p
        className='col-span-8 self-center text-4xl font-medium underline decoration-4'
        style={{ textDecorationColor: data.accentColor }}
      >
        {data.name}
      </p>
      <code className='col-span-12 font-[inherit] text-neutral-300'>
        <Tag name='ul'>
          {data.skills.map(skill => (
            <p className='ml-6'>
              <Tag name='li'>{skill}</Tag>
            </p>
          ))}
        </Tag>
      </code>
    </div>
  );
};

export default StackCategory;

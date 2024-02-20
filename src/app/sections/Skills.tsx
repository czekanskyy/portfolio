import { skillStack } from '@/data/skills';
import Image from 'next/image';

const Skills = () => {
  return (
    <section className='flex justify-center px-[20px] pt-32' id='skills'>
      <div className='grid w-[1240px] grid-cols-12 place-content-start gap-y-8'>
        <h2 className='col-span-12 text-6xl font-bold'>
          <span className='align-top text-2xl text-blue-400'>_02 </span>Skill Stack
        </h2>
        {skillStack.map((category, i) => (
          <div
            key={i}
            className='col-span-4 grid grid-cols-12 grid-rows-[min-content_1fr] gap-4 border border-white p-4'
          >
            <div className='col-span-4 aspect-square'>
              <Image src={category.logo} alt={category.name} />
            </div>
            <p className={`col-span-8 self-center text-4xl font-medium underline decoration-4 ${category.accentColor}`}>
              {category.name}
            </p>
            <code className='col-span-12 font-[inherit] text-neutral-300'>
              <p>
                &lt;<span className='text-red-400'>ul</span>&gt;
              </p>
              {category.skills.map(skill => (
                <p className='ml-6'>
                  &lt;<span className='text-red-400'>li</span>&gt;{skill}&lt;/<span className='text-red-400'>li</span>
                  &gt;
                </p>
              ))}
              <p>
                &lt;/<span className='text-red-400'>ul</span>&gt;
              </p>
            </code>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

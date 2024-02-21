import { skillStack } from '@/data/skills';
import SectionHeading from '../components/SectionHeading';
import StackCategory from '../components/skills/StackCategory';

const Skills = () => {
  return (
    <section className='flex justify-center px-[20px] pt-32' id='skills'>
      <div className='grid w-[1240px] grid-cols-12 place-content-start gap-y-8'>
        <SectionHeading number={2}>Skill Stack</SectionHeading>
        {skillStack.map((category, i) => (
          <StackCategory data={category} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

import { projects } from '@/data/projects';
import Featured from '../components/projects/Featured';
import SectionHeading from '../components/SectionHeading';
import Project from '../components/projects/Project';

const Projects = () => {
  return (
    <section className='flex justify-center px-[20px] pt-32' id='projects'>
      <div className='grid w-[1240px] grid-cols-12 place-content-start gap-8'>
        <SectionHeading number={1} small>
          My Projects
        </SectionHeading>
        <Featured />
        <p className='col-span-6'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum et in obcaecati fugit itaque culpa
          atque consectetur ipsam, architecto temporibus numquam doloribus autem quod officiis. Architecto neque
          cupiditate necessitatibus quas quidem, animi nobis? Maiores et neque omnis exercitationem blanditiis?
        </p>
        <div className='col-span-12 my-6'></div>
        {projects.map(project => (
          <Project data={project} large={project.id % 4 === 0 || project.id % 4 === 3} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

import code from '@/app/images/code.png';
import arrow from '@/app/images/arrow.webp';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Link from 'next/link';

const Projects = () => {
  return (
    <section className='flex justify-center px-[20px] pt-32' id='projects'>
      <div className='grid w-[1240px] grid-cols-12 place-content-start gap-8'>
        <h2 className='col-span-6 text-6xl font-bold'>
          <span className='align-top text-2xl text-blue-400'>#1 </span>My Projects
        </h2>
        <div className='relative col-span-6 row-span-2 flex flex-col space-y-2'>
          <Image src={code} alt='Code' className='mb-2 w-4/5 self-end' />
          <p className='text-sm text-blue-400'>Currently working on:</p>
          <p className='relative w-max text-3xl font-medium'>
            JSInvoices
            <Image src={arrow} alt='Arrow' className='absolute bottom-0 left-full mx-4 mb-2' />
          </p>
        </div>
        <p className='col-span-6'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum et in obcaecati fugit itaque culpa
          atque consectetur ipsam, architecto temporibus numquam doloribus autem quod officiis. Architecto neque
          cupiditate necessitatibus quas quidem, animi nobis? Maiores et neque omnis exercitationem blanditiis?
        </p>
        <div className='col-span-12 my-6'></div>
        {projects.map(project => (
          <div
            key={project.id}
            className={`${project.id % 4 === 0 || project.id % 4 === 3 ? 'col-span-7' : 'col-span-5'} overflow-hidden bg-neutral-900 shadow-lg`}
          >
            <div className='relative h-48 w-full bg-white text-center text-black'>
              <Image src={project.cover} fill alt={project.title} style={{ objectFit: 'cover' }} />
            </div>
            <div className='space-y-2 p-4'>
              <h3 className='text-2xl'>{project.title}</h3>
              <p>{project.description}</p>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='font-medium text-neutral-500'>Stack:</p>
                  <ul className='flex space-x-2'>
                    {project.stack.map(tech => (
                      <li>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div>
                    <p className='font-medium text-neutral-500'>Visit:</p>
                    <div className='flex justify-end space-x-2'>
                      <Link href={project.links.www}>WWW</Link>
                      {project.links.github && <Link href={project.links.github}>Git</Link>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

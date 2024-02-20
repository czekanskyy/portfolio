import { experience } from '@/data/experience';
import { FaPlus } from 'react-icons/fa6';

const Experience = () => {
  return (
    <section className='flex justify-center px-[20px] pt-32' id='experience'>
      <div className='grid w-[1240px] grid-cols-12 place-content-start gap-y-8'>
        <h2 className='col-span-12 text-6xl font-bold'>
          <span className='align-top text-2xl text-blue-400'>_03 </span>Experience
        </h2>
        <div className='col-span-12 mx-auto flex w-[960px] flex-col space-y-4'>
          {experience
            .sort((a, b) => b.id - a.id)
            .map(exp => (
              <div key={exp.id} className='flex flex-col space-y-4 bg-neutral-900 p-4'>
                <div className='relative flex justify-end space-x-4'>
                  <p className='absolute left-0'>
                    <span className='text-neutral-400'>{exp.jobName}</span> @ {exp.companyName}
                  </p>
                  <p className='text-right text-neutral-400'>
                    {exp.dateStart} - {exp.dateEnd ?? 'present'}
                  </p>
                  <button>
                    <FaPlus />
                  </button>
                </div>
                <div className='grid grid-cols-12 gap-4'>
                  <p className='col-span-8'>{exp.description}</p>
                  <div className='col-span-4 bg-white'></div>
                  <ul className='col-span-12 flex space-x-2'>
                    {exp.skills.map(skill => (
                      <li className='bg-white px-2 py-1 text-neutral-900'>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

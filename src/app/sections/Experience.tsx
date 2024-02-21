import SectionHeading from '../components/SectionHeading';
import EventsWrapper from '../components/experience/EventsWrapper';

const Experience = () => {
  return (
    <section className='flex justify-center px-[20px] pt-32' id='experience'>
      <div className='grid w-[1240px] grid-cols-12 place-content-start gap-y-8'>
        <SectionHeading number={3}>Experience</SectionHeading>
        <EventsWrapper />
      </div>
    </section>
  );
};

export default Experience;

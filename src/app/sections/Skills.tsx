const Skills = () => {
  return (
    <section className='flex justify-center px-[20px] pt-32' id='skills'>
      <div className='grid w-[1240px] grid-cols-12 place-content-start gap-y-8'>
        <h2 className='col-span-12 text-6xl font-bold'>
          <span className='align-top text-2xl text-blue-400'>#2 </span>Skill Stack
        </h2>
        <div className='col-span-4 grid grid-cols-12 grid-rows-[min-content_1fr] gap-4 border border-white p-4'>
          <div className='col-span-4 aspect-square bg-white'></div>
          <p className='col-span-8 self-center text-4xl font-medium underline decoration-yellow-400 decoration-4'>
            Project Design
          </p>
          <code className='col-span-12 font-[inherit] text-neutral-300'>
            <p>
              &lt;<span className='text-red-400'>ul</span>&gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;Figma&lt;/<span className='text-red-400'>li</span>&gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;Photoshop&lt;/<span className='text-red-400'>li</span>&gt;
            </p>
            <p>
              &lt;/<span className='text-red-400'>ul</span>&gt;
            </p>
          </code>
        </div>
        <div className='col-span-4 grid grid-cols-12 gap-4 border border-white p-4'>
          <div className='col-span-4 aspect-square bg-white'></div>
          <p className='whitespace-nowrap text-4xl font-medium underline decoration-indigo-400 decoration-4'>
            Front End
            <br />
            Development
          </p>
          <code className='col-span-12 font-[inherit] text-neutral-300'>
            <p>
              &lt;<span className='text-red-400'>ul</span>&gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;HTML&lt;/<span className='text-red-400'>li</span>&gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;CSS, SASS, Tailwind&lt;/
              <span className='text-red-400'>li</span>&gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;JavaScript&lt;/<span className='text-red-400'>li</span>
              &gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;TypeScript&lt;/<span className='text-red-400'>li</span>
              &gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;ReactJS&lt;/<span className='text-red-400'>li</span>&gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;Next.js&lt;/<span className='text-red-400'>li</span>&gt;
            </p>
            <p>
              &lt;/<span className='text-red-400'>ul</span>&gt;
            </p>
          </code>
        </div>
        <div className='col-span-4 grid grid-cols-12 gap-4 border border-white p-4'>
          <div className='col-span-4 aspect-square bg-white'></div>
          <p className='text-4xl font-medium underline decoration-green-400 decoration-4'>WordPress Development</p>
          <code className='col-span-12 font-[inherit] text-neutral-300'>
            <p>
              &lt;<span className='text-red-400'>ul</span>&gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;WordPress&lt;/<span className='text-red-400'>li</span>&gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;WooCommerce&lt;/<span className='text-red-400'>li</span>
              &gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;Elementor&lt;/<span className='text-red-400'>li</span>&gt;
            </p>
            <p className='ml-6'>
              &lt;<span className='text-red-400'>li</span>&gt;PHP&lt;/<span className='text-red-400'>li</span>&gt;
            </p>
            <p>
              &lt;/<span className='text-red-400'>ul</span>&gt;
            </p>
          </code>
        </div>
      </div>
    </section>
  );
};

export default Skills;

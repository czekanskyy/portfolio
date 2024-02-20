import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='fixed left-0 top-0 z-50 flex h-24 w-screen items-center justify-between  bg-black/50 px-8 shadow-lg shadow-black/50 backdrop-blur'>
      <Link href='/' className='text-2xl'>
        czekanski.dev{' '}
        <span className='text-blue-400'>
          &gt;
          <span className='animate-blink'>_</span>
        </span>
      </Link>
      <div className='group flex space-x-6'>
        <Link href='#projects' className='transition-all hover:!opacity-100 group-hover:opacity-75'>
          projects
          <span className='text-blue-400'>();</span>
        </Link>
        <Link href='#skills' className='transition-all hover:!opacity-100 group-hover:opacity-75'>
          skills<span className='text-blue-400'>();</span>
        </Link>
        <Link href='#experience' className='transition-all hover:!opacity-100 group-hover:opacity-75'>
          experience<span className='text-blue-400'>();</span>
        </Link>
        <Link href='#contact' className='hover:!opacity-100 group-hover:opacity-75'>
          contact<span className='text-blue-400'>();</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

const Footer = () => {
  return (
    <section className='mt-16 flex justify-center bg-neutral-900 px-[20px] py-8'>
      <div className='flex w-[1240px] justify-between text-xl'>
        <p>&copy; {new Date().getFullYear()} Dominik Czekański</p>
        <p>Made with ❤️ with Next.js</p>
      </div>
    </section>
  );
};

export default Footer;

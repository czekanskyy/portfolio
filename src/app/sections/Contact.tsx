import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className='flex justify-center px-[20px] pt-32' id='experience'>
      <div className='flex w-[1240px] flex-col place-content-start space-y-8'>
        <h2 className='text-6xl font-bold'>
          <span className='align-top text-2xl text-blue-400'>_04 </span>Contact Me
        </h2>
        <div className='flex space-x-4 self-center text-4xl'>
          <Link href='https://github.com/czekanskyy' target='_blank'>
            <FaGithub />
          </Link>
          <Link href='https://linkedin.com/in/czekanskyy' target='_blank'>
            <FaLinkedin />
          </Link>
          <Link href='https://x.com/czekanskyy' target='_blank'>
            <FaXTwitter />
          </Link>
          <Link href='https://telegram.me/czekanskyy' target='_blank'>
            <FaTelegram />
          </Link>
        </div>
        <p className='self-center text-2xl font-medium'>OR</p>
        <form className='mx-auto grid w-[960px] grid-cols-12 gap-4'>
          <input
            type='text'
            name='firstName'
            id='firstName'
            className='inp col-span-6'
            placeholder='First Name'
            required
          />
          <input
            type='text'
            name='lastName'
            id='lastName'
            className='inp col-span-6'
            placeholder='Last Name'
            required
          />
          <input
            type='email'
            name='email'
            id='email'
            className='inp col-span-12'
            placeholder='Email Address'
            required
          />
          <textarea name='message' id='message' className='inp col-span-12' placeholder='Message' required />
          <div className='col-span-12 flex justify-end'>
            <button type='submit' className='inp !bg-blue-400 !text-neutral-950'>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

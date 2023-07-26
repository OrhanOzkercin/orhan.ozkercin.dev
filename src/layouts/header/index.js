import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Github,
  Linkedin,
  Hackerrank,
  Twitter,
  Medium,
} from '../../assets/icons';
import { ThemeSwitch } from '../../components/theme-changer/theme-changer';

export const Header = () => {
  const router = useRouter();
  return (
    <div className='flex flex-row items-center justify-between sm:items-center '>
      <div className='flex items-center gap-3 '>
        <Image
          alt='Orhan Özkerçin Profile Picture'
          src='orhan-ozkercin.jpg'
          width={80}
          height={80}
          className='hidden rounded-full border-2 border-gray-500 dark:border-neutral-700 sm:inline-block'
        />
        <div className='flex w-full  flex-col justify-between '>
          <Link href={'/'}>
            <h1 className='h1 mb-0 text-xl text-light-text dark:text-dark-text sm:text-2xl'>
              Orhan Özkerçin
            </h1>
          </Link>
          <div className='flex flex-col gap-2'>
            <a
              href='mailto:orhan@ozkercin.dev'
              target='_blank'
              className='text-sm sm:text-base'
            >
              orhan@ozkercin.dev
            </a>
            <div className='flex gap-2'>
              <a
                aria-label='Twitter profile link'
                href='https://twitter.com/orhanozkercin'
                target='_blank'
              >
                <Twitter />
              </a>
              <a
                aria-label='Github profile link'
                href='https://github.com/OrhanOzkercin'
                target='_blank'
              >
                <Github />
              </a>
              <a
                aria-label='Linkedin profile link'
                href='https://www.linkedin.com/in/orhanozkercin/'
                target='_blank'
              >
                <Linkedin />
              </a>
              <a
                aria-label='Hackerrank profile link'
                href='https://www.hackerrank.com/orhanozkercin'
                target='_blank'
              >
                <Hackerrank />
              </a>
              <a
                aria-label='Twitter profile link'
                href='https://orhanozkercin.medium.com/'
                target='_blank'
              >
                <Medium />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className='mt-0'>
        <ul className='text relative flex flex-col gap-1 sm:flex-row sm:gap-8'>
          <li>
            <Link
              className={`text-sm font-semibold sm:text-lg ${
                router.pathname === '/' && 'text-primary'
              }`}
              href={'/'}
            >
              🏠 Homepage
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-semibold sm:text-lg ${
                router.pathname.includes('blog') && 'text-primary'
              }`}
              href={'/blog/posts'}
            >
              📝 Blog
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-semibold sm:text-lg ${
                router.pathname === '/about' && 'text-primary'
              }`}
              href={'/about'}
            >
              🙋‍♂️ CV
            </Link>
          </li>
          <li className='max-sm:absolute max-sm:bottom-6 max-sm:-left-10 '>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </div>
  );
};

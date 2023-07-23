import GithubCard from '@/components/social-media-cards/github-card';
import LinkedinCard from '@/components/social-media-cards/linkedin-card';
import TwitterCard from '@/components/social-media-cards/twitter-card';
import AnimatedHeading from '@/components/typografy/animated-heading';
import Image from 'next/image';
import Link from 'next/link';

function HomePage() {
  return (
    <section className='grid grid-cols-6 '>
      <div className='col-span-6 md:col-span-4'>
        <AnimatedHeading
          text={'Hellooo there!'}
          className={'text-4xl font-thin leading-tight sm:text-7xl'}
        />
        <AnimatedHeading
          text={"I'm Orhan"}
          className={`mt-4 mb-12 text-3xl font-semibold leading-tight sm:text-6xl`}
        />

        <p className='w-full text-sm sm:w-4/5 sm:text-lg'>
          I work as a frontend developer. I love working with JavaScript and
          building things using it. Apart from that, I&lsquo;m also interested
          in electronic music and chess. If you want to know more about me and
          my career, you can click on the button below. 🤙
        </p>

        <Link href='/about' className='btn btn-primary mt-8 inline-block'>
          My CV
        </Link>
      </div>
      <div className='col-span-6 mt-6 flex flex-col gap-2 md:col-span-2 md:mt-0'>
        <LinkedinCard variant={'tiny'} />
        <TwitterCard />
        <GithubCard />
      </div>
      {/* <Image
        src={"/me.png"}
        width={500}
        height={500}
        alt={"Orhan Özkerçin Profile Picture"}
        className="me absolute right-0 bottom-0 -z-10"
      /> */}
    </section>
  );
}

export default HomePage;

HomePage.Layout = 'default';

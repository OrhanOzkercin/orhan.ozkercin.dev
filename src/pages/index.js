import AnimatedHeading from "@/components/typografy/animated-heading";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <AnimatedHeading text={"Hellooo there!"} className={"text-7xl font-thin leading-tight "} />
      <AnimatedHeading text={"I'm Orhan"} className={`text-7xl  font-semibold leading-tight `} />

      <p className="w-4/5">
        I work as a frontend developer. I love working with JavaScript and building things using it. Apart from that,
        I&lsquo;m also interested in electronic music and chess. If you want to know more about me and my career, you
        can click on the button below. 🤙
      </p>

      <Link href="/about" className="btn btn-primary mt-8 inline-block">
        My CV
      </Link>

      {/* <Image
        src={"/me.png"}
        width={500}
        height={500}
        alt={"Orhan Özkerçin Profile Picture"}
        className="me absolute right-0 bottom-0 -z-10"
      /> */}
    </>
  );
}

export default HomePage;

HomePage.Layout = "default";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Hackerrank, Twitter, Medium } from "../../assets/icons";
import { ThemeSwitch } from "../../components/theme-changer/theme-changer";

export const Header = () => {
  return (
    <div className="flex items-start justify-between sm:items-center ">
      <div className="flex items-center gap-3 ">
        <Image
          alt="Orhan Özkerçin Profile Picture"
          src="/orhan-ozkercin.jpg"
          width={100}
          height={100}
          className="hidden rounded-full border-2 border-gray-500 dark:border-neutral-700 sm:inline-block"
        />
        <div className="flex flex-col gap-2">
          <Link href={"/"}>
            <h1 className="h1 mb-0 text-light-text dark:text-dark-text">Orhan Özkerçin</h1>
          </Link>
          <a href="mailto:orhan@ozkercin.dev" target="_blank">
            orhan@ozkercin.dev
          </a>
          <div className="flex gap-2">
            <a aria-label="Twitter profile link" href="https://twitter.com/orhanozkercin" target="_blank">
              <Twitter />
            </a>
            <a aria-label="Github profile link" href="https://github.com/OrhanOzkercin" target="_blank">
              <Github className="cursor" />
            </a>
            <a aria-label="Linkedin profile link" href="https://www.linkedin.com/in/orhanozkercin/" target="_blank">
              <Linkedin />
            </a>
            <a aria-label="Hackerrank profile link" href="https://www.hackerrank.com/orhanozkercin" target="_blank">
              <Hackerrank />
            </a>
            <a aria-label="Twitter profile link" href="https://orhanozkercin.medium.com/" target="_blank">
              <Medium />
            </a>
          </div>
        </div>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link className="text-lg font-semibold" href={"/"}>
              Homepage
            </Link>
          </li>
          <li>
            <Link className="text-lg font-semibold text-primary" href={"/blog/posts"}>
              Blog
            </Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </div>
  );
};

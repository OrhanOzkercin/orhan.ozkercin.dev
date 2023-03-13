import Image from "next/image";
import { Github, Linkedin, Hackerrank, Twitter, Medium } from "../../assets/icons";
import { ThemeSwitch } from "../theme-changer/theme-changer";

export const Navbar = () => {
  return (
    <nav className="flex items-start justify-between sm:items-center ">
      <div className="flex items-center gap-3 ">
        <Image
          alt="Orhan Özkerçin Profile Picture"
          src="/orhan-ozkercin.jpg"
          width={100}
          height={100}
          className="rounded-full border-2 border-gray-500 dark:border-neutral-700"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-light-text dark:text-dark-text sm:text-4xl">Orhan Özkerçin</h1>
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
      <ThemeSwitch />
    </nav>
  );
};

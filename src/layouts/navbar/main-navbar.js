import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Github, Linkedin, Hackerrank, Twitter, Medium } from "../../assets/icons";
import { ThemeSwitch } from "../../components/theme-changer/theme-changer";

export const MainNavbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center gap-3">
        <Image
          alt="Orhan Özkerçin Profile Picture"
          src="/orhan-ozkercin.jpg"
          width={100}
          height={100}
          className="hidden rounded-full border-2 border-gray-500 dark:border-neutral-700 xl:inline-block"
        />
        <div className="flex w-full flex-row items-center gap-2  xl:flex-col xl:items-start xl:justify-between">
          <Link href={"/"}>
            <h1 className="h1 mb-0 text-light-text dark:text-dark-text max-xl:text-lg">Orhan Özkerçin</h1>
          </Link>

          <a href="mailto:orhan@ozkercin.dev" target="_blank">
            orhan@ozkercin.dev
          </a>
          <ul className="flex items-center gap-2">
            <li>
              <a aria-label="Twitter profile link" href="https://twitter.com/orhanozkercin" target="_blank">
                <Twitter />
              </a>
            </li>
            <li>
              <a aria-label="Github profile link" href="https://github.com/OrhanOzkercin" target="_blank">
                <Github className="cursor" />
              </a>
            </li>
            <li>
              <a aria-label="Linkedin profile link" href="https://www.linkedin.com/in/orhanozkercin/" target="_blank">
                <Linkedin />
              </a>
            </li>
            <li>
              <a aria-label="Hackerrank profile link" href="https://www.hackerrank.com/orhanozkercin" target="_blank">
                <Hackerrank />
              </a>
            </li>
            <li>
              <a aria-label="Twitter profile link" href="https://orhanozkercin.medium.com/" target="_blank">
                <Medium />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="mt-8">
        <ul className="flex flex-row gap-3 xl:flex-col">
          <li>
            <Link className={`text-lg font-semibold ${router.pathname === "/" && "text-primary"}`} href={"/"}>
              🏠 Homepage
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg font-semibold ${router.pathname.includes("blog") && "text-primary"}`}
              href={"/blog/posts"}
            >
              📝 Blog
            </Link>
          </li>
          <li>
            <Link className={`text-lg font-semibold ${router.pathname === "/about" && "text-primary"}`} href={"/about"}>
              🙋‍♂️ CV
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

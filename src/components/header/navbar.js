import Image from "next/image";
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
          <span>orhan@ozkercin.dev</span>
        </div>
      </div>
      <ThemeSwitch />
    </nav>
  );
};

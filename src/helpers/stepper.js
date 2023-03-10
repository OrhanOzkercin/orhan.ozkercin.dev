import Image from "next/image";

export const Stepper = ({ children, className }) => {
  return (
    <ol
      className={`relative border-l border-gray-300 text-gray-500 dark:border-gray-700 dark:text-gray-400 ${className}`}
    >
      {children}
    </ol>
  );
};

export const Step = ({ children, icon, iconClassName }) => {
  return (
    <li className="mb-8 ml-6 last:mb-0">
      <span
        className={`absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-light-bg  dark:bg-dark-bg ${iconClassName}`}
      >
        <Image src={icon.path} alt={icon.alt} width={icon.width} height={icon.height} />
      </span>
      <div className="ml-3">{children}</div>
    </li>
  );
};

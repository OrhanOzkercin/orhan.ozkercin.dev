import Image from "next/image";

export const ExperienceInfoCard = ({ position, stack, companyName, description, dateStart, dateEnd, image, link }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-semibold text-light-text dark:text-dark-text">{position}</h2>
          <h3 className="color text-base font-normal text-light-text  dark:text-dark-text">
            {companyName}
            <span className="ml-2 text-xs font-thin text-gray-600 dark:text-neutral-400">
              ( {dateStart} - {dateEnd} )
            </span>
          </h3>
        </div>
      </div>
      <span className="w-full xl:w-2/3">{description}</span>
      {stack && (
        <span className="flex items-center gap-1 text-sm font-semibold text-gray-600 dark:text-neutral-400">
          Stack:
          {stack.map((item, index) => {
            return (
              <span key={index} className="text-xs font-thin">
                {item}
                {index !== stack.length - 1 && ","}
              </span>
            );
          })}
        </span>
      )}
    </div>
  );
};

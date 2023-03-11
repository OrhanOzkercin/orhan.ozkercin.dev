import { ExternalLink } from "../../../public/icons";

export const InfoCard = ({
  title,
  list,
  listName,
  subTitle,
  description,
  dateStart,
  dateEnd,
  titleLink,
  subTitleLink,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="flex items-center gap-1 text-base font-semibold text-light-text dark:text-dark-text">
            {title}
            {titleLink && (
              <a href={titleLink} target="_blank">
                <ExternalLink />
              </a>
            )}
          </h2>
          <h3 className="flex items-center gap-1  text-base font-normal text-light-text  dark:text-dark-text">
            {subTitle}
            {dateStart && dateEnd && (
              <span className="ml-2 text-xs font-thin text-gray-600 dark:text-neutral-400">
                ( {dateStart} - {dateEnd} )
              </span>
            )}
            {dateStart && !dateEnd && (
              <span className="ml-2 text-xs font-thin text-gray-600 dark:text-neutral-400">{dateStart}</span>
            )}
            {subTitleLink && (
              <a href={subTitleLink} target="_blank">
                <ExternalLink />
              </a>
            )}
          </h3>
        </div>
      </div>
      <span className="w-full xl:w-2/3">{description}</span>
      {listName && (
        <span className="flex items-center gap-1 text-sm font-semibold text-gray-600 dark:text-neutral-400">
          {listName}:&nbsp;
          {list.map((item, index) => {
            return (
              <span key={index} className="text-xs font-thin">
                {item}
                {index !== list.length - 1 && ","}
              </span>
            );
          })}
        </span>
      )}
    </div>
  );
};

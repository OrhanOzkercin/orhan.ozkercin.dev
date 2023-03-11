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
  titleClassName,
  subTitleLink,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="flex items-center gap-1 text-base font-semibold text-light-text dark:text-dark-text">
            {titleLink ? (
              <a className={`flex items-center gap-2 ${titleClassName}`} href={titleLink} target="_blank">
                {title}
                <ExternalLink />
              </a>
            ) : (
              title
            )}
          </h2>
          <h3 className="flex items-center text-base font-normal text-light-text  dark:text-dark-text">
            {subTitleLink ? (
              <a className="mr-2 flex items-center justify-start gap-2" href={subTitleLink} target="_blank">
                <span>{subTitle}</span>
                <ExternalLink />
              </a>
            ) : (
              <span className="mr-2">{subTitle}</span>
            )}
            {dateStart && dateEnd && (
              <span className="text-xs font-thin text-gray-600 dark:text-neutral-400">
                ( {dateStart} - {dateEnd} )
              </span>
            )}
            {dateStart && !dateEnd && (
              <span className="text-xs font-thin text-gray-600 dark:text-neutral-400">{dateStart}</span>
            )}
          </h3>
        </div>
      </div>
      <span className="w-full text-gray-500 dark:text-gray-400 xl:w-2/3">{description}</span>
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

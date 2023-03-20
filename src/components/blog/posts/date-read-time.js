import { formattedDate } from "@/lib/date/formating-util";

const DateReadTime = ({ date, timeToRead }) => (
  <div className="flex items-center font-mono text-sm tracking-tight text-gray-500 dark:text-dark-text/60">
    <time dateTime={date}>{formattedDate(date)}</time>
    <span className="mx-2" aria-hidden="true">
      &middot;
    </span>
    <span>{timeToRead}</span>
  </div>
);

export { DateReadTime };

import { formattedDate } from "@/lib/date/formating-util";
import Image from "next/image";

const PostHeader = (props) => {
  const { title, image, date, readTime } = props;

  return (
    <header>
      <h1 className="mb-4 text-4xl font-semibold text-light-text dark:text-dark-text">{title}</h1>
      {image && <Image src={image} alt={title} width={500} height={250} />}
      <span className="inline-block ">
        {formattedDate(date)} - {readTime}
      </span>
    </header>
  );
};

export default PostHeader;

import Image from "next/image";
import Link from "next/link";
import { DateReadTime } from "./date-read-time";

function cutAndAddEllipsis(str) {
  var words = str.split(" ");

  if (words.length > 30) {
    var trimmedString = words.slice(0, 30).join(" ") + "...";
    return trimmedString;
  } else {
    return str;
  }
}
const PostListItem = ({ post }) => {
  const { title, listImage, excerpt, date, slug, lang, readTime, cover } = post;

  const linkPath = `/blog/posts/${slug}`;
  const coverPath = `/blog/posts/${slug}/${cover}`;

  return (
    <li className="rounded-xl bg-white shadow-sm transition-all ease-in-out hover:scale-105 hover:duration-300 dark:bg-gray-700">
      <Link className=" flex h-full w-full flex-col" href={linkPath}>
        <div className="relative h-60">
          <Image
            className="rounded-tr-xl rounded-tl-xl object-cover object-center ring-offset-dark-text"
            src={coverPath}
            alt={title}
            fill={true}
          />
        </div>
        <div className="px-5 py-4">
          <h2 className="h2 mb-1">{title}</h2>
          <DateReadTime date={date} timeToRead={readTime} />
          <p className="my-5 px-1 font-normal">{cutAndAddEllipsis(excerpt)}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostListItem;

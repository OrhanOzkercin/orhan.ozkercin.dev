import { TrFlag, UsFlag } from "@/assets/icons";
import { formattedDate } from "@/lib/date/formating-util";
import Link from "next/link";

function cutAndAddEllipsis(str) {
  var words = str.split(" ");

  if (words.length > 20) {
    // join the first 20 words and add '...' at the end
    var trimmedString = words.slice(0, 20).join(" ") + "...";
    return trimmedString;
  } else {
    return str;
  }
}
const PostListItem = ({ post }) => {
  const { title, listImage, excerpt, date, slug, lang } = post;

  const linkPath = `/blog/posts/${slug}`;

  return (
    <li>
      <Link href={linkPath}>
        <div className="custom-border-gray relative mb-2 flex w-full flex-row gap-8 rounded-md border-[.5px] p-8 shadow-md dark:shadow-black/30">
          <div className="">
            <h2 className="h2 mb-1 text-2xl">{title}</h2>
            <span className="mb-3 inline-block">{formattedDate(date)}</span>
            <p>{cutAndAddEllipsis(excerpt)}</p>
          </div>
          <i className="absolute right-2 top-2">
            {lang === "en" ? <UsFlag className="h-6 w-6" /> : <TrFlag className=" h-6 w-6" />}
          </i>
        </div>
      </Link>
    </li>
  );
};

export default PostListItem;

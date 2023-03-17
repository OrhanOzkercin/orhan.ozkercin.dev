import { TrFlag, UsFlag } from "@/assets/icons";
import { formattedDate } from "@/lib/date/formating-util";
import Image from "next/image";
import Link from "next/link";

const PostListItem = ({ post }) => {
  const { title, listImage, excerpt, date, slug, lang } = post;

  const imagePath = `/blog/posts/${slug}/${listImage}`;
  const linkPath = `/blog/posts/${slug}`;

  return (
    <li>
      <Link href={linkPath}>
        <div className="custom-border-gray relative mb-2 flex w-full flex-row gap-8 rounded-md border-[.5px] p-8 shadow-md dark:shadow-black/30">
          <div className="">
            <h2 className="h2 mb-1 text-2xl">{title}</h2>
            <span className="mb-3 inline-block">{formattedDate(date)}</span>
            <p>{excerpt}</p>
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
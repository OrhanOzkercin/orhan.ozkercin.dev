import { Github, Hackerrank, Linkedin, Medium, Twitter } from "@/assets/icons";
import { formattedDate } from "@/lib/date/formating-util";
import Image from "next/image";

const PostSidebar = ({ post }) => {
  return (
    <aside className="sticky top-8 flex h-fit flex-col gap-3">
      <div className="flex flex-col gap-2">
        <div className="mb-3 flex items-center gap-4">
          <Image
            alt="Orhan Özkerçin Profile Picture"
            src="/orhan-ozkercin.jpg"
            width={50}
            height={50}
            className="rounded-full border-2 border-gray-500 dark:border-neutral-700"
          />
          <div>
            <h3 className="text-md sm:textext-xl mb-2 font-semibold text-light-text dark:text-dark-text">
              {post.author}
            </h3>
            <div className="flex gap-2">
              <a aria-label="Twitter profile link" href="https://twitter.com/orhanozkercin" target="_blank">
                <Twitter />
              </a>
              <a aria-label="Github profile link" href="https://github.com/OrhanOzkercin" target="_blank">
                <Github className="cursor" />
              </a>
              <a aria-label="Linkedin profile link" href="https://www.linkedin.com/in/orhanozkercin/" target="_blank">
                <Linkedin />
              </a>
              <a aria-label="Hackerrank profile link" href="https://www.hackerrank.com/orhanozkercin" target="_blank">
                <Hackerrank />
              </a>
              <a aria-label="Twitter profile link" href="https://orhanozkercin.medium.com/" target="_blank">
                <Medium />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p>{formattedDate(post.date)}</p>
      <p>{post.readTime}</p>
    </aside>
  );
};

export default PostSidebar;

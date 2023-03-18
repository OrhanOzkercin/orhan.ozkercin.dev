import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./post-header";
import Image from "next/image";

const PostContent = ({ post }) => {
  const imagePath = post.coverImage && `/blog/posts/${post.slug}/${post.coverImage}`;

  const customRenderers = {
    h1(h1) {
      return <h1 className="h1 ">{h1.children}</h1>;
    },
    h2(h2) {
      return <h2 className="h2">{h2.children}</h2>;
    },
    h3(h3) {
      return <h3 className="h3">{h3.children}</h3>;
    },
    blockquote(quote) {
      return (
        <blockquote className="my-8 border-l-4  border-sky-700 pl-3 text-lg italic leading-9">
          {quote.children}
        </blockquote>
      );
    },
    hr(hr) {
      return (
        <div className="flex justify-center gap-3">
          <div className="h-1 w-1 rounded-full bg-sky-700"></div>
          <div className="h-1 w-1 rounded-full bg-sky-700"></div>
          <div className="h-1 w-1 rounded-full bg-sky-700"></div>
          <div className="h-1 w-1 rounded-full bg-sky-700"></div>
          <div className="h-1 w-1 rounded-full bg-sky-700"></div>
          <div className="h-1 w-1 rounded-full bg-sky-700"></div>
          <div className="h-1 w-1 rounded-full bg-sky-700"></div>
        </div>
      );
    },
    li(li) {
      return <li className="my-2 before:mr-2 before:h-4 before:w-4 before:content-['👉']">{li.children}</li>;
    },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <figure>
            <Image
              src={`/blog/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              className="h-full w-full object-cover"
              width={700}
              height={700}
            />
            <figcaption className="mx-auto mt-1 text-center text-xs">{image.properties.title}</figcaption>
          </figure>
        );
      }
      return <p className="my-8 text-lg leading-9">{paragraph.children}</p>;
    },
    a(link) {
      return (
        <a href={link.href} className="text-sky-700 hover:underline" target={"_blank"}>
          {link.children}
        </a>
      );
    },
    code(code) {
      if (code.inline) {
        return (
          <code className="rounded-sm bg-gray-200/50 p-1 font-serif  italic dark:bg-neutral-900/30">
            {code.children[0]}
          </code>
        );
      }
      return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {code.children[0]}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className="w-full lg:w-2/3">
      <PostHeader title={post.title} image={imagePath} date={post.date} readTime={post.readTime} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;

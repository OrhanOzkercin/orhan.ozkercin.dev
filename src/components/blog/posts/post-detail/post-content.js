import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import Image from "next/image";

const PostContent = ({ post }) => {
  const imagePath = post.coverImage && `/blog/posts/${post.slug}/${post.coverImage}`;

  const customRenderers = {
    h1(h1) {
      return <h1 className="text-4xl font-bold ">{h1.children}</h1>;
    },
    h2(h2) {
      return <h2 className="h2">{h2.children}</h2>;
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
              className="w-full"
              width={500}
              height={300}
            />
            <figcaption className="mx-auto mt-1 text-center text-xs">{image.properties.title}</figcaption>
          </figure>
        );
      }
      return <p className="my-8 text-lg leading-9">{paragraph.children}</p>;
    },

    // code(code) {
    //   const { className, children } = code;
    //   const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
    //   return <SyntaxHighlighter style={atomDark} language={language} children={children} />;
    // },
  };

  return (
    <article className="w-full md:w-2/3">
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;

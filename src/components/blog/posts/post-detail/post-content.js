import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import Image from "next/image";

const PostContent = ({ post }) => {
  const imagePath = post.coverImage && `/blog/posts/${post.slug}/${post.coverImage}`;

  const customRenderers = {
    h1(h1) {
      return <h1 className="text-4xl font-bold ">{h1.children}</h1>;
    },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div>
            <Image
              src={`/blog/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p className="my-8">{paragraph.children}</p>;
    },

    // code(code) {
    //   const { className, children } = code;
    //   const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
    //   return <SyntaxHighlighter style={atomDark} language={language} children={children} />;
    // },
  };

  return (
    <article className="w-full sm:w-3/4">
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;

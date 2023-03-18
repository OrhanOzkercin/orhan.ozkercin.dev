import PostContent from "@/components/blog/posts/post-detail/post-content";
import PostSidebar from "@/components/blog/posts/post-detail/sidebar";
import DisqusComments from "@/components/disqus";
import Meta from "@/components/meta";
import { getPostData, getPostFiles } from "@/lib/posts/post-util";
import { DiscussionEmbed } from "disqus-react";
import { useEffect, useState } from "react";

const PostDetailPage = ({ post }) => {
  const [showDisqus, setShowDisqus] = useState(false);
  useEffect(() => {
    setShowDisqus(true);
  }, []);

  return (
    <>
      <Meta
        title={post.title}
        description={post.excerpt}
        url={`https://orhan.ozkercin.com/blog/posts/${post.slug}`}
        image={post.image}
      >
        <meta name="author" content="Orhan Özkerçin" />
      </Meta>

      <div className="flex flex-col gap-5 lg:flex-row">
        <PostContent post={post} />
        <PostSidebar post={post} />
      </div>
      <DiscussionEmbed
        shortname="orhan-ozkercin"
        config={{
          url: post.slug,
          identifier: post.slug, // Single post id
          title: post.title, // Single post title
        }}
      />
    </>
  );
};

export async function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 1800,
  };
}

export default PostDetailPage;

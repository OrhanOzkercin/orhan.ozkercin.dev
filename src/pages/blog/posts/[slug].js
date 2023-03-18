import PostContent from "@/components/blog/posts/post-detail/post-content";
import PostSidebar from "@/components/blog/posts/post-detail/sidebar";
import GisqusComments from "@/components/gisqus";

import Meta from "@/components/meta";
import { getPostData, getPostFiles } from "@/lib/posts/post-util";

const PostDetailPage = ({ post }) => {
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
      <div className="mt-10 w-full lg:w-2/3">
        <GisqusComments />
      </div>
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

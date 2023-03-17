import PostContent from "@/components/blog/posts/post-detail/post-content";
import PostSidebar from "@/components/blog/posts/post-detail/sidebar";
import { getPostData, getPostFiles } from "@/lib/posts/post-util";
import Head from "next/head";

const PostDetailPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="og:title" content={post.title} />
        <meta name="description" content={post.excerpt} />
        <meta name="og:url" content={`https://orhan.ozkercin.com/blog/posts/${post.slug}`} />
        <meta name="og:description" content={post.excerpt} />
        <meta name="og:image" content={`https://orhan.ozkercin.com/${post.image}`} />
        <meta name="author" content="Orhan Özkerçin" />
      </Head>
      <div className="flex flex-col gap-5 md:flex-row">
        <PostContent post={post} />
        <PostSidebar post={post} />
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

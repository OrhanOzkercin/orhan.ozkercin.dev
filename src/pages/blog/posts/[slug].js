import PostContent from "@/components/blog/posts/post-detail/post-content";
import PostSidebar from "@/components/blog/posts/post-detail/sidebar";
import { formattedDate } from "@/lib/date/formating-util";
import { getPostData, getPostFiles } from "@/lib/posts/post-util";

const PostDetailPage = ({ post }) => {
  console.log("PostDetailPage -> post:", post);
  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <PostContent post={post} />
      <PostSidebar post={post} />
    </div>
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

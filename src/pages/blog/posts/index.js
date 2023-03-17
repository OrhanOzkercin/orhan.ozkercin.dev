import PostList from "@/components/blog/posts/post-list";
import { getAllPosts } from "@/lib/posts/post-util";

const PostListPage = ({ posts }) => {
  return <PostList posts={posts} />;
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default PostListPage;

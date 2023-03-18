import PostListItem from "./post-list-item";

const PostList = ({ posts }) => {
  return (
    <section className="mb-2">
      <ol className="grid grid-cols-1 gap-3 2xl:grid-cols-2">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </ol>
    </section>
  );
};

export default PostList;

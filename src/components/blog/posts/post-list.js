import PostListItem from "./post-list-item";

const PostList = ({ posts }) => {
  return (
    <section className="mb-2">
      <ol className="grid grid-cols-2 gap-3">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </ol>
    </section>
  );
};

export default PostList;

import PostListItem from "./post-list-item";

const PostList = ({ posts }) => {
  return (
    <section className="container-inner mb-2">
      <ol className="grid grid-cols-1 justify-items-stretch gap-12 md:grid-cols-2  ">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </ol>
    </section>
  );
};

export default PostList;

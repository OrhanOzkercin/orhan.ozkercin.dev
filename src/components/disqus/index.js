import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  console.log("DisqusComments -> post:", post);

  return (
    <div>
      <DiscussionEmbed
        shortname="orhan-ozkercin"
        config={{
          url: post.slug,
          identifier: post.slug, // Single post id
          title: post.title, // Single post title
          language: "en_EN", //e.g. for Traditional Chinese (Taiwan)
        }}
      />
    </div>
  );
};
export default DisqusComments;

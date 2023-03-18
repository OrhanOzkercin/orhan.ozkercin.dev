import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  console.log("DisqusComments -> post:", post);
  const disqusShortname = "@disqus_ODXgyxAwBT";
  const disqusConfig = {
    url: post.slug,
    identifier: post.slug, // Single post id
    title: post.title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed
        shortname="orhanozkercin"
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

import Head from "next/head";

const Meta = (props) => {
  const { title, description, type, url, image } = props;
  const defaultTitle = "Orhan Özkerçin";
  const defaultDescription =
    "With over 3 years of experience in frontend development, I am a skilled developer specializing in JavaScript. My passion for building visually stunning and functional user interfaces has driven me to become proficient in several popular frameworks, including Angular, VueJS, and ReactJS.";
  const defaultUrl = "https://orhan.ozkercin.dev";
  const defaultImage = "https://orhan.ozkercin.dev/social-bg.png";
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title key="title">{title || defaultTitle}</title>
      <meta name="site_name" content="Orhan Özkerçin Personal Website" />
      <meta key="description" name="description" content={description || defaultDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:title" name="og:title" content={title || defaultTitle} />
      <meta property="og:description" name="og:description" content={description || defaultDescription} />
      <meta property="og:url" name="og:url" content={url || defaultUrl} />
      <meta property="og:image" name="og:image" content={image || defaultImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@orhanozkercin" />
      <meta name="twitter:creator" content="@orhanozkercin" />
      <meta name="twitter:title" content="Orhan Özkerçin" />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      {props.children}
    </Head>
  );
};

export default Meta;

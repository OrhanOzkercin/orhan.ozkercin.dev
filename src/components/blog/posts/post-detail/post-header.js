import Image from "next/image";

const PostHeader = (props) => {
  const { title, image } = props;

  return (
    <header>
      <h1 className="mb-8 text-4xl font-semibold text-light-text dark:text-dark-text">{title}</h1>
      {image && <Image src={image} alt={title} width={500} height={250} />}
    </header>
  );
};

export default PostHeader;

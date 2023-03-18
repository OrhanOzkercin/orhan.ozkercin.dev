import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
const GisqusComments = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="OrhanOzkercin/orhan.ozkercin.dev"
      repoId="R_kgDOJIDNOQ"
      category="Comments"
      categoryId="DIC_kwDOJIDNOc4CU93F"
      mapping="title"
      strict="0"
      theme={"transparent_dark"}
      lang="en"
      crossorigin="orhan.ozkercin.dev"
      term="Welcome to Orhan Ozkercin component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      loading="lazy"
    />
  );
};
export default GisqusComments;

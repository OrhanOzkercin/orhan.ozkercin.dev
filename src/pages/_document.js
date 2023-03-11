import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@orhanozkercin" />
        <meta name="twitter:creator" content="@orhanozkercin" />
        <meta property="og:url" content="http://orhan.ozkercin.dev" />
        <meta property="og:title" content="Orhan Özkerçin CV" />
        <meta
          property="og:description"
          content="With over 3 years of experience in frontend development, I am a skilled developer specializing in JavaScript. My passion for building visually stunning and functional user interfaces has driven me to become proficient in several popular frameworks, including Angular, VueJS, and ReactJS."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

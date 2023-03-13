import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@orhanozkercin" />
        <meta name="twitter:creator" content="@orhanozkercin" />
        <meta name="twitter:title" content="Orhan Özkerçin" />
        <meta name="twitter:image" content="social-bg.png" />
        <meta
          name="twitter:description"
          content="With over 3 years of experience in frontend development, I am a skilled developer specializing in JavaScript. My passion for building visually stunning and functional user interfaces has driven me to become proficient in several popular frameworks, including Angular, VueJS, and ReactJS."
        />
        <meta name="twitter:image" content="https://orhan.ozkercin.dev/social-bg.png" />
        <meta property="og:url" content="http://orhan.ozkercin.dev" />
        <meta property="og:title" content="Orhan Özkerçin" />
        <meta
          property="og:description"
          content="With over 3 years of experience in frontend development, I am a skilled developer specializing in JavaScript. My passion for building visually stunning and functional user interfaces has driven me to become proficient in several popular frameworks, including Angular, VueJS, and ReactJS."
        />
        <meta property="og:image" content="social-bg.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

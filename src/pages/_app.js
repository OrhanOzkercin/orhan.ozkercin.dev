import { DefaultLayout } from "@/layouts/default-layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="site_name" content="Orhan Özkerçin Personal Website" />
        <meta property="og:url" content="http://orhan.ozkercin.dev" />
        <meta property="og:title" content="Orhan Özkerçin" />
        <meta
          property="og:description"
          content="With over 3 years of experience in frontend development, I am a skilled developer specializing in JavaScript. My passion for building visually stunning and functional user interfaces has driven me to become proficient in several popular frameworks, including Angular, VueJS, and ReactJS."
        />
        <meta property="og:image" content="social-bg.png" />
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
      </Head>
      <GoogleAnalytics strategy="lazyOnload" trackPageViews />
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

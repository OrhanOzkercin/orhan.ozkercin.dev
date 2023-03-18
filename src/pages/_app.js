import Meta from "@/components/meta";
import { DefaultLayout } from "@/layouts/default-layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <GoogleAnalytics strategy="lazyOnload" trackPageViews />
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

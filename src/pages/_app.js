import { DefaultLayout } from "@/layouts/default-layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics strategy="lazyOnload" trackPageViews />
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

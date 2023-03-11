import { DefaultLayout } from "@/layouts/default-layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3XWJXBWTG7" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3XWJXBWTG7');
        `}
      </Script>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

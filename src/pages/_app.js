import { DefaultLayout } from "@/layouts/default-layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

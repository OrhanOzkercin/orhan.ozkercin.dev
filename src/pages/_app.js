import Meta from '@/components/meta';
import { CvLayout } from '@/layouts/cv-layout';
import { Analytics } from '@vercel/analytics/react';

import { DefaultLayout } from '@/layouts/default-layout';
import '@/styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const layouts = {
  default: DefaultLayout,
  cv: CvLayout,
};

export default function App({ Component, pageProps }) {
  const Layout =
    layouts[Component.Layout || 'default'] || ((children) => <>{children}</>);

  return (
    <>
      <Meta />
      <ThemeProvider attribute='class' enableSystem={false} defaultTheme='dark'>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </>
  );
}

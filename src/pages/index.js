import Head from "next/head";
import About from "./about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Orhan Özkerçin</title>
        <meta name="description" content="Orhan Ozkercin personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
}

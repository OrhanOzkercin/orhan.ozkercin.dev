import { Rubik } from "next/font/google";
import Footer from "./footer";
import { Header } from "./header/index.js";

const rubik = Rubik({ subsets: ["latin"] });
export const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="container-inner mx-auto mb-20 mt-10 px-4">
        <Header />
      </div>
      <main className={`${rubik.className} container-inner px-4`}>{children}</main>
      <Footer />
    </>
  );
};

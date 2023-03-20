import { Rubik } from "next/font/google";
import Footer from "./footer";
import { MainNavbar } from "./navbar/main-navbar";

const rubik = Rubik({ subsets: ["latin"] });
export const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="container  mx-auto mt-20 flex w-full justify-center gap-12">
        <header className="sticky top-0 h-fit w-96">
          <MainNavbar />
        </header>
        <main className={`${rubik.className} container-inner  mx-0`}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

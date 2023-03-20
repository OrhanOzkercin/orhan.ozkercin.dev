import { Rubik } from "next/font/google";
import Footer from "./footer";
import { MainNavbar } from "./navbar/main-navbar";

const rubik = Rubik({ subsets: ["latin"] });
export const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto mt-20 flex w-full flex-col justify-center gap-12 sm:flex-row">
        <header className="relative top-0 h-fit w-full sm:sticky sm:w-96">
          <MainNavbar />
        </header>
        <main className={`${rubik.className} sm:container-inner  mx-0`}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

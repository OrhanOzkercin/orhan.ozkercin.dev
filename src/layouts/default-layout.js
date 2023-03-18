import { Header } from "@/layouts/header";
import { Rubik } from "next/font/google";
import Footer from "./footer";

const rubik = Rubik({ subsets: ["latin"] });
export const DefaultLayout = ({ children }) => {
  return (
    <div className="container mx-auto pt-12">
      <Header />
      <main className={`${rubik.className} mt-20`}>{children}</main>
      <Footer />
    </div>
  );
};

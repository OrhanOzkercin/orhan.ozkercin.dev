import { Header } from "@/layouts/navbar/cv-navbar";
import { Rubik } from "next/font/google";
import Footer from "./footer";

const rubik = Rubik({ subsets: ["latin"] });
export const CvLayout = ({ children }) => {
  return (
    <div className="container mx-auto  px-4 pt-12">
      <Header />
      <main className={`${rubik.className} mt-20`}>{children}</main>
      <Footer />
    </div>
  );
};

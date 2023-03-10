import { Header } from "@/components/header/hader";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
export const DefaultLayout = ({ children }) => {
  return (
    <div className="container mx-auto py-12 px-6">
      <Header />
      <main className={`${rubik.className}`}>{children}</main>
    </div>
  );
};

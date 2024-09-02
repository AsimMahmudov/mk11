import { FC, ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./LayoutPage.module.scss";

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
  return (
    <>
      <div className={scss.LayoutPage}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutPage;

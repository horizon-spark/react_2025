import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

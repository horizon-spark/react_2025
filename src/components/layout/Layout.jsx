import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

import styles from "./Layout.module.css";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

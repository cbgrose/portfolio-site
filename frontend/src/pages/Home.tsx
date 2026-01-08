import styles from "./Home.module.css";

// CHANGED IMPORT HERE:
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";

export const Home = () => {
  return (
    <main className={styles.page}>
      <Hero />
      <Navbar />
    </main>
  );
};

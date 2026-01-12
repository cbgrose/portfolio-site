import { BioContainer } from "../components/About/BioContainer";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "./About.module.css";

export const About = () => {
  return (
    <main className={styles.page}>
      <Navbar />
      <BioContainer />
    </main>
  );
};

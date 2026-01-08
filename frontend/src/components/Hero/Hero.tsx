import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.largeText}>Christian</h1>
      <div className={styles.middleRow}>
        <p className={styles.smallText}>Design Engineer</p>
        <p className={styles.smallText}>Imperial College London</p>
      </div>
      <h1 className={styles.largeText}>Grose</h1>
    </section>
  );
};

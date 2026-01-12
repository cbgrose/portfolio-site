import type { BioImage } from "../../data/aboutData";
import styles from "./BioDisplay.module.css";

interface BioDisplayProps {
  content: BioImage;
}

export const BioDisplay = ({ content }: BioDisplayProps) => {
  return (
    <div className={styles.displayContainer}>
      <img
        key={content.src}
        src={content.src}
        alt={content.alt}
        className={styles.bioImage}
      />
      <p className={styles.bioCaption}>{content.caption}</p>
    </div>
  );
};

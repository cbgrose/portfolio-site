import { BioTrigger } from "./BioTrigger";
import { bioStory, bioData } from "../../data/aboutData";
import styles from "./BioStory.module.css";

interface BioStoryProps {
  activeId: string;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

export const BioStory = ({ activeId, onSelect, onHover }: BioStoryProps) => {
  const parts = bioStory.trim().split(/\[(.*?)\]/g);

  return (
    <p className={styles.storyText}>
      {parts.map((part, index) => {
        const entry = bioData[part.toLowerCase()];
        if (entry) {
          return (
            <BioTrigger
              key={index}
              label={part}
              buttonId={part.toLowerCase()}
              activeId={activeId}
              onSelect={onSelect}
              onHover={onHover}
            />
          );
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </p>
  );
};

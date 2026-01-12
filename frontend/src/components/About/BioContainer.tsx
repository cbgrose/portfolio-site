import { useState } from "react";
import { bioData } from "../../data/aboutData";
import { BioStory } from "./BioStory";
import { BioDisplay } from "./BioDisplay";
import styles from "./BioContainer.module.css";

export const BioContainer = () => {
  const [activeID, setActiveID] = useState<string>("christian");

  const [hoverId, setHoverId] = useState<string | null>(null);

  const displayId = hoverId || activeID;

  return (
    <section className={styles.bioContainer} id="about">
      <BioStory
        activeId={activeID}
        onSelect={setActiveID}
        onHover={setHoverId}
      />
      <BioDisplay content={bioData[displayId]} />
    </section>
  );
};

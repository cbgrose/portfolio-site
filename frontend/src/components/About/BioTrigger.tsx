import styles from "./BioTrigger.module.css";

interface BioTriggerProps {
  label: string;
  buttonId: string;
  activeId: string;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

export const BioTrigger = ({
  label,
  buttonId,
  activeId,
  onSelect,
  onHover,
}: BioTriggerProps) => {
  const isActive = buttonId === activeId;

  return (
    <span
      className={`${styles.trigger} ${isActive ? styles.active : ""}`}
      onClick={() => onSelect(buttonId)}
      onMouseEnter={() => onHover(buttonId)}
      onMouseLeave={() => onHover(null)}
    >
      {label}
    </span>
  );
};

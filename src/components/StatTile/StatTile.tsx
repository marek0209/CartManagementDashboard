import styles from "./StatTile.module.css";

type StatTileProps = {
  label: string;
  value: string | number;
  emoji: string;
};

const StatTile = ({ label, value, emoji }: StatTileProps) => {
  return (
    <div className={styles.tile}>
      <div className={styles.tileDescription}>
        {emoji}
        {label}
      </div>
      <div className={styles.tileStats}>{value}</div>
    </div>
  );
};

export default StatTile;

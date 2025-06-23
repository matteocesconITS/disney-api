import styles from "./SearchBar.module.css";

export default function SearchBar({ research, setResearch }) {
  return (
    <div className={styles["search-bar-container"]}>
      <input
        className={styles["search-bar"]}
        type="text"
        placeholder="Search characters..."
        value={research}
        onChange={(e) => setResearch(e.target.value)}
      />
    </div>
  );
}

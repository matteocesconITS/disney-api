import styles from "./EmptyList.module.css";

export default function EmptyList() {
  return (
    <div className={styles["message-container"]}>
      <h1 className={styles["empty-list-message"]}>The list is empty</h1>
    </div>
  );
}

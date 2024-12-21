import styles from "./style.module.css";

const ActivityCard = () => {
  return (
    <div className={styles.card}>
      <p className={styles.cardContent}>
        <strong>Trip: </strong>
      </p>
      <p className={styles.cardContent}>
        <strong>Activity Spot:</strong>
      </p>
      {Array(Number(rating)).fill('⭐').join('')}
      <p className={styles.cardContent}>
        <strong>Rating:</strong>
      </p>
      <p className={styles.cardContent}>
        <strong>Review:</strong>
      </p>
    </div>
  );
};

export default ActivityCard;
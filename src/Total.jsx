import styles from "./Total.module.css";

function Total() {
  return (
    <div className={styles.totalExpencesContainer}>
      <div className={styles.totalExpences}>
        <h6>Total this month</h6>
        <h1>$478.33</h1>
      </div>

      <div className={styles.totalExpencesDifference}>
        <h5>+2.4%</h5>
        <h6>from last month</h6>
      </div>
    </div>
  );
}

export default Total;

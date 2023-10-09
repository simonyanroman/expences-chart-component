import styles from "./BarChartItem.module.css";

function mapToRange(
  num,
  maxExpence,
  minExpence = 0,
  minRange = 0,
  maxRange = 100
) {
  return (
    ((num - minExpence) * (maxRange - minRange)) /
      (maxExpence - minExpence) +
    minRange
  );
}

function BarChartItem({ item, maxExpence }) {
  return (
    <div className={styles.barContainer}>
      <div
        className={styles.barWrapper}
        style={
          item.amount === maxExpence
            ? {
                height: mapToRange(item.amount, maxExpence) + "%",
              }
            : { height: mapToRange(item.amount, maxExpence) + "%" }
        }>
        <div
          className={styles.bar}
          style={
            item.amount === maxExpence
              ? {
                  backgroundColor: "var(--cyan)",
                }
              : {}
          }></div>
        <div className={styles.barModal}>
          <h7>${item.amount}</h7>
        </div>
      </div>

      <h6>{item.day}</h6>
    </div>
  );
}

export default BarChartItem;

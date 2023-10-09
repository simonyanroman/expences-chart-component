import styles from "./Chart.module.css";

import Total from "./Total";
import BarChartItem from "./BarChartItem";
import { useEffect, useState } from "react";

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

function findMax(array) {
  const result = array.map((item) => item.amount);
  return Math.max(...result);
}

function Chart() {
  const [maxExpence, setMaxExpence] = useState(0);

  useEffect(() => {
    setMaxExpence(findMax(data));
  }, []);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartTitle}>
        <h3>Spending - Last 7 days</h3>
      </div>

      <div className={styles.barChart}>
        {data.map((item, id) => (
          <BarChartItem
            key={id}
            item={item}
            maxExpence={maxExpence}
          />
        ))}
      </div>
      <hr className={styles.devider} />
      <Total />
    </div>
  );
}

export default Chart;

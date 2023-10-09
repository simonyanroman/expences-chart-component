import Balance from "./Balance";
import Chart from "./Chart";

import styles from "./Summary.module.css";

function Summary() {
  return (
    <div className={styles.summary}>
      <Balance />
      <Chart />
    </div>
  );
}

export default Summary;

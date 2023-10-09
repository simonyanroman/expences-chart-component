import styles from "./Balance.module.css";
import Logo from "./Logo";

function Balance() {
  return (
    <div className={styles.balanceContainer}>
      <div className={styles.balance}>
        <h4>My balance</h4>
        <h2>$921.48</h2>
      </div>
      <Logo />
    </div>
  );
}

export default Balance;

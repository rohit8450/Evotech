import { FunctionComponent } from "react";
import styles from "./Reports.module.css";

const Reports: FunctionComponent = () => {
  return (
    <div className={styles.carts}>
      <div className={styles.cart4}>
        <div className={styles.background} />
        <div className={styles.bugReports}>Bug Reports</div>
        <img
          className={styles.stockholmIconsCommunicatio}
          alt=""
          src="/stockholm-icons--communication--urgent-mail@2x.png"
        />
      </div>
      <div className={styles.cart3}>
        <div className={styles.background1} />
        <div className={styles.itemOrders}>Item Orders</div>
        <img className={styles.compilingIcon} alt="" src="/compiling1@2x.png" />
      </div>
      <div className={styles.cart2}>
        <div className={styles.background2} />
        <div className={styles.newUsers}>New Users</div>
        <img className={styles.addUserIcon} alt="" src="/adduser@2x.png" />
      </div>
      <div className={styles.cart1}>
        <div className={styles.background3} />
        <div className={styles.equalizer}>
          <div className={styles.bound} />
          <div className={styles.rectangle62Copy} />
          <div className={styles.rectangle62Copy2} />
          <div className={styles.rectangle62Copy4} />
          <div className={styles.rectangle62Copy3} />
        </div>
        <div className={styles.weeklySales}>Weekly Sales</div>
      </div>
    </div>
  );
};

export default Reports;

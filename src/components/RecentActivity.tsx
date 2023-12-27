import { FunctionComponent } from "react";
import styles from "./RecentActivity.module.css";

const RecentActivity: FunctionComponent = () => {
  return (
    <div className={styles.widget2}>
      <div className={styles.item4}>
        <div className={styles.outlinesKeepYou}>
          Outlines keep you honest. Indulging in poorly driving and keep
          structure keep you honest great
        </div>
        <div className={styles.item4Child} />
        <div className={styles.item4Item} />
        <div className={styles.div}>16:50</div>
      </div>
      <div className={styles.item3}>
        <div className={styles.makeDepositUsdContainer}>
          <span>{`Make deposit `}</span>
          <span className={styles.usd700}>USD 700</span>
          <span> to ESL</span>
        </div>
        <div className={styles.item3Child} />
        <div className={styles.item3Item} />
        <div className={styles.div1}>14:37</div>
      </div>
      <div className={styles.item2}>
        <img className={styles.userIcon} alt="" src="/user@2x.png" />
        <div className={styles.makeDepositUsdContainer}>AEOL meeting with</div>
        <div className={styles.item2Child} />
        <div className={styles.item2Item} />
        <div className={styles.div1}>10:00</div>
      </div>
      <div className={styles.item1}>
        <div className={styles.outlinesKeepYou}>
          Outlines keep you honest. Indulging in poorly driving and keep
          structure
        </div>
        <div className={styles.item1Child} />
        <div className={styles.item1Item} />
        <div className={styles.div}>08:42</div>
      </div>
      <div className={styles.head}>
        <div className={styles.sales}>890,344 Sales</div>
        <div className={styles.recentActivities}>Recent Activities</div>
        <div className={styles.dots}>
          <div className={styles.dotsChild} />
          <div className={styles.dotsItem} />
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;

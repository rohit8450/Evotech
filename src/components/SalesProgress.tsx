import { FunctionComponent } from "react";
import styles from "./SalesProgress.module.css";

const SalesProgress: FunctionComponent = () => {
  return (
    <div className={styles.widget5}>
      <div className={styles.item5}>
        <div className={styles.phpSqliteArtisan}>
          PHP, SQLite, Artisan CLIмм
        </div>
        <div className={styles.brivibaSaas}>Briviba SaaS</div>
        <img className={styles.icon} alt="" src="/icon@2x.png" />
      </div>
      <div className={styles.item4}>
        <div className={styles.phpSqliteArtisan}>
          PHP, SQLite, Artisan CLIмм
        </div>
        <div className={styles.brivibaSaas}>Briviba SaaS</div>
        <img className={styles.icon} alt="" src="/icon1@2x.png" />
      </div>
      <div className={styles.item3}>
        <div className={styles.phpSqliteArtisan}>
          PHP, SQLite, Artisan CLIмм
        </div>
        <div className={styles.brivibaSaas}>Briviba SaaS</div>
        <img className={styles.icon} alt="" src="/icon2@2x.png" />
      </div>
      <div className={styles.item2}>
        <div className={styles.phpSqliteArtisan}>
          PHP, SQLite, Artisan CLIмм
        </div>
        <div className={styles.brivibaSaas}>Briviba SaaS</div>
        <img className={styles.icon} alt="" src="/icon3@2x.png" />
      </div>
      <div className={styles.item1}>
        <div className={styles.phpSqliteArtisan}>
          PHP, SQLite, Artisan CLIмм
        </div>
        <div className={styles.brivibaSaas}>Briviba SaaS</div>
        <img className={styles.icon} alt="" src="/icon4@2x.png" />
      </div>
      <div className={styles.head}>
        <div className={styles.dots}>
          <div className={styles.dotsChild} />
          <div className={styles.dotsItem} />
        </div>
        <div className={styles.salesProgress}>Sales Progress</div>
      </div>
    </div>
  );
};

export default SalesProgress;

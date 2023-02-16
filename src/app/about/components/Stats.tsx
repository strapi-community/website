import styles from "./Stats.module.scss";

export const Stats = () => {
  return (
    <div className={styles.container}>
      <h2 className="sc-heading--two mb-16">Our story in numbers.</h2>

      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <h3 className={styles.value}>2015</h3>
          <p className={styles.label}>Strapi founded</p>
        </div>

        <div className="col-span-1">
          <h3 className={styles.value}>1.2k</h3>
          <p className={styles.label}>Plugins Developed</p>
        </div>

        <div className="col-span-1">
          <h3 className={styles.value}>$42k</h3>
          <p className={styles.label}>Reward Awarded</p>
        </div>

        <div className="col-span-1">
          <h3 className={styles.value}>3.5k</h3>
          <p className={styles.label}>Members</p>
        </div>
      </div>
    </div>
  );
};

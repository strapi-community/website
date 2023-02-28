import Image from "next/image";
import styles from "./GetStarted.module.scss";

export const GetStarted = () => {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image
          src="/bounty/start-plugin-journey.svg"
          alt=""
          width={450}
          height={286}
          className={styles.image}
        />
      </figure>

      <div className="flex flex-col justify-center md:flex-[3] lg:flex-1">
        <h2 className="sc-heading--three mb-4">Start your plugin journey</h2>
        <p className="mb-6">
          Check out the available plugin resources that will help you to develop
          your plugin or provider and get it listed on the marketplace.
        </p>
        <div>
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

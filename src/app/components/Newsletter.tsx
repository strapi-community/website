import Image from "next/image";
import { clsx } from "clsx";
import styles from "./Newsletter.module.scss";
import inputStyles from "@/components/TextInput/index.module.scss";

export const Newsletter = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/paper-plane.svg"
        alt="Paper place decoration"
        width={125}
        height={97}
        className={styles.paperPlane}
      />
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h2 className={styles.title}>Join our newsletter</h2>
          <p className={styles.description}>
            Developers subscribed to our newsletter are more likely to earn a
            bounty
          </p>

          <form className="flex flex-col">
            <input
              type="email"
              placeholder="What's your email?"
              className={clsx(inputStyles.input, styles.inputBgWhite, "mb-4")}
            />
            <button type="submit" className="sc__btn bg-secondary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

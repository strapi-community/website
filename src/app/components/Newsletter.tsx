import Image from "next/image";
import styles from "./Newsletter.module.scss";

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
          <h2 className={"sc-heading--three text-center text-white mb-2"}>
            Join our newsletter
          </h2>
          <p className={styles.description}>
            Developers subscribed to our newsletter are more likely to earn a
            bounty
          </p>

          <form className="flex flex-col">
            <input
              type="email"
              placeholder="What's your email?"
              className="sc__input bg-white mb-4"
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

import Image from "next/image";
import { clsx } from "clsx";
import styles from "./WorkProcessCard.module.scss";

interface Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  step: number;
}

export const WorkProcessCard = ({
  imageSrc,
  imageAlt = "",
  title,
  description,
  step = 1,
}: Props) => {
  const isEven = step % 2 === 0;
  return (
    <div className="sc-grid">
      <div className={clsx("col-span-6", isEven && "col-start-7")}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={586}
          height={440}
          className={styles.image}
        />
      </div>

      <div
        className={clsx([
          "col-span-4 flex flex-col justify-center",
          isEven ? "order-first col-start-2" : "col-start-8",
        ])}
      >
        <div className={styles.step}>STEP {step}</div>
        <h3 className="sc-heading--three mb-4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

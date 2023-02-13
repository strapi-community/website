import Image from "next/image";
import styles from "./GetInvolvedCard.module.scss";

interface Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkTo: string;
}

export const GetInvolvedCard = ({
  imageSrc,
  imageAlt = "",
  title,
  description,
  linkTo = "#",
}: Props) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={120}
        height={120}
        className={styles.image}
      />
      <h3 className="sc-heading--four mb-4">{title}</h3>
      <p className="sc-body--small mb-6">{description}</p>

      <a href={linkTo} target="_blank" rel="noreferrer" className={styles.link}>
        Learn More 🡢
      </a>
    </div>
  );
};

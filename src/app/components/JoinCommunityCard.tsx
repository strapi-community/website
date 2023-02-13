import Image from "next/image";
import styles from "./JoinCommunityCard.module.scss";

interface Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const JoinCommunityCard = ({
  imageSrc,
  imageAlt = "",
  title,
  description,
}: Props) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={64}
        height={64}
        className={styles.image}
      />
      <h3 className="sc-heading--four mb-4">{title}</h3>
      <p className="sc-body--small">{description}</p>
    </div>
  );
};

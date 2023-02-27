import Image from "next/image";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import styles from "./MemberCard.module.scss";

interface Props {
  imageSrc: string;
  imageAlt: string;
  name: string;
  twitter: string;
  linkedin: string;
}

export const MemberCard = ({
  imageSrc,
  imageAlt,
  name,
  twitter,
  linkedin,
}: Props) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        height={305}
        width={270}
        className={styles.image}
      />

      <h3 className={styles.name}>{name}</h3>

      <div className="flex gap-2 sm:gap-3">
        {!!twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            <FaTwitter size={24} />
          </a>
        )}
        {!!linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedinIn size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

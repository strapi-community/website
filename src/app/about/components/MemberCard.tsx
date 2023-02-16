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

      <div className="flex gap-2">
        {!!twitter && (
          <a href={twitter} target="_blank" rel="noreferrer">
            <FaTwitter size={24} color="#8E8EA9" />
          </a>
        )}
        {!!linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn size={24} color="#8E8EA9" />
          </a>
        )}
      </div>
    </div>
  );
};

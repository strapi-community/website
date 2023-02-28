import Image from "next/image";
import Link from "next/link";
import { BiMap, BiPlug } from "react-icons/bi";
import styles from "./DeveloperCard.module.scss";

interface Props {
  imageSrc: string;
  imageAlt: string;
  name: string;
  country: string;
  pluginsDevCount: number;
}

export const  DeveloperCard = ({
  imageSrc,
  imageAlt = "",
  name,
  country = "n/a",
  pluginsDevCount = 1,
}: Props) => {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={316}
          height={306}
          className={styles.image}
        />
      </figure>

      <h3 className="sc-heading--four mb-2">{name}</h3>

      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <BiMap size={20} />
          <p>{country}</p>
        </div>

        <div className="flex items-center gap-1">
          <BiPlug size={20} />
          <p>{pluginsDevCount}</p>
        </div>
      </div>
    </div>
  );
};

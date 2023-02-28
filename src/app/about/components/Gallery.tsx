import Image from "next/image";
import { clsx } from "clsx";
import styles from "./Gallery.module.scss";

interface Props {
  images: { imageSrc: string; imageAlt: string }[];
}

export const Gallery = ({ images }: Props) => {
  return (
    <div className={styles.container}>
      {images.map(({ imageSrc, imageAlt }, i) => (
        <figure key={i} className={clsx(styles["image" + (i + 1)], styles.imageContainer)}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className={styles.image}
            fill={true}
          />
        </figure>
      ))}
    </div>
  );
};

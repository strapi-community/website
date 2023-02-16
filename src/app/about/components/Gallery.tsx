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
        <Image
          src={imageSrc}
          alt={imageAlt}
          className={clsx(styles["image" + (i + 1)], styles.image)}
          key={i}
          fill={true}
        />
      ))}
    </div>
  );
};

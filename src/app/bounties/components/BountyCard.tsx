import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./BountyCard.module.scss";

interface Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  bountyAmt: string;
  linkTo: string;
}

export const BountyCard = ({
  imageSrc,
  imageAlt = "",
  title,
  bountyAmt = "n/a",
  description,
  linkTo = "#",
}: Props) => {
  return (
    <div className={styles.container}>
      <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={84}
          height={84}
          className={styles.image}
        />

        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>

          <p className={styles.bountyMobile}>${bountyAmt}</p>

          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <p className={styles.bounty}>${bountyAmt}</p>

      <Link href={linkTo} className={styles.button}>
        <span className="mr-2">View Bounty</span>
        <BiRightArrowAlt size={24} className="transition" data-arrow />
      </Link>
    </div>
  );
};

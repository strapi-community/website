import Image from "next/image";
import Link from "next/link";
import {
  BountyCard,
  DeveloperCard,
  GetInvolvedCard,
  JoinCommunityCard,
  Newsletter,
} from "./components";
import styles from "./page.module.scss";

const TRUSTED_BY = [
  "/mock-data/Logo-1.png",
  "/mock-data/Logo-2.png",
  "/mock-data/Logo-3.png",
  "/mock-data/Logo-4.png",
  "/mock-data/Logo-5.png",
];

const JOIN_COMMUNITY = [
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "Monetory rewards",
    description:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat.",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "Community Recognition",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "Level up your skills",
    description:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam.",
  },
];

const GET_INVOLVED = [
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "Write for the community",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat.",
    linkTo: "#",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "Events",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat.",
    linkTo: "#",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "Meetup",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat.",
    linkTo: "#",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "Contest",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat.",
    linkTo: "#",
  },
];

const BOUNTIES = [
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "Megastek",
    bountyAmt: "800",
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis cillum dolor.",
    linkTo: "#",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "ArkNav",
    bountyAmt: "2000",
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis cillum dolor.",
    linkTo: "#",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Sample Alt Text",
    title: "Meitrack",
    bountyAmt: "1500",
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis cillum dolor.",
    linkTo: "#",
  },
];

const DEVELOPERS = [
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Some Dev God",
    name: "Ayse Cam",
    country: "United States",
    pluginsDevCount: 26,
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Some Dev God",
    name: "Roshit Pepeg",
    country: "Nepal",
    pluginsDevCount: 420,
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Some Dev God",
    name: "Muazzez Yasar",
    country: "Israel",
    pluginsDevCount: 32,
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.heroSection + " sc-header-offset"}>
        <div className="container sc-grid relative pt-12 sm:pt-20">
          <Image
            src="/top-right-dotted-decor.svg"
            alt=""
            width={177}
            height={151}
            className={styles.heroTopRightDecoration}
          />
          <div className="col-span-12 sm:col-span-8 sm:col-start-3 sm:text-center z-10">
            <div className="flex flex-col items-start sm:items-center sm:px-8 mb-14 sm:mb-20">
              <h1 className="sc-heading--one mb-6 sm:mb-8">
                Build for Strapi.
                <br />
                Get paid.
              </h1>

              <p className="mb-10 sm:mb-12">
                Join the thriving Strapi community, get paid for your passion
                and expertise. Build the plugins you love and be part of a
                supportive, innovative group of developers.
              </p>

              <Link href="/bounties" className="sc__btn">
                Explore Bounties
              </Link>
            </div>

            <div className="mb-12 sm:mb-24">
              <p className="mb-4 sm:mb-6">Trusted by developers from</p>
              <div className="flex flex-wrap gap-5 sm:gap-10 justify-around">
                {TRUSTED_BY.map((image, index) => (
                  <Image
                    src={image}
                    alt="Some company"
                    width={132}
                    height={24}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <Image
            src="/bottom-left-dotted-decor.svg"
            alt=""
            width={200}
            height={273}
            className="absolute top-1/2 left-0 hidden sm:block"
          />
        </div>
      </section>

      <section className="container flex flex-col items-start sm:items-center pt-28 sm:pt-40 pb-8 sm:pb-16">
        <h2 className="sc-heading--two mb-12 sm:mb-20">
          Why join the community?
        </h2>

        <div className="flex flex-col gap-12 sm:flex-row w-full justify-between mb-12 sm:mb-20">
          {JOIN_COMMUNITY.map((data, i) => (
            <JoinCommunityCard {...data} key={i} />
          ))}
        </div>

        <a
          href="https://discord.gg/strapi"
          target="_blank"
          className="sc__btn"
          rel="noreferrer"
        >
          Join us on Discord
        </a>
      </section>

      <section className="container relative pt-12 sm:pt-24 pb-32 sm:pb-40">
        <Image
          src="/left-sided-dots-decor.svg"
          alt=""
          width={135}
          height={42}
          className="absolute top-0 left-0 hidden sm:block"
        />

        <Image
          src="/top-right-decor.svg"
          alt=""
          width={300}
          height={300}
          className="absolute top-0 right-0 hidden sm:block"
        />
        <div className="sc-grid">
          <div className="col-span-12 sm:col-span-6 sm:col-start-4 mb-12 sm:mb-20">
            <div className="sc-heading--tag text-center mb-4">
              The Community
            </div>
            <h2 className="sc-heading--two text-center mb-4">
              Ways to get involved
            </h2>
            <p className="text-center">
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              Proin porta est convallis lacus blandit pretium sed.
            </p>
          </div>

          <div className="col-span-12 sm:col-span-10 sm:col-start-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
            {GET_INVOLVED.map((data, i) => (
              <GetInvolvedCard {...data} key={i} />
            ))}
          </div>
        </div>

        <Image
          src="/get-involved-decoration-3.svg"
          alt=""
          width={200}
          height={186}
          className={styles.getInvolvedBottomLeftDecoration}
        />
      </section>

      <section className="container relative pt-8 sm:pt-24 pb-28 sm:pb-40">
        <div className="sc-grid">
          <div className="col-span-12 sm:col-span-6 sm:col-start-4 mb-12 sm:mb-20">
            <div className="sc-heading--tag text-center mb-4">Bounties</div>
            <h2 className="sc-heading--two text-center mb-4">
              Make Strapi better
            </h2>
            <p className="text-center">
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              Proin porta est convallis lacus blandit pretium sed.
            </p>
          </div>

          <div className="col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            {BOUNTIES.map((bounty, i) => (
              <BountyCard {...bounty} key={i} />
            ))}
            <div className="col-span-1 sm:col-span-3 flex justify-center">
              <Link href="/bounties" className="sc__btn--outline">
                View all bounties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:container pb-28 sm:pb-40">
        <div className="sc-grid">
          <Newsletter />
        </div>
      </section>

      <section className="container sc-grid mb-28 sm:mb-24">
        <div className="col-span-10 col-start-2">
          <h2 className="sc-heading--two text-center mb-12 sm:mb-20">
            Most active developers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-center sm:place-items-stretch">
            {DEVELOPERS.map((developer, i) => (
              <DeveloperCard {...developer} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import {
  Gallery,
  MemberCard,
  ResourceCard,
  Stats,
  WorkProcessCard,
} from "./components";
import styles from "./page.module.scss";

const HOW_WE_WORK = [
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Registration Process",
    title: "Register",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Find",
    title: "Find",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Build & Ship",
    title: "Build & Ship",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "Rewards",
    title: "Get Rewarded",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
  },
];

const GALLERY = [
  { imageSrc: "/mock-data/image-placeholder.svg", imageAlt: "Alt text 1" },
  { imageSrc: "/mock-data/image-placeholder.svg", imageAlt: "Alt text 2" },
  { imageSrc: "/mock-data/image-placeholder.svg", imageAlt: "Alt text 3" },
  { imageSrc: "/mock-data/image-placeholder.svg", imageAlt: "Alt text 4" },
  { imageSrc: "/mock-data/image-placeholder.svg", imageAlt: "Alt text 5" },
  { imageSrc: "/mock-data/image-placeholder.svg", imageAlt: "Alt text 6" },
  { imageSrc: "/mock-data/image-placeholder.svg", imageAlt: "Alt text 7" },
  { imageSrc: "/mock-data/image-placeholder.svg", imageAlt: "Alt text 8" },
];

const KEY_MEMBERS = Array(12).fill({
  imageSrc: "/mock-data/image-placeholder.svg",
  imageAlt: "Member picture",
  name: "Ayse Cam",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
});

const RESOURCES = [
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "alt text",
    title: "Tutorials",
    description:
      "Learn how to build your Strapi project with step-by-step tutorials written by the Strapi community.",
    linkTo: "#",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "alt text",
    title: "Strapi Forum",
    description:
      "Leverage the community knowledge to learn how Strapi can help you smooth your workflow.",
    linkTo: "#",
  },
  {
    imageSrc: "/mock-data/image-placeholder.svg",
    imageAlt: "alt text",
    title: "Showcase",
    description:
      "The Strapi community is always building amazing websites, apps, IoT devices, and more! Discover them here.",
    linkTo: "#",
  },
];

export default function About() {
  return (
    <>
      <section className="sc-header-offset mb-40">
        <div className="container relative sc-grid">
          <Image
            src="/about/hero-image.png"
            alt="image showing people working together"
            height={660}
            width={660}
            className={styles.heroImage}
          />

          <Image
            src="/about/hero-image-mobile.png"
            alt="image showing people working together"
            height={660}
            width={660}
            className={styles.heroImageMobile}
          />

          <div className="col-span-12 sm:col-span-5 sm:col-start-2">
            <h1 className={styles.heroTitle}>
              Building a <br />
              better Strapi, <br />
              together
            </h1>

            <p className="mb-10">
              Our mission is to create an environment where developers can
              together share ideas, collaborate on projects, and help each other
              grow.
            </p>

            <button className="sc__btn mb-12">Join us on Discord</button>
          </div>

          <Image
            src="left-sided-dots-decor.svg"
            alt=""
            width={140}
            height={42}
            className="absolute -bottom-14 sc-decor--left ml-14"
          />
        </div>
      </section>

      <section className="relative pt-16">
        <div className="container sc-grid relative pb-40">
          <Image
            src="top-left-decor.svg"
            alt=""
            width={350}
            height={350}
            className="absolute -top-20 sc-decor--left hidden sm:block"
          />

          <Image
            src="top-left-decor-mobile.svg"
            alt=""
            width={80}
            height={80}
            className="absolute -top-20 sc-decor--left sm:hidden"
          />

          <div className="col-span-12 sm:col-span-6 sm:col-start-4">
            <h2 className="sc-heading--two text-center mb-14">
              Summarize what strapi community is
            </h2>

            <p>
              Strapi Community is a platform for developers to come together and
              share ideas, collaborate on projects, and help each other grow. It
              is an ecosystem built on the principles of collaboration and
              growth, where developers can contribute to the development of the
              Strapi content management system and be rewarded for their
              efforts.
            </p>

            <p>
              The community is dedicated to building a strong and resilient
              ecosystem, where everyone can benefit from each other&apos;s
              skills and expertise. Whether you&apos;re a seasoned developer or
              just starting out, Strapi Community is the place to be to grow
              your skills, network with like-minded individuals, and make a
              positive impact on the world of web development.
            </p>
          </div>

          <Image
            src="/top-right-dotted-decor.svg"
            alt=""
            width={177}
            height={151}
            className={styles.decorBeforeStats}
          />
        </div>
      </section>

      <section className="sm:container mb-28 sm:mb-40">
        <Stats />
      </section>

      <section className="container relative mb-40">
        <div className="sc-grid">
          <div className="col-span-12 sm:col-span-6 sm:col-start-4 mb-16 sm:mb-24">
            <div className="sc-heading--tag text-center mb-4">
              Step by step process
            </div>

            <h2 className="sc-heading--two text-center mb-4">
              Here&apos;s how we work
            </h2>

            <p className="text-center">
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              Proin porta est convallis lacus blandit pretium sed.
            </p>
          </div>
        </div>

        <div className="container flex flex-col gap-20 sm:gap-24">
          {HOW_WE_WORK.map((step, i) => (
            <WorkProcessCard {...step} step={i + 1} key={step.title} />
          ))}
        </div>

        <Image
          src="/bottom-left-dotted-decor.svg"
          alt=""
          width={200}
          height={271.5}
          className="absolute -bottom-28 sc-decor--left -z-10 hidden sm:block"
        />

        <Image
          src="/left-sided-dots-decor.svg"
          alt=""
          width={135}
          height={41.75}
          className="absolute -bottom-28 left-5 -z-10 sm:hidden"
        />
      </section>

      <section className="container mb-28 sm:mb-40">
        <Gallery images={GALLERY} />
      </section>

      <section className="container mb-20">
        <h2 className="sc-heading--two text-center mb-4">Key members</h2>
        <p className="mb-12 sm:mb-20 text-center">
          Team members or community stars goes here
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 sm:gap-10">
          {KEY_MEMBERS.map((member, i) => (
            <MemberCard {...member} key={i} />
          ))}
        </div>
      </section>

      <section className="container relative mb-28 sm:mb-40">
        <Image
          src="/top-right-decor.svg"
          alt=""
          width={300}
          height={300}
          className="absolute top-0 sc-decor--right hidden md:block"
        />
        <div className="sc-grid md:pt-24">
          <div className="col-span-12 md:col-span-6 md:col-start-4">
            <h2 className="sc-heading--two text-center mb-4">Resources</h2>
            <p className="text-center mb-6 md:mb-20">
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              Proin porta est convallis lacus blandit pretium sed.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 md:col-start-3 flex flex-col gap-6 md:gap-10">
            {RESOURCES.map((resource, i) => (
              <ResourceCard {...resource} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

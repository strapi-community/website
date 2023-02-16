"use client";
import Image from "next/image";
import { useState } from "react";
import { AnyQuestionsForm, BountyCard, Filters } from "./components";
import type { Filter } from "./components";

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

export default function Bounty() {
  const [filters, setFilters] = useState<Filter[]>([
    { label: "Workflow-1", checked: false },
    { label: "Workflow-2", checked: false },
    { label: "Workflow-3", checked: false },
  ]);
  const [bountyState, setBountyState] = useState("");

  const handleFilterSelect = (label: string) => {
    setFilters((prev) =>
      prev.map((filter) =>
        filter.label === label
          ? { label: filter.label, checked: !filter.checked }
          : filter
      )
    );
  };

  return (
    <>
      <div className="relative">
        <Image
          src="/bounty/bounty-decor-1.svg"
          alt=""
          width={400}
          height={400}
          className="absolute top-12 right-0 -z-10"
        />
      </div>

      <section className="sc-header-offset container mb-40">
        <h1 className="sc-heading--two text-center pt-16 mb-20">Bounty</h1>

        <div className="flex gap-40">
          <Filters
            filters={filters}
            onFilterSelect={handleFilterSelect}
            bountyState={bountyState}
            onBountyStateSelect={setBountyState}
          />

          <div className="flex flex-grow flex-col">
            <div className="flex mb-9">
              <div>6 of 65 results</div>
            </div>

            <div className="flex flex-col gap-6 mb-12">
              {BOUNTIES.map((bounty, i) => (
                <BountyCard {...bounty} key={i} />
              ))}
            </div>

            <div className="flex justify-center">
              <button className="sc__btn--outline">Load more bounties</button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <Image
          src="/bottom-left-dotted-decor.svg"
          alt=""
          width={200}
          height={271.5}
          className="absolute -bottom-8 left-0 -z-10"
        />
      </div>

      <section className="mb-40"></section>

      <section className="container sc-grid mb-40">
        <div className="col-span-10 col-start-2 flex gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="sc-heading--three mb-4">
              Start your plugin journey
            </h2>
            <p className="mb-6">
              Check out the available plugin resources that will help you to
              develop your plugin or provider and get it listed on the
              marketplace.
            </p>
            <div>
              <button className="sc__btn">Get Started</button>
            </div>
          </div>

          <Image
            src="/bounty/start-plugin-journey.svg"
            alt=""
            width={450}
            height={286}
          />
        </div>
      </section>

      <section className="relative">
        <Image
          src="top-left-decor.svg"
          alt=""
          width={350}
          height={350}
          className="absolute -top-20 left-0"
        />
        <div className="container sc-grid">
          <div className="col-span-6 col-start-4">
            <h2 className="sc-heading--two text-center mb-4">Any questions</h2>
            
            <p className="text-center mb-20">
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              Proin porta est convallis lacus blandit pretium sed.
            </p>

            <AnyQuestionsForm />
          </div>
        </div>
      </section>
    </>
  );
}

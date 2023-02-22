"use client";
import Image from "next/image";
import { useState } from "react";
import {
  AnyQuestionsForm,
  BountyCard,
  Filters,
  GetStarted,
} from "./components";
import type { Filter } from "./components";
import { Dropdown } from "@/components";

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

const SORT_BY_OPTIONS = [
  { label: "Newest", value: "date-desc" },
  { label: "Oldest", value: "date-asc" },
  { label: "Bounty (Low to High)", value: "bounty-asc" },
  { label: "Bounty (High to Low)", value: "bounty-desc" },
]

export default function Bounty() {
  const [filters, setFilters] = useState<Filter[]>([
    { label: "Workflow-1", checked: false },
    { label: "Workflow-2", checked: false },
    { label: "Workflow-3", checked: false },
  ]);

  const [bountyState, setBountyState] = useState("");

  const [sortBy, setSortBy] = useState({ label: "Newest", value: "date-desc" });

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
      <section className="sc-header-offset container relative mb-28 sm:mb-40">
        <Image
          src="/bounty/bounty-decor-1.svg"
          alt=""
          width={400}
          height={400}
          className="absolute top-12 sc-decor--right hidden sm:block -z-10"
        />

        <h1 className="sc-heading--two text-center pt-10 sm:pt-16 mb-10 sm:mb-20">
          Bounty
        </h1>

        <div className="flex flex-col sm:flex-row gap-x-40 gap-y-8">
          <Filters
            filters={filters}
            onFilterSelect={handleFilterSelect}
            bountyState={bountyState}
            onBountyStateSelect={setBountyState}
            sortValue={sortBy}
            onSortChange={setSortBy}
            sortOptions={SORT_BY_OPTIONS}
          />

          <div className="flex flex-grow flex-col">
            <div className="flex justify-between items-center mb-6 sm:mb-9">
              <div>6 of 65 results</div>

              <div className="hidden sm:block">
                <Dropdown
                  prefix="Sort by:"
                  value={sortBy}
                  onChange={setSortBy}
                  options={SORT_BY_OPTIONS}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 mb-8 sm:mb-12">
              {BOUNTIES.map((bounty, i) => (
                <BountyCard {...bounty} key={i} />
              ))}
            </div>

            <div className="flex justify-center">
              <button className="sc__btn--outline">Load more bounties</button>
            </div>
          </div>
        </div>

        <Image
          src="/bottom-left-dotted-decor.svg"
          alt=""
          width={200}
          height={271.5}
          className="absolute -bottom-40 sc-decor--left hidden sm:block -z-10"
        />
      </section>

      <section className="container sc-grid mb-8 sm:mb-40">
        <GetStarted />
      </section>

      <section className="container relative pt-20 sm:pt-0 mb-28 sm:mb-40">
        <Image
          src="top-left-decor.svg"
          alt=""
          width={350}
          height={350}
          className="absolute -top-20 sc-decor--left hidden sm:block"
        />
        <div className="sc-grid">
          <div className="col-span-12 sm:col-span-6 sm:col-start-4">
            <h2 className="sc-heading--two text-center mb-4">Any questions</h2>

            <p className="text-center mb-12 sm:mb-20">
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

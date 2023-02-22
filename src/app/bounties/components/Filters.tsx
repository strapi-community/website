"use client";
import { useEffect, useState } from "react";
import { BiSliderAlt, BiX } from "react-icons/bi";
import { Checkbox, Dropdown, RadioButton } from "@/components";
import type { Option } from "@/components";
import styles from "./Filters.module.scss";

export type Filter = { label: string; checked: boolean };

interface Props {
  filters: Filter[];
  onFilterSelect: (label: string) => void;
  bountyState: string;
  onBountyStateSelect: (state: string) => void;
  sortValue: Option;
  onSortChange: (option: Option) => void;
  sortOptions: Option[];
}

export const Filters = ({
  filters,
  bountyState,
  onFilterSelect,
  onBountyStateSelect,
  sortValue,
  onSortChange,
  sortOptions,
}: Props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const resizeListener = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    if (showFilters && isMobile) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showFilters, isMobile]);

  const openFilters = () => setShowFilters(true);

  const closeFilters = () => setShowFilters(false);

  return (
    <>
      <div className={styles.container}>
        <div>
          <h5 className={styles.title}>Workflow</h5>

          <div className="flex flex-col gap-4 relative">
            {filters.map(({ label, checked }) => (
              <Checkbox
                label={label}
                checked={checked}
                onCheck={onFilterSelect}
                key={label}
              />
            ))}
          </div>
        </div>

        <div>
          <h5 className={styles.title}>State</h5>

          <div className="flex flex-col gap-4">
            <RadioButton
              id="radio-1"
              label="ongoing"
              checked={bountyState === "ongoing"}
              onSelect={onBountyStateSelect}
            />

            <RadioButton
              id="radio-2"
              label="completed"
              checked={bountyState === "completed"}
              onSelect={onBountyStateSelect}
            />
          </div>
        </div>
      </div>

      <div className={styles.mobileContainer}>
        <button className={styles.button} onClick={openFilters}>
          <BiSliderAlt size={20} />
          Sort & Filter
        </button>
      </div>

      {showFilters && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white z-20 p-5">
          <div className="flex justify-end">
            <button className="p-3" onClick={closeFilters}>
              <BiX size={20} />
            </button>
          </div>

          <h2 className="sc-heading--four mb-4">Sort Content</h2>

          <div className="mb-10">
            <Dropdown
              prefix="Sort by:"
              value={sortValue}
              onChange={onSortChange}
              options={sortOptions}
            />
          </div>

          <h2 className="sc-heading--four mb-4">Filter</h2>

          <div className="mb-10">
            <h5 className={styles.titleMobile}>Workflow</h5>

            <div className="flex flex-col gap-4 relative">
              {filters.map(({ label, checked }) => (
                <Checkbox
                  label={label}
                  checked={checked}
                  onCheck={onFilterSelect}
                  key={label}
                />
              ))}
            </div>
          </div>

          <div>
            <h5 className={styles.titleMobile}>State</h5>

            <div className="flex flex-col gap-4">
              <RadioButton
                id="radio-1"
                label="ongoing"
                checked={bountyState === "ongoing"}
                onSelect={onBountyStateSelect}
              />

              <RadioButton
                id="radio-2"
                label="completed"
                checked={bountyState === "completed"}
                onSelect={onBountyStateSelect}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

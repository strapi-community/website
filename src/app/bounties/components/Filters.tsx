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
  onFiltersUpdate: (filter: Filter[]) => void;
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
  onFiltersUpdate,
  onBountyStateSelect,
  sortValue,
  onSortChange,
  sortOptions,
}: Props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [isTablet, setIsTablet] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024
  );

  useEffect(() => {
    const resizeListener = () => setIsTablet(window.innerWidth < 1024);

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    if (showFilters && isTablet) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showFilters, isTablet]);

  const openFilters = () => setShowFilters(true);

  // reset inner filters to current ones when closing
  const closeFilters = () => {
    setInnerFilters(filters);
    setInnerBountyState(bountyState);
    setInnerSortBy(sortValue);
    setShowFilters(false);
  };

  // Internal state to handle mobile's apply logic
  const [innerFilters, setInnerFilters] = useState<Filter[]>(filters);
  const [innerBountyState, setInnerBountyState] = useState(bountyState);
  const [innerSortBy, setInnerSortBy] = useState(sortValue);

  // update inner states when filters change
  useEffect(() => {
    setInnerFilters(filters);
    setInnerBountyState(bountyState);
    setInnerSortBy(sortValue);
  }, [filters, bountyState, sortValue]);

  const handleFilterSelect = (label: string) => {
    setInnerFilters((prev) =>
      prev.map((filter) =>
        filter.label === label
          ? { label: filter.label, checked: !filter.checked }
          : filter
      )
    );
  };

  const handleApply = () => {
    onFiltersUpdate(innerFilters);
    onBountyStateSelect(innerBountyState);
    onSortChange(innerSortBy);
    setShowFilters(false);
  };

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

      {isTablet && showFilters && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-20 p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-end">
              <button className="p-3" onClick={closeFilters}>
                <BiX size={24} />
              </button>
            </div>

            <h2 className="sc-heading--four mb-4">Sort Content</h2>

            <div className="mb-10">
              <Dropdown
                prefix="Sort by:"
                value={innerSortBy}
                onChange={setInnerSortBy}
                options={sortOptions}
              />
            </div>

            <h2 className="sc-heading--four mb-4">Filter</h2>

            <div className="mb-10">
              <h5 className={styles.titleMobile}>Workflow</h5>

              <div className="flex flex-col gap-4 relative">
                {innerFilters.map(({ label, checked }) => (
                  <Checkbox
                    label={label}
                    checked={checked}
                    onCheck={handleFilterSelect}
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
                  checked={innerBountyState === "ongoing"}
                  onSelect={setInnerBountyState}
                />

                <RadioButton
                  id="radio-2"
                  label="completed"
                  checked={innerBountyState === "completed"}
                  onSelect={setInnerBountyState}
                />
              </div>
            </div>
          </div>

          <button className="sc__btn" onClick={handleApply}>
            Apply
          </button>
        </div>
      )}
    </>
  );
};

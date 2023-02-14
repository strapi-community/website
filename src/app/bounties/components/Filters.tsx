import styles from "./Filters.module.scss";

export type Filter = { label: string; checked: boolean };

interface Props {
  filters: Filter[];
  onFilterSelect: (label: string) => void;
  bountyState: string;
  onBountyStateSelect: (state: string) => void;
}

export const Filters = ({
  filters,
  bountyState,
  onFilterSelect,
  onBountyStateSelect,
}: Props) => {
  const handleBountyStateSelect = (bountyState: string) => () =>
    onBountyStateSelect(bountyState);

  return (
    <div className={styles.container}>
      <div>
        <h5 className={styles.title}>Workflow</h5>

        <div className="flex flex-col gap-4">
          {filters.map(({ label, checked }) => (
            <div className="flex gap-2" key={label}>
              <input
                id={label}
                type="checkbox"
                checked={checked}
                onChange={() => onFilterSelect(label)}
              />
              <label htmlFor={label}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h5 className={styles.title}>State</h5>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <input
              id="radio-1"
              type="radio"
              checked={bountyState === "ongoing"}
              onChange={handleBountyStateSelect("ongoing")}
            />
            <label htmlFor="radio-1">Ongoing</label>
          </div>

          <div className="flex gap-2">
            <input
              id="radio-2"
              type="radio"
              checked={bountyState === "completed"}
              onChange={handleBountyStateSelect("completed")}
            />
            <label htmlFor="radio-2">Completed</label>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Checkbox, RadioButton } from "@/components";
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
  return (
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
  );
};

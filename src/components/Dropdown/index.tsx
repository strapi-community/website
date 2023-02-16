import { BiCaretDown } from "react-icons/bi";
import { clsx } from "clsx";
import styles from "./index.module.scss";

interface Props {
  id?: string;
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown = ({
  id = "1",
  label = "",
  value = "",
  options,
  onChange,
}: Props) => {
  return (
    <div className={styles.container}>
      {!!label && (
        <label htmlFor={id} className="sc__input__label">
          {label}
        </label>
      )}
      <div className="relative">
        <div className={styles.iconContainer}>
          <BiCaretDown size={16} color="#8E8EA9" />
        </div>
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={clsx(styles.select, value === "" && styles.placeholder)}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          {options.map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

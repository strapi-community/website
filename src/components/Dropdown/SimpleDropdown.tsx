import { BiCaretDown } from "react-icons/bi";
import { clsx } from "clsx";
import styles from "./SimpleDropdown.module.scss";

interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  containerClassName?: string;
}

export const SimpleDropdown = ({
  id = "1",
  label = "",
  placeholder = "",
  value = "",
  options,
  onChange,
  containerClassName = "",
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(event.target.value);

  return (
    <div className={clsx(styles.container, containerClassName)}>
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
          onChange={handleChange}
          className={clsx(styles.select, value === "" && styles.placeholder)}
        >
          {!!placeholder && (
            <option value="" disabled selected hidden>
              {placeholder}
            </option>
          )}
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

export * from "./Dropdown";

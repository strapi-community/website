import styles from "./index.module.scss";

interface Props {
  id?: string;
  label: string;
  checked: boolean;
  onSelect: (value: string) => void;
}

export const RadioButton = ({
  id = "radio-1",
  label,
  checked,
  onSelect,
}: Props) => {
  const handleSelect = () => onSelect(label);

  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        type="radio"
        checked={checked}
        onChange={handleSelect}
        className={styles.input}
      />
      <label htmlFor={id} className="capitalize">
        {label}
      </label>
    </div>
  );
};

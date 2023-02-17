import styles from "./index.module.scss";

interface Props {
  label: string;
  checked: boolean;
  onCheck: (value: string) => void;
}

export const Checkbox = ({ label, checked, onCheck }: Props) => {
  const handleCheck = () => onCheck(label);

  return (
    <div className="relative flex gap-2">
      <input
        id={label}
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        className={styles.input}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

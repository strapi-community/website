import styles from "./index.module.scss";

interface Props {
  label: string;
  checked: boolean;
  onCheck: (value: string) => void;
}

export const Checkbox = ({ label, checked, onCheck }: Props) => {
  const handleCheck = () => onCheck(label);

  return (
    <div className="flex items-center gap-2">
      <div className="relative h-6">
        <input
          id={label}
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className={styles.input}
        />
      </div>
      <label htmlFor={label} className="cursor-pointer">{label}</label>
    </div>
  );
};
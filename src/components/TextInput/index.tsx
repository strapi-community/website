import { clsx } from "clsx";
import styles from "./index.module.scss";

interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (event: string) => void;
  type: React.HTMLInputTypeAttribute;
  darkBg?: boolean;
  containerClassName?: string;
}

export const TextInput = ({
  id = "textInput",
  label = "",
  placeholder = "",
  value = "",
  onChange,
  type = "text",
  darkBg = false,
  containerClassName = "",
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);

  return (
    <div className={clsx(styles.container, containerClassName)}>
      {!!label && (
        <label htmlFor={id} className="sc__input__label">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={clsx(styles.input, darkBg && styles.inputBgWhite)}
      />
    </div>
  );
};

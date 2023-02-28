import styles from "./index.module.scss";

interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: string) => void;
}

export const TextArea = ({
  id = "textInput",
  label = "",
  placeholder = "",
  value = "",
  onChange,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(event.target.value);

  return (
    <div className={styles.container}>
      {!!label && (
        <label htmlFor={id} className="sc__input__label">
          {label}
        </label>
      )}

      <textarea
        id={id}
        placeholder={placeholder}
        className={styles.textarea}
        value={value}
        onChange={handleChange}
        rows={3}
      />
    </div>
  );
};

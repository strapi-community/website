import Select, { components } from "react-select";
import { BiCaretDown } from "react-icons/bi";

export type Option = {
  label: string;
  value: string;
};

interface Props {
  prefix?: string;
  id?: string;
  placeholder?: string;
  options: Option[];
  value: Option;
  onChange: (option: Option) => void;
  className?: string;
}

export const Dropdown = ({
  prefix = "",
  id,
  placeholder,
  options,
  value,
  onChange,
  className = ""
}: Props) => {
  return (
    <Select
      id={id}
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={(newValue) =>
        onChange({ label: newValue?.label ?? "", value: newValue?.value ?? "" })
      }
      components={{
        SingleValue: ({ children, ...props }) => {
          return (
            <components.SingleValue {...props}>
              <span>{prefix} </span>
              <span className="font-semibold">{children}</span>
            </components.SingleValue>
          );
        },
        IndicatorSeparator: () => null,
        DropdownIndicator: () => <BiCaretDown size={16} color="#8E8EA9" />,
      }}
      unstyled
      styles={{
        container: (baseStyles, state) => ({
          ...baseStyles,
          background: "#F6F6F9",
          borderRadius: 4,
          minWidth: 282,
          height: 44,
          display: "flex",
          alignItems: "center",
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          width: "100%",
          paddingLeft: 16,
          paddingRight: 12,
          display: "flex",
          justifyContent: "space-between",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          background: "#fff",
          borderRadius: 8,
          boxShadow:
            "0 0 0 1px hsl(0deg 0% 0% / 10%), 0 4px 11px hsl(0deg 0% 0% / 10%)",
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          paddingTop: 4,
          paddingBottom: 4,
          background: "#fff",
          overflowY: "auto",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          paddingTop: 8,
          paddingRight: 12,
          paddingLeft: 12,
          paddingBottom: 8,
          ...(state.isSelected
            ? { backgroundColor: "#2684FF", color: "#fefefe" }
            : state.isFocused
            ? { backgroundColor: "#DEEBFF" }
            : {}),
        }),
      }}
      isSearchable={false}
      className={className}
    />
  );
};

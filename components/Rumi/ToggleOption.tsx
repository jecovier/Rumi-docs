import { useContext } from "react";
import { ToggleContext } from "./Toggle";

export interface ToggleOptionGroupProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export default function ToggleOption({
  children,
  className,
  ...restProps
}: ToggleOptionGroupProps) {
  const { toggleData, className: rootClassName } =
    useContext(ToggleContext) ?? {};
  return (
    <label className="toggle-option">
      <input
        type="radio"
        name={toggleData?.group}
        className="hidden"
        {...restProps}
      />
      <span
        className={`inline-flex rounded items-center gap-1.5 scale border border-transparent cursor-pointer hover:bg-light-100/50 hover:dark:bg-dark-700/50 ${
          rootClassName ?? ""
        } ${className ?? ""}`}
      >
        {children}
      </span>
    </label>
  );
}

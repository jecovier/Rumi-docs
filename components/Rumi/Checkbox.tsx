export interface CheckboxGroupProps
  extends React.ComponentPropsWithoutRef<"input"> {
  suffix?: boolean;
  border?: boolean;
}

export default function Checkbox({
  children,
  className,
  suffix,
  border,
  ...restProps
}: CheckboxGroupProps) {
  return (
    <label
      className={`checkbox scale flex-shrink-0 gap-2 inline-flex justify-center items-center group ${
        suffix ? "flex-row-reverse" : ""
      } ${restProps.disabled ? "disabled" : ""} ${className ?? ""}`}
    >
      <input
        className={`scale-size appearance-none bg-no-repeat bg-center bg-[length:90%] text-primary-500 border border-light-400/60 dark:border-dark-500 hover:border-light-500/70 hover:dark:border-dark-400 bg-light-50 dark:bg-dark-700  checked:bg-primary-500 checked:border-primary-500 checked:hover:border-primary-500 checked:icon-check-light disabled:dark:bg-dark-50/80 disabled:text-light-700`}
        {...restProps}
        type="checkbox"
      />
      <span className="prefix">{children}</span>
    </label>
  );
}

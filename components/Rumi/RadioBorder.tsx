export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<"input"> {
  suffix?: boolean;
  border?: boolean;
}

export default function RadioBorder({
  children,
  className,
  suffix,
  border,
  ...restProps
}: RadioGroupProps) {
  return (
    <label
      className={`radio-border scale gap-2 flex-shrink-0 inline-flex justify-center items-center group rounded-md border border-light-300 dark:border-dark-500 hover:border-light-500/70 hover:dark:border-dark-400 bg-light-50 dark:bg-dark-700 focus-within:border-primary-500 focus-within:dark:border-primary-500 focus-within:hover:border-primary-500 focus-within:hover:dark:border-primary-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-300 focus-within:bg-primary-50/50 focus-within:dark:bg-primary-800/5 active:bg-primary-50 active:dark:bg-primary-800/20 disabled:dark:text-dark-50 disabled:text-light-700 ${
        suffix ? "flex-row-reverse" : ""
      } ${restProps.disabled ? "disabled" : ""} ${className ?? ""}`}
    >
      <input
        className={`scale-size !rounded-full appearance-none bg-no-repeat bg-center bg-[length:90%] text-primary-500 border border-light-400/60 dark:border-dark-500 hover:border-light-500/70 hover:dark:border-dark-400 bg-light-50 dark:bg-dark-700  checked:bg-primary-500 checked:border-primary-500 checked:hover:border-primary-500 checked:icon-circle-light disabled:dark:bg-dark-50/80 disabled:text-light-700`}
        {...restProps}
        type="radio"
      />
      <span className="prefix">{children}</span>
    </label>
  );
}

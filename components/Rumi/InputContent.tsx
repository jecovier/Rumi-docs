export interface InputGroupProps
  extends React.ComponentPropsWithoutRef<"input"> {
  suffix?: boolean;
}

export default function Input({
  children,
  className,
  suffix,
  ...restProps
}: InputGroupProps) {
  return (
    <div
      className={`input-content flex-shrink-0 inline-flex gap-1.5 justify-center items-center group rounded-md border border-light-300 dark:border-dark-500 hover:border-light-500/70 hover:dark:border-dark-400 bg-light-50 dark:bg-dark-700 focus-within:border-primary-500 focus-within:dark:border-primary-400 focus-within:hover:border-primary-500 focus-within:hover:dark:border-primary-400 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-300 focus-within:bg-primary-50/50 focus-within:dark:bg-primary-800/5 active:bg-primary-50 active:dark:bg-primary-800/20 disabled:dark:text-dark-50 disabled:text-light-700 ${
        suffix ? "flex-row-reverse" : ""
      } ${restProps.disabled ? "disabled" : ""} ${className ?? ""}`}
    >
      <span className={`prefix scale ${suffix ? "!pl-0" : "!pr-0"}`}>
        {children}
      </span>
      <input
        className={`scale focus:outline-none bg-transparent border-0 ${
          suffix ? "!pr-0" : "!pl-0"
        }`}
        {...restProps}
      />
    </div>
  );
}

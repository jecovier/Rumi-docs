interface SelectGroupProps extends React.ComponentPropsWithoutRef<"input"> {
  scale?: string;
  suffix?: boolean;
}

export default function Select({
  children,
  className,
  scale,
  suffix,
  ...restProps
}: SelectGroupProps) {
  if (!children) {
    return (
      <input
        className={`input relative flex-shrink-0 inline-flex justify-center items-center group font-medium rounded-md focus-visible:outline-none focus-visible:ring-1 border border-light-300 dark:border-dark-500/90 hover:border-light-500/70 hover:dark:border-dark-400 focus:border-primary-500 focus:dark:border-primary-400 scale-${
          scale || "md"
        } bg-light-50 dark:bg-dark-700 focus-visible:ring-primary-300 focus-visible:bg-primary-50/50 focus-visible:dark:bg-primary-800/5 active:bg-primary-50 active:dark:bg-primary-800/20 disabled:dark:text-dark-50 disabled:text-light-700 ${
          className ?? ""
        }`}
        {...restProps}
      />
    );
  }

  return (
    <div
      className={`input relative flex-shrink-0 inline-flex justify-center items-center group rounded-md border border-light-300 dark:border-dark-500 hover:border-light-500/70 hover:dark:border-dark-400 bg-light-50 dark:bg-dark-700 focus-within:border-primary-500 focus-within:dark:border-primary-400 focus-within:hover:border-primary-500 focus-within:hover:dark:border-primary-400 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-300 focus-within:bg-primary-50/50 focus-within:dark:bg-primary-800/5 active:bg-primary-50 active:dark:bg-primary-800/20 disabled:dark:text-dark-50 disabled:text-light-700 ${
        suffix ? "flex-row-reverse" : ""
      } ${restProps.disabled ? "disabled" : ""} ${className ?? ""}`}
    >
      <span
        className={`prefix scale-${scale || "md"} ${
          suffix ? "ml-1 !pl-0" : "mr-1 !pr-0"
        }`}
      >
        {children}
      </span>
      <input
        className={`focus:outline-none bg-transparent border-0 scale-${
          scale || "md"
        } ${suffix ? "!pr-0" : "!pl-0"}`}
        {...restProps}
      />
    </div>
  );
}

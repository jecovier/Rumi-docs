export interface SelectGroupProps
  extends React.ComponentPropsWithoutRef<"select"> {
  placeholder?: string;
}

export default function Select({
  children,
  className,
  placeholder,
  ...restProps
}: SelectGroupProps) {
  return (
    <select
      className={`select scale bg-[center_right_1em] bg-no-repeat appearance-none bg-icon icon-chevron-down-light dark:icon-chevron-down-dark cursor-pointer flex-shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-1 border border-light-300 dark:border-dark-500/90 hover:border-light-500/70 hover:dark:border-dark-400 focus:border-primary-500 focus:dark:border-primary-400 !pr-10 bg-light-50 dark:bg-dark-700 focus-visible:ring-primary-300 focus:bg-primary-50/50 focus:dark:bg-dark-700 active:bg-primary-50 active:dark:bg-primary-800/20 disabled:dark:text-dark-50 disabled:text-light-700 ${
        className ?? ""
      }`}
      {...restProps}
    >
      {placeholder && (
        <option value="" selected disabled hidden>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
}

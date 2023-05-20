interface SelectGroupProps extends React.ComponentPropsWithoutRef<"select"> {
  scale?: string;
}

export default function Select({
  children,
  className,
  scale,
  ...restProps
}: SelectGroupProps) {
  return (
    <select
      className={`button flex-shrink-0 inline-flex justify-center items-center group font-medium rounded-md focus-visible:outline-none focus-visible:ring-1 border border-light-300 dark:border-dark-500 hover:border-light-400 hover:dark:border-dark-400 focus:border-primary-500 focus:dark:border-primary-400 scale-${
        scale || "md"
      } bg-transparent text-light-700 dark:text-dark-300 focus-visible:ring-primary-300 focus-visible:bg-primary-100/50 focus-visible:dark:bg-primary-600/50 active:bg-primary-200/70 active:dark:bg-primary-600/80 ${
        className ?? ""
      }`}
      {...restProps}
    >
      {children}
    </select>
  );
}

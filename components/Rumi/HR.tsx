export interface HRGroupProps extends React.ComponentProps<"hr"> {
  left?: boolean;
  label?: string;
}

export default function HR({
  className,
  left,
  label,
  ...restProps
}: HRGroupProps) {
  return (
    <hr
      className={`hr relative flex items-center ${
        !!label && "gap-4"
      } my-4 h-[1.2em] border-none text-light-300 dark:text-dark-600 ${
        className ?? ""
      } ${left && "flex-row-reverse"} `}
      data-content={label}
      {...restProps}
    />
  );
}

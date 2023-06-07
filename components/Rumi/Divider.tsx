export interface DividerGroupProps extends React.ComponentProps<"div"> {
  left?: boolean;
  right?: boolean;
  center?: boolean;
}

export default function Divider({
  className,
  children,
  left,
  right,
  center,
  ...restProps
}: DividerGroupProps) {
  return (
    <div
      className={`divider-horizontal relative flex items-center justify-center gap-4 my-4 h-[1.2em] border-none text-light-300 dark:text-dark-600 ${
        className ?? ""
      } ${(right || center) && "left-line"} ${
        (left || center) && "right-line"
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
}

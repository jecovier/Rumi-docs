export interface SeparatorGroupProps extends React.ComponentProps<"div"> {
  left?: boolean;
  right?: boolean;
  center?: boolean;
}

export default function Separator({
  className,
  children,
  left,
  right,
  center,
  ...restProps
}: SeparatorGroupProps) {
  return (
    <div
      className={`Separator-horizontal relative flex items-center justify-center gap-4 my-4 h-[1.2em] border-none text-light-300 dark:text-dark-600 ${
        className ?? ""
      } ${(right || center || !children) && "left-line"} ${
        (left || center) && "right-line"
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
}

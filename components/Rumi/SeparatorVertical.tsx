export interface SeparatorVerticalGroupProps
  extends React.ComponentProps<"div"> {
  top?: boolean;
  bottom?: boolean;
  center?: boolean;
}

export default function SeparatorVertical({
  className,
  children,
  top,
  bottom,
  center,
  ...restProps
}: SeparatorVerticalGroupProps) {
  return (
    <div
      className={`Separator-vertical relative flex flex-col h-full mx-6 items-center justify-center gap-4 h-[1.2em] border-none text-light-300 dark:text-dark-600 ${
        className ?? ""
      } ${(bottom || center || !children) && "top-line"} ${
        (top || center) && "bottom-line"
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
}

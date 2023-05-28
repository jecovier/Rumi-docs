export const PlacementOptions = {
  top: "mb-2 left-1/2 -translate-x-1/2 bottom-full",
  left: "ml-2 bottom-1/2 translate-y-1/2 left-full",
  right: "mr-2 bottom-1/2 translate-y-1/2 right-full",
  bottom: "mt-2 left-1/2 -translate-x-1/2 top-full",
};

export interface TooltipGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  label: string;
  placement?: keyof typeof PlacementOptions;
}

export default function Tooltip({
  children,
  className,
  label,
  placement,
  ...restProps
}: TooltipGroupProps) {
  return (
    <div className="tooltip relative" {...restProps}>
      <span
        className={`scale rounded-md absolute z-10 bg-light-600 dark:bg-dark-900 hidden text-sm shadow-lg text-light-200 dark:text-dark-300 ${
          placement ?? "top"
        } ${PlacementOptions[placement ?? "top"]} ${className ?? ""}`}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

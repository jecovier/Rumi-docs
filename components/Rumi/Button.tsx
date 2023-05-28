export interface ButtonGroupProps
  extends React.ComponentPropsWithoutRef<"button"> {
  scale?: string;
  ghost?: boolean;
}

export default function Button({
  children,
  className,
  ghost,
  ...restProps
}: ButtonGroupProps) {
  return (
    <button
      className={`button scale flex-shrink-0 inline-flex gap-1.5 justify-center items-center group font-medium rounded-md focus-visible:outline-none focus-visible:ring-1 border ${
        ghost
          ? "border-transparent hover:border-primary-100/60 hover:dark:border-primary-600/30"
          : "border-primary-500 dark:border-primary-400"
      } bg-transparent text-primary-500 dark:text-primary-300 hover:bg-primary-100/60 hover:dark:bg-primary-600/30 hover:dark:text-primary-200 focus-visible:ring-primary-300 focus-visible:bg-primary-100/60 focus-visible:dark:bg-primary-600/30 active:bg-primary-200/70 active:dark:bg-primary-600/80 ${
        className ?? ""
      }`}
      {...restProps}
    >
      {children}
    </button>
  );
}

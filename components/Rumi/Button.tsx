export interface ButtonGroupProps
  extends React.ComponentPropsWithoutRef<"button"> {
  ghost?: boolean;
}

export default function Buttond({
  children,
  className,
  ghost,
  ...restProps
}: ButtonGroupProps) {
  return (
    <button
      className={`button component scale group outlined base-transparent contrast-primary-500 dark:contrast-primary-400 hover ${
        className ?? ""
      } ${ghost && "ghost"}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

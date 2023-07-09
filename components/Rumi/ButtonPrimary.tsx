export interface ButtonGroupProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function PrimaryButton({
  children,
  className,
  ...restProps
}: ButtonGroupProps) {
  return (
    <button
      className={`button component scale group solid contrast-white base-primary-500 dark:base-primary-400 hover ${
        className ?? ""
      }`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export interface InputGroupProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export default function Input({ className, ...restProps }: InputGroupProps) {
  return (
    <input
      className={`input scale component base-light-50 dark:base-dark-700 contrast-light-300 dark:contrast-dark-500 hover:contrast-light-400 hover:dark:contrast-dark-400 focus-visible:border-primary-500 focus-visible:base-primary-50/50 focus-visible:dark:base-primary-800/5 ${
        className ?? ""
      }`}
      {...restProps}
    />
  );
}

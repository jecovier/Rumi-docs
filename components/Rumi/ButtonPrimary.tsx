export interface ButtonGroupProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function PrimaryButton({
  children,
  className,
  ...restProps
}: ButtonGroupProps) {
  return (
    <button
      className={`button-primary scale flex-shrink-0 inline-flex gap-1.5 justify-center items-center group focus:outline-none focus-visible:ring-1 font-medium rounded-md border bg-primary-500 border-primary-500 focus-visible:bg-primary-400 focus-visible:border-primary-400 ring-primary-300 text-white hover:bg-primary-400 hover:border-primary-400 active:bg-primary-500 ${
        className ?? ""
      }`}
      {...restProps}
    >
      {children}
    </button>
  );
}

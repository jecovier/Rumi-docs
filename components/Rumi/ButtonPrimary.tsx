export interface ButtonGroupProps
  extends React.ComponentPropsWithoutRef<"button"> {
  scale?: string;
}

export default function PrimaryButton({
  children,
  className,
  scale,
  ...restProps
}: ButtonGroupProps) {
  return (
    <button
      className={`button-primary flex-shrink-0 inline-flex justify-center items-center group focus:outline-none focus-visible:ring-1 font-medium rounded-md border scale-${
        scale || "md"
      } bg-primary-500 border-primary-500 focus-visible:bg-primary-400 focus-visible:border-primary-400 ring-primary-300 text-white hover:bg-primary-400 hover:border-primary-400 active:bg-primary-500 ${
        className ?? ""
      }`}
      {...restProps}
    >
      {children}
    </button>
  );
}

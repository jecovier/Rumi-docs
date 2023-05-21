interface RadioGroupProps extends React.ComponentPropsWithoutRef<"input"> {
  scale?: string;
  suffix?: boolean;
  border?: boolean;
}

const scaleSize: Record<string, string> = {
  xs: "w-3 h-3",
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
  xl: "w-6 h-6",
};

export default function Radio({
  children,
  className,
  scale,
  suffix,
  border,
  ...restProps
}: RadioGroupProps) {
  const currentScale = scale ?? "md";
  return (
    <label
      className={`radio flex-shrink-0 inline-flex justify-center items-center group scale-${currentScale} ${
        suffix ? "flex-row-reverse" : ""
      } ${restProps.disabled ? "disabled" : ""} ${className ?? ""}`}
    >
      <input
        className={`${scaleSize[currentScale]} rounded-full appearance-none bg-no-repeat bg-center text-primary-500 border border-light-400/60 dark:border-dark-500 hover:border-light-500/70 hover:dark:border-dark-400 bg-light-50 dark:bg-dark-700  checked:bg-primary-500 checked:border-primary-500 checked:hover:border-primary-500 checked:icon-circle-light disabled:dark:bg-dark-50/80 disabled:text-light-700`}
        {...restProps}
        type="radio"
      />
      <span className={`prefix ${suffix ? "mr-2" : "ml-2"}`}>{children}</span>
    </label>
  );
}

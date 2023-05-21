interface SwitchGroupProps extends React.ComponentPropsWithoutRef<"input"> {
  scale?: string;
  suffix?: boolean;
  border?: boolean;
}

const scaleSize: Record<string, string> = {
  xs: "w-3 h-3 rounded-sm",
  sm: "w-3.5 h-3.5 rounded",
  md: "w-4 h-4 rounded",
  lg: "w-5 h-5 rounded",
  xl: "w-6 h-6 rounded",
};

export default function Switch({
  children,
  className,
  scale,
  suffix,
  border,
  ...restProps
}: SwitchGroupProps) {
  const currentScale = scale ?? "md";
  return (
    <label
      className={`switch relative flex-shrink-0 inline-flex justify-center items-center group scale-${currentScale} ${
        suffix ? "suffix !pr-[2.5em]" : "!pl-[2.5em]"
      } ${restProps.disabled ? "disabled" : ""} ${className ?? ""}`}
    >
      <input className={`hidden`} {...restProps} type="checkbox" />
      <span className={`prefix ${suffix ? "mr-2" : "ml-2"}`}>{children}</span>
    </label>
  );
}

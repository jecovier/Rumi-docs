export interface SwitchGroupProps
  extends React.ComponentPropsWithoutRef<"input"> {
  suffix?: boolean;
  border?: boolean;
}

export default function Switch({
  children,
  className,
  suffix,
  border,
  ...restProps
}: SwitchGroupProps) {
  return (
    <label
      className={`switch scale relative flex-shrink-0 inline-flex justify-center items-center group ${
        suffix ? "suffix !pr-[2.5em]" : "!pl-[2.5em]"
      } ${restProps.disabled ? "disabled" : ""} ${className ?? ""}`}
    >
      <input className={`hidden`} {...restProps} type="checkbox" />
      <span className={`prefix ${suffix ? "mr-2" : "ml-2"}`}>{children}</span>
    </label>
  );
}

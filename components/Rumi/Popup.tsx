import useToggle from "./hooks/useToggle";

export const LocationOptions = {
  left: "!left-0 -translate-x-full",
  right: "!right-0 translate-x-full",
  top: "bottom-[100%]",
  bottom: "",
} as const;

export const AlignYOptions = {
  bottom: "top-0",
  top: "bottom-0 ",
  center: "top-[50%] -translate-y-1/2",
  none: "",
} as const;

export const AlignXOptions = {
  left: "left-0",
  right: "right-0",
  center: "left-[50%] -translate-x-1/2 ",
  none: "",
} as const;

interface DialogGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  trigger: React.ReactNode;
  location?: keyof typeof LocationOptions;
  alignX?: keyof typeof AlignXOptions;
  alignY?: keyof typeof AlignYOptions;
}

export default function Popup({
  className,
  children,
  trigger,
  location,
  alignX,
  alignY,
  ...restProps
}: DialogGroupProps) {
  const { isActive, toggle } = useToggle(false);

  return (
    <div className="relative">
      <div onClick={toggle}>{trigger}</div>
      <div
        className={`fixed inset-0 z-40 ${isActive ? "block" : "hidden"}`}
        onClick={toggle}
      />
      <div
        className={`absolute origin-top z-50 ${isActive ? "block" : "hidden"} ${
          AlignXOptions[alignX ?? "none"]
        } ${AlignYOptions[alignY ?? "none"]} ${
          LocationOptions[location ?? "bottom"]
        } ${className}`}
        {...restProps}
      >
        {children}
      </div>
    </div>
  );
}

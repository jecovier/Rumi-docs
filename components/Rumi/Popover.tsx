import useToggle from "./hooks/useToggle";

const PlacementOptions = {
  left: "!left-0 -translate-x-full",
  right: "!right-0 translate-x-full",
  top: "bottom-[100%]",
  bottom: "",
} as const;

const AlignYOptions = {
  bottom: "top-0",
  top: "bottom-0 ",
  center: "top-[50%] -translate-y-1/2",
  none: "",
} as const;

const AlignXOptions = {
  left: "left-0",
  right: "right-0",
  center: "left-[50%] -translate-x-1/2 ",
  none: "",
} as const;

const TriggerOptions = {
  click: { openEvent: "onClick", closeEvent: "" },
  hover: { openEvent: "onMouseEnter", closeEvent: "onMouseLeave" },
  focus: { openEvent: "onFocus", closeEvent: "onBlur" },
} as const;

export type PlacementType = keyof typeof PlacementOptions;
export type AlignXType = keyof typeof AlignXOptions;
export type AlignYType = keyof typeof AlignYOptions;
export type TriggerType = keyof typeof TriggerOptions;

export interface PopoverGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  contentSlot?: React.ReactNode;
  trigger?: TriggerType;
  placement?: PlacementType;
  alignX?: AlignXType;
  alignY?: AlignYType;
}

export default function Popover({
  className,
  children,
  contentSlot,
  trigger,
  placement,
  alignX,
  alignY,
  ...restProps
}: PopoverGroupProps) {
  const { isActive, toggle } = useToggle(false);

  return (
    <div className="relative popover">
      <div
        {...((trigger == "click" || !trigger) && {
          onClick: () => toggle(true),
        })}
        {...{
          [TriggerOptions[trigger ?? "click"].openEvent]: () => toggle(true),
          [TriggerOptions[trigger ?? "click"].closeEvent]: () => toggle(false),
        }}
      >
        {children}
        <div
          className={`absolute origin-top z-50 ${
            isActive ? "block" : "hidden"
          } ${AlignXOptions[alignX ?? "none"]} ${
            AlignYOptions[alignY ?? "none"]
          } ${PlacementOptions[placement ?? "bottom"]} ${className}`}
          {...restProps}
        >
          {contentSlot}
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 ${
          isActive && trigger != "hover" ? "block" : "hidden"
        }`}
        {...((trigger == "click" || !trigger) && {
          onClick: () => toggle(false),
        })}
      ></div>
    </div>
  );
}

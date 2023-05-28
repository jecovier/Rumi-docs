import Button, { type ButtonGroupProps } from "./Button";
import Card from "./Card";
import Popover, {
  type PlacementType,
  type AlignXType,
  type AlignYType,
} from "./Popover";

const Chevronplacement = {
  bottom: "",
  top: "-rotate-180",
  left: "rotate-90",
  right: "-rotate-90",
} as const;

export interface DropdownGroupProps extends ButtonGroupProps {
  label?: string;
  placement?: PlacementType;
  alignX?: AlignXType;
  alignY?: AlignYType;
}

export default function Dropdown({
  children,
  className,
  label,
  placement,
  alignX,
  alignY,
  ...restProps
}: DropdownGroupProps) {
  return (
    <Popover
      contentSlot={<Card>{children}</Card>}
      alignX={alignX}
      alignY={alignY}
      placement={placement}
      className="dropdown"
    >
      <Button
        {...restProps}
        className={`dropdown-trigger scale ${
          placement == "left" && "flex-row-reverse"
        } ${className}`}
      >
        {label}
        <span className={`${Chevronplacement[placement || "bottom"]}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </Button>
    </Popover>
  );
}

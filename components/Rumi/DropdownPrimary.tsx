import ButtonPrimary, { type ButtonGroupProps } from "./ButtonPrimary";
import Card from "./Card";
import Popup, {
  type LocationOptions,
  AlignXOptions,
  AlignYOptions,
} from "./Popup";

const ChevronLocation = {
  bottom: "",
  top: "-rotate-180",
  left: "rotate-90",
  right: "-rotate-90",
} as const;

interface DropdownGroupProps extends ButtonGroupProps {
  label: string;
  location?: keyof typeof LocationOptions;
  alignX?: keyof typeof AlignXOptions;
  alignY?: keyof typeof AlignYOptions;
}

export default function DropdownPrimary({
  children,
  className,
  label,
  location,
  alignX,
  alignY,
  ...restProps
}: DropdownGroupProps) {
  return (
    <Popup
      trigger={
        <ButtonPrimary
          {...restProps}
          className={`${location == "left" && "flex-row-reverse"} ${className}`}
        >
          {label}
          <span
            className={`${location == "left" ? "mr-2" : "ml-2"} ${
              ChevronLocation[location || "bottom"]
            }`}
          >
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
        </ButtonPrimary>
      }
      alignX={alignX}
      alignY={alignY}
      location={location}
    >
      <Card>{children}</Card>
    </Popup>
  );
}

import ButtonDialogClose from "./ButtonDialogClose";
import Card from "./Card";
import Dialog from "./Dialog";

export interface DialogGroupProps
  extends React.ComponentPropsWithoutRef<"dialog"> {}

export default function Modal({
  children,
  className,
  ...restProps
}: DialogGroupProps) {
  return (
    <Dialog
      className="modal relative w-11/12 max-w-4xl bg-transparent backdrop:bg-light-700/50 backdrop:dark:bg-dark-900/50"
      {...restProps}
    >
      <ButtonDialogClose
        className="absolute z-10 top-4 right-4"
        className="scale-sm"
        ghost
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </ButtonDialogClose>
      <Card className={`h-full text-light-700 dark:text-dark-200 ${className}`}>
        {children}
      </Card>
    </Dialog>
  );
}

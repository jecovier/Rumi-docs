import ButtonDialogClose from "./ButtonDialogClose";
import Card from "./Card";
import CloseIcon from "./CloseIcon";
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
      <ButtonDialogClose className="absolute z-10 top-4 right-4 scale-sm" ghost>
        <CloseIcon />
      </ButtonDialogClose>
      <Card className={`h-full text-light-700 dark:text-dark-200 ${className}`}>
        {children}
      </Card>
    </Dialog>
  );
}

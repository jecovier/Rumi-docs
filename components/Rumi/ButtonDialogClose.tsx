import Button, { type ButtonGroupProps } from "./Button";

export interface ButtonDialogCloseGroupProps extends ButtonGroupProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ButtonDialogClose({
  children,
  className,
  ...restProps
}: ButtonDialogCloseGroupProps) {
  return (
    <form>
      <Button
        className={className}
        {...restProps}
        value="cancel"
        formMethod="dialog"
      >
        {children}
      </Button>
    </form>
  );
}

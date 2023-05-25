import Button from "./Button";

export default function ButtonDialogClose({
  children,
  className,
  ...restProps
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <form>
      <Button
        className={className}
        {...restProps}
        value="cancel"
        formmethod="dialog"
      >
        {children}
      </Button>
    </form>
  );
}

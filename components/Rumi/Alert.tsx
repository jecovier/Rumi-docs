import { useState } from "react";
import Button from "./Button";
import CloseIcon from "./CloseIcon";

export interface AlertGroupProps extends React.ComponentProps<"div"> {
  closable?: boolean;
}

export default function Alert({
  className,
  children,
  closable,
}: AlertGroupProps) {
  const [visible, setVisible] = useState(true);

  function close() {
    setVisible(false);
  }

  if (!visible) {
    return <></>;
  }

  return (
    <div
      className={`alert scale shadow-lg flex gap-2 items-center w-full relative bg-light-50 dark:bg-dark-700 rounded-md border border-light-300 dark:border-dark-600 ${
        closable && "!pr-2"
      } ${className}`}
    >
      <div className="flex-grow flex items-center gap-2 my-2">{children}</div>
      {closable && (
        <Button onClick={close} ghost className="scale-sm">
          <CloseIcon />
        </Button>
      )}
    </div>
  );
}

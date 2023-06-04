import React, { useEffect, useRef } from "react";
import useClickOutsideDialog from "./hooks/useClickOutsideDialog";

interface DialogGroupProps extends React.ComponentPropsWithoutRef<"dialog"> {
  noClickOutside?: boolean;
}

export default function Dialog({
  children,
  open,
  noClickOutside,
  ...restProps
}: DialogGroupProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const clickOutsideDialog = useClickOutsideDialog(closeDialog);

  function openDialog() {
    ref.current?.showModal();
    if (!noClickOutside) {
      clickOutsideDialog.listenStart();
    }
  }

  function closeDialog() {
    ref.current?.close();
    if (!noClickOutside) {
      clickOutsideDialog.listenStop();
    }
  }

  useEffect(() => {
    Boolean(open) ? openDialog() : closeDialog();
  }, [open, openDialog, closeDialog]);

  return (
    <dialog ref={ref} {...restProps}>
      {children}
    </dialog>
  );
}

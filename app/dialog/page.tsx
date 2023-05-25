"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Button from "@/components/Rumi/Button";
import Dialog from "@/components/Rumi/Dialog";
import useToggle from "@/components/Rumi/hooks/useToggle";

export default function Page() {
  const { isActive: showDialog, toggle: toggleDialog } = useToggle(false);
  return (
    <>
      <h2>Variants</h2>
      <ComponentViewer>
        <Dialog open={showDialog} onClose={() => toggleDialog()}>
          hola
        </Dialog>
        <Button onClick={() => toggleDialog()}>open Dialog</Button>
      </ComponentViewer>
    </>
  );
}

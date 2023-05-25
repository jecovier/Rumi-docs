"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Button from "@/components/Rumi/Button";
import ButtonDialogClose from "@/components/Rumi/ButtonDialogClose";
import Modal from "@/components/Rumi/Modal";
import useToggle from "@/components/Rumi/hooks/useToggle";

export default function Page() {
  const { isActive: showModal, toggle: toggleModal } = useToggle(false);
  return (
    <>
      <h2>Variants</h2>
      <ComponentViewer>
        <Modal open={showModal} onClose={() => toggleModal()}>
          <div className="w-full h-[32rem] flex flex-col gap-6 items-center justify-center">
            <h3 className="text-xl">This is a modal</h3>
            <ButtonDialogClose>close</ButtonDialogClose>
          </div>
        </Modal>
        <Button onClick={() => toggleModal()}>open Modal</Button>
      </ComponentViewer>
    </>
  );
}

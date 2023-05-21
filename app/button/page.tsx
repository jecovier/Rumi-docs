"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Button from "@/components/Rumi/Button";
import ButtonPrimary from "@/components/Rumi/ButtonPrimary";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <ButtonPrimary>Primary</ButtonPrimary>
          <Button>secondary</Button>
          <Button>
            <MagnifyingGlassIcon className="icon mr-1" />
            Icon
          </Button>
          <ButtonPrimary disabled className="loading">
            Loading
          </ButtonPrimary>
          <Button disabled className="loading" onClick={() => alert("oooo")}>
            Loading
          </Button>
          <ButtonPrimary disabled>Disabled</ButtonPrimary>
          <Button disabled>Disabled</Button>
          <Button className="!rounded-full">Pill</Button>
          <Button ghost>Ghost</Button>
        </div>
      </ComponentViewer>

      <h2 className="text-xl mt-12">Size</h2>
      <ComponentViewer>
        <div className="flex gap-4 items-start">
          <Button scale="xs">scale XS</Button>
          <Button scale="sm">scale SM</Button>
          <Button scale="md">Normal</Button>
          <Button scale="lg">scale LG</Button>
          <Button scale="xl">scale XL</Button>
        </div>
      </ComponentViewer>
    </>
  );
}

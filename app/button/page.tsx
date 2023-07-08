"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Button from "@/components/Rumi/Button";
import Buttond from "@/components/Rumi/Buttond";
import ButtonPrimary from "@/components/Rumi/ButtonPrimary";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4 items-start">
          <ButtonPrimary>Primary</ButtonPrimary>
          <Button>secondary</Button>
          <Buttond>secondary</Buttond>
          <Button>
            <MagnifyingGlassIcon className="icon" />
            Icon
          </Button>

          <Button>
            <MagnifyingGlassIcon className="icon" />
          </Button>
          <ButtonPrimary disabled className="loading">
            Loading
          </ButtonPrimary>
          <Button disabled className="loading" onClick={() => alert("oooo")}>
            Loading
          </Button>
          <ButtonPrimary disabled>Disabled</ButtonPrimary>
          <Button disabled>Disabled</Button>
          <Button className="!rounded-full">Pill button</Button>
          <Button ghost>Ghost button</Button>
        </div>
      </ComponentViewer>

      <h2 className="text-xl mt-12">Size</h2>
      <ComponentViewer>
        <div className="flex gap-4 items-start">
          <Button className="scale-xs">scale XS</Button>
          <Button className="scale-sm">scale SM</Button>
          <Button className="scale-md">Normal</Button>
          <Button className="scale-lg">scale LG</Button>
          <Button className="scale-xl">scale XL</Button>
        </div>
      </ComponentViewer>
    </>
  );
}

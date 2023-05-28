"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Button from "@/components/Rumi/Button";
import Card from "@/components/Rumi/Card";
import Popover from "@/components/Rumi/Popover";
import { useRef } from "react";

function ExampleCard() {
  return <Card className="p-3">content</Card>;
}

export default function Page() {
  const content = useRef(null);

  return (
    <>
      <h2>Usage</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Popover contentSlot={<ExampleCard />}>
            <Button className="w-full">Basic usage</Button>
          </Popover>
        </div>
      </ComponentViewer>

      <h2>placement</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Popover contentSlot={<ExampleCard />} placement="top">
            <Button className="w-full">Top</Button>
          </Popover>
          <Popover contentSlot={<ExampleCard />} placement="bottom">
            <Button className="w-full">Bottom</Button>
          </Popover>
          <Popover contentSlot={<ExampleCard />} placement="right">
            <Button className="w-full">Right</Button>
          </Popover>
          <Popover contentSlot={<ExampleCard />} placement="left">
            <Button className="w-full">Left</Button>
          </Popover>
        </div>
      </ComponentViewer>

      <h2>Horizontal Alignment</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Popover contentSlot={<ExampleCard />} alignX="left">
            <Button className="w-full">alignment left</Button>
          </Popover>
          <Popover contentSlot={<ExampleCard />} alignX="right">
            <Button className="w-full">alignment right</Button>
          </Popover>
          <Popover contentSlot={<ExampleCard />} alignX="center">
            <Button className="w-full">alignment center</Button>
          </Popover>
        </div>
      </ComponentViewer>

      <h2>Vertical Alignment</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Popover contentSlot={<ExampleCard />} alignY="top" placement="right">
            <Button className="w-full">alignment top</Button>
          </Popover>
          <Popover
            contentSlot={<ExampleCard />}
            alignY="bottom"
            placement="right"
          >
            <Button className="w-full">alignment bottom</Button>
          </Popover>
          <Popover
            contentSlot={<ExampleCard />}
            alignY="center"
            placement="right"
          >
            <Button className="w-full">alignment center</Button>
          </Popover>
        </div>
      </ComponentViewer>

      <h2>Trigger</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Popover contentSlot={<ExampleCard />} trigger="hover">
            <Button className="w-full">on hover</Button>
          </Popover>
          <Popover contentSlot={<ExampleCard />} trigger="click">
            <Button className="w-full">on click</Button>
          </Popover>

          <Popover contentSlot={<ExampleCard />} trigger="focus">
            <Button className="w-full">on focus</Button>
          </Popover>
        </div>
      </ComponentViewer>
    </>
  );
}

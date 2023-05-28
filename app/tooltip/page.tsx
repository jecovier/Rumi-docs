"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Button from "@/components/Rumi/Button";
import Tooltip from "@/components/Rumi/Tooltip";

export default function Page() {
  return (
    <>
      <h2>Usage</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Tooltip label="Tooltip Button" className="w-32 text-center">
            <Button>Tooltip </Button>
          </Tooltip>
        </div>
      </ComponentViewer>
      <h2>placement</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4 items-start">
          <Tooltip label="placement Bottom" placement="bottom">
            <Button>Tooltip bottom</Button>
          </Tooltip>
          <Tooltip label="placement Top" placement="top">
            <Button>Tooltip top</Button>
          </Tooltip>
          <Tooltip label="placement Right" placement="right">
            <Button>Tooltip right</Button>
          </Tooltip>
          <Tooltip label="placement Left" placement="left">
            <Button>Tooltip left</Button>
          </Tooltip>
        </div>
      </ComponentViewer>
    </>
  );
}

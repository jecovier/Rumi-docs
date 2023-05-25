"use client";

import ComponentViewer from "@/components/ComponentViewer";
import ExampleList from "@/components/ExampleList";
import Dropdown from "@/components/Rumi/Dropdown";
import DropdownPrimary from "@/components/Rumi/DropdownPrimary";

export default function Page() {
  return (
    <>
      <h2>Usage</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <DropdownPrimary label="Dropdown Primary">
            <ExampleList />
          </DropdownPrimary>
          <Dropdown label="Dropdown Button">
            <ExampleList />
          </Dropdown>
          <Dropdown label="Dropdown Ghost" ghost>
            <ExampleList />
          </Dropdown>
        </div>
      </ComponentViewer>
      <h2>Location</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Dropdown label="Location Bottom" location="bottom">
            <ExampleList />
          </Dropdown>
          <Dropdown label="Location Top" location="top">
            <ExampleList />
          </Dropdown>
          <Dropdown label="Location Right" location="right" alignY="center">
            <ExampleList />
          </Dropdown>
          <Dropdown label="Location Left" location="left" alignY="top">
            <ExampleList />
          </Dropdown>
        </div>
      </ComponentViewer>
    </>
  );
}

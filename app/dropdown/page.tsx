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
          <div className="flex items-center gap-2">
            <DropdownPrimary>
              <ExampleList />
            </DropdownPrimary>
            <Dropdown>
              <ExampleList />
            </Dropdown>
            <Dropdown ghost>
              <ExampleList />
            </Dropdown>
          </div>
        </div>
      </ComponentViewer>
      <h2>placement</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Dropdown label="placement Bottom" placement="bottom">
            <ExampleList />
          </Dropdown>
          <Dropdown label="placement Top" placement="top">
            <ExampleList />
          </Dropdown>
          <Dropdown label="placement Right" placement="right" alignY="center">
            <ExampleList />
          </Dropdown>
          <Dropdown label="placement Left" placement="left" alignY="top">
            <ExampleList />
          </Dropdown>
        </div>
      </ComponentViewer>
    </>
  );
}

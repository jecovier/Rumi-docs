"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Switch from "@/components/Rumi/Switch";

export default function Page() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Switch />
          <Switch>with label</Switch>
          <Switch checked>checked</Switch>
          <Switch suffix>as suffix</Switch>
          <Switch disabled>disabled</Switch>
          <Switch disabled checked>
            disabled checked
          </Switch>
        </div>
      </ComponentViewer>

      <h2 className="text-xl mt-12">Sizes</h2>
      <ComponentViewer>
        <div className="flex flex-col">
          <div className="flex items-start gap-4">
            <Switch className="scale-xs">scale xs</Switch>
            <Switch className="scale-sm">scale sm</Switch>
            <Switch className="scale-md">scale md</Switch>
            <Switch className="scale-lg">scale lg</Switch>
            <Switch className="scale-xl">scale xl</Switch>
          </div>
        </div>
      </ComponentViewer>
    </>
  );
}

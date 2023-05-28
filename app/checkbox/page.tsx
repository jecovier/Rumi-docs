"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Checkbox from "@/components/Rumi/Checkbox";
import CheckboxBorder from "@/components/Rumi/CheckboxBorder";

export default function Page() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Checkbox />
          <Checkbox>with label</Checkbox>
          <Checkbox checked>checked</Checkbox>
          <Checkbox suffix>as suffix</Checkbox>
          <CheckboxBorder border>with border</CheckboxBorder>
          <CheckboxBorder border suffix>
            border & suffix
          </CheckboxBorder>
          <Checkbox disabled>disabled</Checkbox>
          <Checkbox disabled checked>
            disabled checked
          </Checkbox>
        </div>
      </ComponentViewer>

      <h2 className="text-xl mt-12">Sizes</h2>
      <ComponentViewer>
        <div className="flex flex-col">
          <div className="flex items-start gap-4">
            <Checkbox className="scale-xs">scale xs</Checkbox>
            <Checkbox className="scale-sm">scale sm</Checkbox>
            <Checkbox className="scale-md">scale md</Checkbox>
            <Checkbox className="scale-lg">scale lg</Checkbox>
            <Checkbox className="scale-xl">scale xl</Checkbox>
          </div>
          <div className="flex items-start gap-4">
            <CheckboxBorder className="scale-xs">scale xs</CheckboxBorder>
            <CheckboxBorder className="scale-sm">scale sm</CheckboxBorder>
            <CheckboxBorder className="scale-md">scale md</CheckboxBorder>
            <CheckboxBorder className="scale-lg">scale lg</CheckboxBorder>
            <CheckboxBorder className="scale-xl">scale xl</CheckboxBorder>
          </div>
        </div>
      </ComponentViewer>
    </>
  );
}

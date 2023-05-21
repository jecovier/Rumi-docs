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
            <Checkbox scale="xs">scale xs</Checkbox>
            <Checkbox scale="sm">scale sm</Checkbox>
            <Checkbox scale="md">scale md</Checkbox>
            <Checkbox scale="lg">scale lg</Checkbox>
            <Checkbox scale="xl">scale xl</Checkbox>
          </div>
          <div className="flex items-start gap-4">
            <CheckboxBorder scale="xs">scale xs</CheckboxBorder>
            <CheckboxBorder scale="sm">scale sm</CheckboxBorder>
            <CheckboxBorder scale="md">scale md</CheckboxBorder>
            <CheckboxBorder scale="lg">scale lg</CheckboxBorder>
            <CheckboxBorder scale="xl">scale xl</CheckboxBorder>
          </div>
        </div>
      </ComponentViewer>
    </>
  );
}

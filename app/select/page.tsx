"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Select from "@/components/Rumi/Select";

export default function Page() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Select>
            <option>option 1</option>
            <option>option 2</option>
            <option disabled>disabled option</option>
          </Select>
          <Select placeholder="placeholder... &nbsp;">
            <option>option 1</option>
            <option>option 2</option>
          </Select>
          <Select placeholder="Option Groups">
            <optgroup label="group 1">
              <option>option 1</option>
              <option>option 2</option>
            </optgroup>
            <optgroup label="group 2">
              <option disabled>option 3</option>
              <option>option 4</option>
            </optgroup>
            <optgroup label="group 3" disabled>
              <option>option 5</option>
              <option>option 6</option>
            </optgroup>
          </Select>
          <Select disabled>
            <option selected>disabled</option>
          </Select>
        </div>
      </ComponentViewer>

      <h2 className="text-xl mt-12">Sizes</h2>
      <ComponentViewer>
        <div className="flex items-start gap-4">
          <Select className="scale-xs">
            <option>scale xs</option>
          </Select>
          <Select className="scale-sm">
            <option>scale sm</option>
          </Select>
          <Select className="scale-md">
            <option>scale md</option>
          </Select>
          <Select className="scale-lg">
            <option>scale lg</option>
          </Select>
          <Select className="scale-xl">
            <option>scale xl</option>
          </Select>
        </div>
      </ComponentViewer>
    </>
  );
}

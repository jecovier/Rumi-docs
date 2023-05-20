"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Select from "@/components/Rumi/Select";

export default function select() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Select>
            <option>hola</option>
          </Select>
        </div>
      </ComponentViewer>
    </>
  );
}

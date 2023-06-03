"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Range from "@/components/Rumi/Range";

export default function Page() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Range />
          <Range className="!border-none" />
        </div>
      </ComponentViewer>
      <h2 className="text-xl mt-12">Sizes</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Range placeholder="xs" className="scale-xs" />
          <Range placeholder="sm" className="scale-sm" />
          <Range placeholder="md" className="scale-md" />
          <Range placeholder="lg" className="scale-lg" />
          <Range placeholder="xl" className="scale-xl" />
        </div>
      </ComponentViewer>
    </>
  );
}

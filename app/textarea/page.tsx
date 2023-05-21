"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Textarea from "@/components/Rumi/Textarea";

export default function Page() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Textarea className="w-96" rows={6}>
            Text area... with some text
          </Textarea>
          <Textarea
            className="w-96"
            rows={6}
            placeholder="Placeholder..."
          ></Textarea>
        </div>
      </ComponentViewer>
    </>
  );
}

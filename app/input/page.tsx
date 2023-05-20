"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Input from "@/components/Rumi/Input";
import { MagnifyingGlassIcon, NoSymbolIcon } from "@heroicons/react/24/outline";

export default function input() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Input type="text" />
          <Input type="text" placeholder="placeholder" />
          <Input type="text" value="normal value" />
          <Input type="text" placeholder="prefix">
            EC
          </Input>
          <Input type="text" placeholder="suffix" suffix>
            .COM
          </Input>
          <Input type="text" placeholder="icon">
            <MagnifyingGlassIcon className="icon" />
          </Input>
          <Input type="text" placeholder="icon" suffix>
            <MagnifyingGlassIcon className="icon" />
          </Input>
          <Input type="text" value="disabled value" disabled />
          <Input type="text" placeholder="disabled placeholder" disabled>
            <NoSymbolIcon className="icon" />
          </Input>
        </div>
      </ComponentViewer>
      <h2 className="text-xl mt-12">Sizes</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Input type="text" placeholder="xs" scale="xs" />
          <Input type="text" placeholder="sm" scale="sm" />
          <Input type="text" placeholder="md" scale="md" />
          <Input type="text" placeholder="lg" scale="lg" />
          <Input type="text" placeholder="xl" scale="xl" />
        </div>
      </ComponentViewer>
      <h2 className="text-xl mt-12">Types</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Input type="color" placeholder="color" />
          <Input type="date" />
          <Input type="datetime-local" />
          <Input type="email" placeholder="email" />
          <Input type="hidden" placeholder="hidden" />
          <Input type="month" placeholder="month" />
          <Input type="number" placeholder="number" />
          <Input type="password" placeholder="password" />
          <Input type="range" placeholder="range" />
          <Input type="search" placeholder="search" />
          <Input type="tel" placeholder="tel" />
          <Input type="time" placeholder="time" />
          <Input type="url" placeholder="url" />
          <Input type="week" placeholder="week" />

          {/* BUTTONS
          <Input type="reset" placeholder="reset" />
          <Input type="button" placeholder="button" />
          <Input type="image" placeholder="image" />
          <Input type="submit" placeholder="submit" /> */}

          {/* <Input type="checkbox" placeholder="checkbox" /> */}
          {/* <Input type="file" placeholder="file" /> */}
          {/* <Input type="radio" placeholder="radio" /> */}
        </div>
      </ComponentViewer>
    </>
  );
}

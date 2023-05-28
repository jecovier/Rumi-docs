import { useRef } from "react";
import { CodeBracketIcon, WindowIcon } from "@heroicons/react/24/outline";
import Button from "./Rumi/Button";
import CodeViewer from "./CodeViewer";
import useToggle from "./Rumi/hooks/useToggle";

export default function ComponentViewer({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { isActive: showCode, toggle: toggleCode } = useToggle(false);
  const { isActive: showBackground, toggle: toggleBackground } =
    useToggle(true);

  return (
    <div className="flex flex-col  mt-4 mb-8">
      <div
        ref={ref}
        className={`flex justify-center ${
          showBackground ? "bg-light-100 dark:bg-dark-800/20" : "bg-transparent"
        } border rounded-t-md border-light-300 dark:border-dark-600 p-12`}
      >
        {children}
      </div>
      <footer className="border rounded-b-md border-t-0 border-light-300 dark:border-dark-600">
        <div className="flex gap-4 px-4 py-1">
          <Button ghost className="scale-sm" onClick={() => toggleCode()}>
            <CodeBracketIcon className="icon text-xl mr-1" /> Code
          </Button>
          <Button ghost className="scale-sm" onClick={() => toggleBackground()}>
            <WindowIcon className="icon text-xl mr-1" /> Background
          </Button>
        </div>
        <div className={`flex flex-col w-full ${showCode ? "" : "hidden"}`}>
          <CodeViewer>{ref?.current?.innerHTML}</CodeViewer>
          <Button ghost onClick={() => toggleCode()} className="!rounded-none">
            close code
          </Button>
        </div>
      </footer>
    </div>
  );
}

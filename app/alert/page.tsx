"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Alert from "@/components/Rumi/Alert";
import Button from "@/components/Rumi/Button";
import {
  BellAlertIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function page() {
  return (
    <>
      <h2>Usage</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4 w-full items-center justify-center">
          <Alert>This is an Alert content</Alert>
          <Alert closable>This is a closable Alert</Alert>
          <Alert closable>
            <CheckCircleIcon className="icon text-lg text-emerald-500" />
            Using icons inside an alert
          </Alert>
          <Alert>
            <ExclamationCircleIcon className="icon text-lg text-red-500 dark:text-red-300" />
            <p className="flex-grow">with a custom action</p>
            <Button className="scale-xs">Undo</Button>
          </Alert>
          <Alert closable>
            <BellAlertIcon className="icon text-lg text-purple-500 dark:text-purple-300" />
            <p className="flex-grow flex flex-col ml-2">
              <h2 className="font-bold">with a title</h2>
              and a description in a second row...
            </p>
            <Button className="scale-xs">See</Button>
          </Alert>
        </div>
      </ComponentViewer>
    </>
  );
}

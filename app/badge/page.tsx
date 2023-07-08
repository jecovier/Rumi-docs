"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Badge from "@/components/Rumi/Badge";
import Button from "@/components/Rumi/Button";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function page() {
  return (
    <>
      <h2>Usage</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4 w-full items-center justify-center">
          <Badge>Badge</Badge>
          <Badge>
            <CheckCircleIcon className="icon inline text-emerald-500" />
            Badge
          </Badge>
          <Badge />
          <Badge>+99</Badge>
        </div>
      </ComponentViewer>
      <h2>Size</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4 w-full items-center justify-center">
          <p className="scale-xs">
            This is a xs <Badge>Badge</Badge>
          </p>
          <p className="scale-sm">
            This is a sm <Badge>Badge</Badge>
          </p>
          <p className="scale-md">
            This is a md <Badge>Badge</Badge>
          </p>
          <p className="scale-lg">
            This is a lg <Badge>Badge</Badge>
          </p>
          <p className="scale-xl">
            This is a xl <Badge>Badge</Badge>
          </p>
        </div>
      </ComponentViewer>
    </>
  );
}

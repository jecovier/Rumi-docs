"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Toggle from "@/components/Rumi/Toggle";
import ToggleOption from "@/components/Rumi/ToggleOption";
import {
  FunnelIcon,
  Bars3Icon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Page() {
  const [group1, setGroup1] = useState<string>("On");
  const [group2, setGroup2] = useState<string>("Some");
  const [group3, setGroup3] = useState<string>("right");
  const [group4, setGroup4] = useState<string>("On");

  const onGroup1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup1(event.target.value);
  };

  const onGroup2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup2(event.target.value);
  };

  const onGroup3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup3(event.target.value);
  };

  const onGroup4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup4(event.target.value);
  };
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Toggle name="active_toggle">
            <ToggleOption
              value="On"
              onChange={onGroup1Change}
              checked={group1 == "On"}
            >
              On
            </ToggleOption>
            <ToggleOption
              value="Off"
              onChange={onGroup1Change}
              checked={group1 == "Off"}
            >
              Off
            </ToggleOption>
          </Toggle>
          <Toggle name="filter_toggle">
            <ToggleOption
              value="All"
              onChange={onGroup2Change}
              checked={group2 == "All"}
            >
              <FunnelIcon className="icon" />
              All
            </ToggleOption>
            <ToggleOption
              value="Some"
              onChange={onGroup2Change}
              checked={group2 == "Some"}
            >
              <FunnelIcon className="icon" />
              Some
            </ToggleOption>
            <ToggleOption
              value="None"
              onChange={onGroup2Change}
              checked={group2 == "None"}
            >
              <FunnelIcon className="icon" />
              None
            </ToggleOption>
          </Toggle>
          <Toggle name="align_toggle">
            <ToggleOption
              value="left"
              onChange={onGroup3Change}
              checked={group3 == "left"}
            >
              <Bars3BottomLeftIcon className="icon" />
            </ToggleOption>
            <ToggleOption
              value="center"
              onChange={onGroup3Change}
              checked={group3 == "center"}
            >
              <Bars3Icon className="icon" />
            </ToggleOption>
            <ToggleOption
              value="right"
              onChange={onGroup3Change}
              checked={group3 == "right"}
            >
              <Bars3BottomRightIcon className="icon" />
            </ToggleOption>
          </Toggle>
        </div>
      </ComponentViewer>
      <h2 className="text-xl mt-12">Scale</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Toggle name="scale-xs" className="scale-xs">
            <ToggleOption
              value="On"
              onChange={onGroup4Change}
              checked={group4 == "On"}
            >
              On
            </ToggleOption>
            <ToggleOption
              value="Off"
              onChange={onGroup4Change}
              checked={group4 == "Off"}
            >
              Off
            </ToggleOption>
          </Toggle>
          <Toggle name="scale-sm" className="scale-sm">
            <ToggleOption
              value="On"
              onChange={onGroup4Change}
              checked={group4 == "On"}
            >
              On
            </ToggleOption>
            <ToggleOption
              value="Off"
              onChange={onGroup4Change}
              checked={group4 == "Off"}
            >
              Off
            </ToggleOption>
          </Toggle>
          <Toggle name="scale-md" className="scale-md">
            <ToggleOption
              value="On"
              onChange={onGroup4Change}
              checked={group4 == "On"}
            >
              On
            </ToggleOption>
            <ToggleOption
              value="Off"
              onChange={onGroup4Change}
              checked={group4 == "Off"}
            >
              Off
            </ToggleOption>
          </Toggle>
          <Toggle name="scale-lg" className="scale-lg">
            <ToggleOption
              value="On"
              onChange={onGroup4Change}
              checked={group4 == "On"}
            >
              On
            </ToggleOption>
            <ToggleOption
              value="Off"
              onChange={onGroup4Change}
              checked={group4 == "Off"}
            >
              Off
            </ToggleOption>
          </Toggle>
          <Toggle name="scale-xl" className="scale-xl">
            <ToggleOption
              value="On"
              onChange={onGroup4Change}
              checked={group4 == "On"}
            >
              On
            </ToggleOption>
            <ToggleOption
              value="Off"
              onChange={onGroup4Change}
              checked={group4 == "Off"}
            >
              Off
            </ToggleOption>
          </Toggle>
        </div>
      </ComponentViewer>
    </>
  );
}

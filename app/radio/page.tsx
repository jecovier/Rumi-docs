"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Radio from "@/components/Rumi/Radio";
import RadioBorder from "@/components/Rumi/RadioBorder";
import { useState } from "react";

export default function Page() {
  const [group1, setGroup1] = useState<Number>(3);
  const [group2, setGroup2] = useState<Number>(3);
  const [group3, setGroup3] = useState<Number>(3);

  const onGroup1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup1(+event.target.value);
  };

  const onGroup2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup2(+event.target.value);
  };

  const onGroup3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup3(+event.target.value);
  };

  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Radio
            value="1"
            checked={group1 === 1}
            onChange={onGroup1Change}
            name="group-1"
          />
          <Radio
            value="2"
            checked={group1 === 2}
            onChange={onGroup1Change}
            name="group-1"
          >
            with label
          </Radio>
          <Radio
            value="3"
            checked={group1 === 3}
            onChange={onGroup1Change}
            name="group-1"
          >
            checked
          </Radio>
          <Radio
            value="4"
            checked={group1 === 4}
            onChange={onGroup1Change}
            name="group-1"
            suffix
          >
            as suffix
          </Radio>
          <RadioBorder
            value="5"
            checked={group1 === 5}
            onChange={onGroup1Change}
            name="group-1"
            border
          >
            with border
          </RadioBorder>
          <RadioBorder
            value="6"
            checked={group1 === 6}
            onChange={onGroup1Change}
            name="group-1"
            border
            suffix
          >
            border & suffix
          </RadioBorder>
          <Radio
            value="7"
            checked={group1 === 7}
            onChange={onGroup1Change}
            name="group-e"
            disabled
          >
            disabled
          </Radio>
          <Radio disabled checked>
            disabled checked
          </Radio>
        </div>
      </ComponentViewer>

      <h2 className="text-xl mt-12">Sizes</h2>
      <ComponentViewer>
        <div className="flex flex-col">
          <div className="flex items-start gap-4">
            <Radio
              value="1"
              checked={group2 === 1}
              onChange={onGroup2Change}
              name="group-2"
              className="scale-xs"
            >
              scale xs
            </Radio>
            <Radio
              value="2"
              checked={group2 === 2}
              onChange={onGroup2Change}
              name="group-2"
              className="scale-sm"
            >
              scale sm
            </Radio>
            <Radio
              value="3"
              checked={group2 === 3}
              onChange={onGroup2Change}
              name="group-2"
              className="scale-md"
            >
              scale md
            </Radio>
            <Radio
              value="4"
              checked={group2 === 4}
              onChange={onGroup2Change}
              name="group-2"
              className="scale-lg"
            >
              scale lg
            </Radio>
            <Radio
              value="5"
              checked={group2 === 5}
              onChange={onGroup2Change}
              name="group-2"
              className="scale-xl"
            >
              scale xl
            </Radio>
          </div>
          <div className="flex items-start gap-4">
            <RadioBorder
              value="1"
              checked={group3 === 1}
              onChange={onGroup3Change}
              name="group-3"
              className="scale-xs"
            >
              scale xs
            </RadioBorder>
            <RadioBorder
              value="2"
              checked={group3 === 2}
              onChange={onGroup3Change}
              name="group-3"
              className="scale-sm"
            >
              scale sm
            </RadioBorder>
            <RadioBorder
              value="3"
              checked={group3 === 3}
              onChange={onGroup3Change}
              name="group-3"
              className="scale-md"
            >
              scale md
            </RadioBorder>
            <RadioBorder
              value="4"
              checked={group3 === 4}
              onChange={onGroup3Change}
              name="group-3"
              className="scale-lg"
            >
              scale lg
            </RadioBorder>
            <RadioBorder
              value="5"
              checked={group3 === 5}
              onChange={onGroup3Change}
              name="group-3"
              className="scale-xl"
            >
              scale xl
            </RadioBorder>
          </div>
        </div>
      </ComponentViewer>
    </>
  );
}

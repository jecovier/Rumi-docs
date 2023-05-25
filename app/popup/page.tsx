"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Button from "@/components/Rumi/Button";
import Card from "@/components/Rumi/Card";
import Popup from "@/components/Rumi/Popup";

export default function Page() {
  return (
    <>
      <h2>Usage</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Popup trigger={<Button className="w-full">Basic usage</Button>}>
            <Card className="p-3">content</Card>
          </Popup>
        </div>
      </ComponentViewer>

      <h2>Location</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Popup
            trigger={<Button className="w-full">Top</Button>}
            location="top"
          >
            <Card className="p-3">content</Card>
          </Popup>
          <Popup
            trigger={<Button className="w-full">Bottom</Button>}
            location="bottom"
          >
            <Card className="p-3">content</Card>
          </Popup>
          <Popup
            trigger={<Button className="w-full">Right</Button>}
            location="right"
          >
            <Card className="p-3">content</Card>
          </Popup>
          <Popup
            trigger={<Button className="w-full">Left</Button>}
            location="left"
          >
            <Card className="p-3">content</Card>
          </Popup>
        </div>
      </ComponentViewer>

      <h2>Horizontal Alignment</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Popup
            trigger={<Button className="w-full">alignment left</Button>}
            alignX="left"
          >
            <Card className="p-3">content</Card>
          </Popup>
          <Popup
            trigger={<Button className="w-full">alignment right</Button>}
            alignX="right"
          >
            <Card className="p-3">content</Card>
          </Popup>
          <Popup
            trigger={<Button className="w-full">alignment center</Button>}
            alignX="center"
          >
            <Card className="p-3">content</Card>
          </Popup>
        </div>
      </ComponentViewer>

      <h2>Vertical Alignment</h2>
      <ComponentViewer>
        <div className="flex flex-col gap-4">
          <Popup
            trigger={<Button className="w-full">alignment top</Button>}
            alignY="top"
            location="right"
          >
            <Card className="p-3">content</Card>
          </Popup>
          <Popup
            trigger={<Button className="w-full">alignment bottom</Button>}
            alignY="bottom"
            location="right"
          >
            <Card className="p-3">content</Card>
          </Popup>
          <Popup
            trigger={<Button className="w-full">alignment center</Button>}
            alignY="center"
            location="right"
          >
            <Card className="p-3">content</Card>
          </Popup>
        </div>
      </ComponentViewer>
    </>
  );
}

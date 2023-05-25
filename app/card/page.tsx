"use client";

import ComponentViewer from "@/components/ComponentViewer";
import Card from "@/components/Rumi/Card";

export default function page() {
  return (
    <>
      <h2>Usage</h2>
      <ComponentViewer>
        <Card>This is a card content</Card>
      </ComponentViewer>
    </>
  );
}

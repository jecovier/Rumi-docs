import Card from "@/components/Rumi/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center w-full min-h-screen">
        <Card className="p-12">
          <h2 className="text-2xl">Rumi UI</h2>
          <p>This is a work in progress. Hope to release it soon!</p>
        </Card>
      </div>
    </main>
  );
}

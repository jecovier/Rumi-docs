"use client";

import ComponentViewer from "@/components/ComponentViewer";
import HR from "@/components/Rumi/HR";
import Separator from "@/components/Rumi/Separator";
import SeparatorVertical from "@/components/Rumi/SeparatorVertical";
import { StarIcon } from "@heroicons/react/24/outline";

export default function page() {
  return (
    <>
      <h2>Single HR</h2>
      <ComponentViewer>
        <div className="flex flex-col">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <HR />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <HR label="Right position" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <HR label="Left position" left />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
        </div>
      </ComponentViewer>

      <h2>Horizontal Separator</h2>
      <ComponentViewer>
        <div className="flex flex-col">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <Separator />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <Separator>
            <StarIcon className="icon" />
          </Separator>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <Separator left>
            <StarIcon className="icon" />
          </Separator>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <Separator right>
            <StarIcon className="icon" />
          </Separator>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <Separator center>
            <StarIcon className="icon" />
          </Separator>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
        </div>
      </ComponentViewer>

      <h2>Vertical Separator</h2>
      <ComponentViewer>
        <div className="flex flex-col">
          <div className="flex">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
            <SeparatorVertical />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
            <SeparatorVertical>
              <StarIcon className="icon" />
            </SeparatorVertical>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
          </div>
          <div className="flex mt-12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
            <SeparatorVertical center>
              <StarIcon className="icon" />
            </SeparatorVertical>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
          </div>
          <div className="flex mt-12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
            <SeparatorVertical top>
              <StarIcon className="icon" />
            </SeparatorVertical>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
          </div>
          <div className="flex mt-12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
            <SeparatorVertical bottom>
              <StarIcon className="icon" />
            </SeparatorVertical>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
          </div>
        </div>
      </ComponentViewer>
    </>
  );
}

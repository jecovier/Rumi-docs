"use client";

import ComponentViewer from "@/components/ComponentViewer";
import HR from "@/components/Rumi/HR";
import Divider from "@/components/Rumi/Divider";
import DividerVertical from "@/components/Rumi/DividerVertical";
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

      <h2>Horizontal Divider</h2>
      <ComponentViewer>
        <div className="flex flex-col">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <Divider>
            <StarIcon className="icon" />
          </Divider>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <Divider left>
            <StarIcon className="icon" />
          </Divider>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <Divider right>
            <StarIcon className="icon" />
          </Divider>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
          <Divider center>
            <StarIcon className="icon" />
          </Divider>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium minus ducimus maxime non quod obcaecati veritatis modi
            labore est suscipit itaque, eos placeat a voluptatem magnam pariatur
            harum atque!
          </p>
        </div>
      </ComponentViewer>

      <h2>Vertical Divider</h2>
      <ComponentViewer>
        <div className="flex flex-col">
          <div className="flex">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium minus ducimus maxime non quod obcaecati veritatis modi
              labore est suscipit itaque, eos placeat a voluptatem magnam
              pariatur harum atque!
            </p>
            <DividerVertical>
              <StarIcon className="icon" />
            </DividerVertical>
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
            <DividerVertical center>
              <StarIcon className="icon" />
            </DividerVertical>
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
            <DividerVertical top>
              <StarIcon className="icon" />
            </DividerVertical>
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
            <DividerVertical bottom>
              <StarIcon className="icon" />
            </DividerVertical>
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

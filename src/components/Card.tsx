import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { FC } from "react";
import "@/app/component.css";

interface CardProps {
  label: string;
  image: string | StaticImport;
  progress?: string | number;
}

const Card: FC<CardProps> = ({ label, image, progress }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-3 border-2 border-white/40 rounded-lg p-2 duration-150 hover:scale-105 hover:shadow-2xl ">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={label}
            className="object-cover absolute h-full w-full"
            style={{
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              color: "transparent",
            }}
          />

          <div className="progress-bar">
            <div
              className="h-full bg-gray-400"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="grid gap-2 px-2">
          <div className="text-highlight font-bold">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { FC } from "react";

interface ProjectCardProps {
  label: string;
  image: StaticImport | string;
  techs: string;
  link: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ label, image, techs, link }) => {
  return (
    <div>
      <a target="_blank" href={link}>
        <div className="flex flex-col overflow-hidden gap-3 bg-white/10 shadow-md border-2 border-white  backdrop-filter backdrop-blur-md  text-zinc-800 rounded-lg overflow-ellipsis">
          <Image
            src={image}
            width={700}
            alt="spotify"
            height={700}
            className="aspect-video object-cover"
            style={{ color: "transparent" }}
          />
          <div className="flex flex-col px-4 py-2 h-24">
            <div className="flex font-bold">{label}</div>
            <div className="flex text-info text-xs">{techs}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;

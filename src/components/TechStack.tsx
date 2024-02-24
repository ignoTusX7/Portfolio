import React from "react";
import Card from "./Card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import HTML from "../../public/images/frontend/html.jpeg";
import CSS from "../../public/images/frontend/css.jpeg";
import JSTS from "../../public/images/frontend/jsts.jpeg";
import jquery from "../../public/images/frontend/jquery.png";
import BS from "../../public/images/frontend/bootstrap.jpeg";
import Tailwind from "../../public/images/frontend/tailwind.jpg";
import ReactImg from "../../public/images/frontend/reactjs.jpg";
import NextJS from "../../public/images/frontend/nextjs13.jpeg";
import NodeJS from "../../public/images/backend/nodejs.webp";
import PHP from "../../public/images/backend/php.png";
import express from "../../public/images/backend/express.png";
import MySQL from "../../public/images/database/mysql.jpeg";
import PG from "../../public/images/database/postgres.png";
import Mongo from "../../public/images/database/mongo.png";
import Git from "../../public/images/devops/git.png";
import Docker from "../../public/images/devops/docker.webp";

interface icard {
  label: string;
  image: StaticImport;
  progress?: string | number;
}

interface itechStack {
  frontEnd: icard[];
  backend: icard[];
  database: icard[];
  devOps: icard[];
}

const techStack: itechStack = {
  frontEnd: [
    {
      label: "HTML",
      image: HTML,
      progress: 90,
    },
    {
      label: "CSS",
      image: CSS,
      progress: 90,
    },
    {
      label: "JavaScript / TypeScript",
      image: JSTS,
      progress: 80,
    },
    {
      label: "JQuery",
      image: jquery,
      progress: 80,
    },
    {
      label: "Bootstraps",
      image: BS,
      progress: 90,
    },
    {
      label: "Tailwind CSS",
      image: Tailwind,
      progress: 80,
    },
    {
      label: "React",
      image: ReactImg,
      progress: 80,
    },
    {
      label: "Next JS 13",
      image: NextJS,
      progress: 80,
    },
  ],
  backend: [
    {
      label: "Node JS",
      image: NodeJS,
      progress: 80,
    },
    {
      label: "Express JS",
      image: express,
      progress: 80,
    },
    {
      label: "PHP",
      image: PHP,
      progress: 80,
    },
  ],
  database: [
    {
      label: "MySQL",
      image: MySQL,
      progress: 80,
    },
    {
      label: "PostgreSQL",
      image: PG,
      progress: 80,
    },
    {
      label: "Mongo DB",
      image: Mongo,
      progress: 80,
    },
  ],
  devOps: [
    {
      label: "Git",
      image: Git,
      progress: 80,
    },
    {
      label: "Docker",
      image: Docker,
      progress: 70,
    },
  ],
};

const TechStack = () => {
  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold">Tech Stack</h2>
      <div className="mt-2">
        <div>
          <h2 className="text-xl">Frontend</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
          {techStack.frontEnd.map((item, i) => {
            return (
              <Card
                key={i}
                label={item.label}
                image={item.image}
                progress={item.progress}
              />
            );
          })}
        </div>
        <div className="mt-5">
          <div>
            <h2 className="text-xl">Backend</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
            {techStack.backend.map((item, i) => {
              return (
                <Card
                  key={i}
                  label={item.label}
                  image={item.image}
                  progress={item.progress}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h2 className="text-xl">Database</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
            {techStack.database.map((item, i) => {
              return (
                <Card
                  key={i}
                  label={item.label}
                  image={item.image}
                  progress={item.progress}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h2 className="text-xl">DevOps</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
            {techStack.devOps.map((item, i) => {
              return (
                <Card
                  key={i}
                  label={item.label}
                  image={item.image}
                  progress={item.progress}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

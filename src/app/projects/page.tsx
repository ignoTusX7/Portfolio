import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import eCommImg from "../../../public/images/projects/ecommerce.jpg";
import forumImg from "../../../public/images/projects/forum.png";
import ProjectCard from "@/components/ProjectCard";

interface iproject {
  label: string;
  image: StaticImport | string;
  link: string;
  techs: string;
}

const projectData: iproject[] = [
  {
    label: "E-Commerce Site",
    image: eCommImg,
    link: "https://github.com/ignoTusX7/E-Commerce-Website",
    techs: "React(vite) , Firebase, Redux, Next UI, Tailwind CSS",
  },
  {
    label: "Forum Website",
    image: forumImg,
    link: "https://github.com/ignoTusX7/PHP-Forum-Website",
    techs: "PHP, MySQL, JavaScript, Bootstrap",
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl mb-3">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5">
        {projectData.map((d, i) => {
          return (
            <ProjectCard
              key={i}
              label={d.label}
              image={d.image}
              techs={d.techs}
              link={d.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

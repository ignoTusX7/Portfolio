import React, { FC } from "react";
import Button from "./Button";
import {
  Github,
  Home,
  Instagram,
  Lightbulb,
  Linkedin,
  Twitter,
} from "lucide-react";
import "@/app/component.css";
import Link from "next/link";
import myDetails from "../../myDetails";

interface SidebarProps {}

export const MenuItems: FC = () => {
  return (
    <>
      <Link
        href={myDetails.instagram}
        target="_blank"
        className="flex ms-2 items-center cursor-pointer hover:-translate-y-1 duration-200"
      >
        <Instagram />
        <span className="ms-2">Instagram</span>
      </Link>
      <Link
        href={myDetails.github}
        target="_blank"
        className="flex ms-2 items-center cursor-pointer hover:-translate-y-1 duration-200"
      >
        <Github />
        <span className="ms-2">Github</span>
      </Link>
      <Link
        href={myDetails.linkedin}
        target="_blank"
        className="flex ms-2 items-center cursor-pointer hover:-translate-y-1 duration-200"
      >
        <Linkedin />
        <span className="ms-2">Linkedin</span>
      </Link>
      <Link
        href={myDetails.twitter}
        target="_blank"
        className="flex ms-2 items-center cursor-pointer hover:-translate-y-1 duration-200"
      >
        <Twitter />
        <span className="ms-2">Twitter</span>
      </Link>
    </>
  );
};

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="hidden lg:flex fixed w-screen sm:w-[300px] z-30">
      <div className="flex flex-wrap w-72 rounded-lg p-3">
        <div className="">
          <Link
            href={"/"}
            className="pl-4 mb-2 flex rounded-md items-center p-1 w-56 bg-white/20 cursor-pointer hover:shadow-lg duration-150"
          >
            <Home />
            <Button type="button" label="Home" />
          </Link>
          <Link
            href={"/"}
            className="pl-4 mb-2 flex rounded-md items-center p-1 w-56 bg-white/20 cursor-pointer hover:shadow-lg duration-150"
          >
            <Lightbulb />
            <Button type="button" label="Project" />
          </Link>
        </div>
        <div className="mt-8">
          <h3>Socials</h3>
          <div className="mt-6 space-y-8">
            <MenuItems />
          </div>
        </div>
      </div>
      <div className="h-auto w-[2px] bg-white/40"></div>
    </div>
  );
};

export default Sidebar;

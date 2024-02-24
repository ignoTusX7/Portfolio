import React, { FC } from "react";
import Button from "./Button";
import { Github, Home, Instagram, Linkedin, Twitter } from "lucide-react";
import "@/app/component.css";
import Link from "next/link";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <>
      <div className="flex flex-wrap w-72 rounded-lg p-3">
        <div className="">
          <div className="pl-4 flex rounded-md items-center p-1 w-56 bg-white/20 cursor-pointer">
            <Home />
            <Button type="button" label="Home" />
          </div>
        </div>
        <div className="mt-8">
          <h3>Socials</h3>
          <div className="mt-6 space-y-8">
            <Link
              href={"/"}
              className="flex ms-2 items-center cursor-pointer hover:-translate-y-1 duration-200"
            >
              <Instagram />
              <span className="ms-2">Instagram</span>
            </Link>
            <Link
              href={"/"}
              className="flex ms-2 items-center cursor-pointer hover:-translate-y-1 duration-200"
            >
              <Github />
              <span className="ms-2">Github</span>
            </Link>
            <Link
              href={"/"}
              className="flex ms-2 items-center cursor-pointer hover:-translate-y-1 duration-200"
            >
              <Linkedin />
              <span className="ms-2">Linkedin</span>
            </Link>
            <Link
              href={"/"}
              className="flex ms-2 items-center cursor-pointer hover:-translate-y-1 duration-200"
            >
              <Twitter />
              <span className="ms-2">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-auto w-[2px] bg-white/40"></div>
    </>
  );
};

export default Sidebar;

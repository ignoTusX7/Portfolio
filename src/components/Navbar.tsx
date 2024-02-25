"use client";

import Link from "next/link";
import Button from "./Button";
import ThreeDots from "./ThreeDots";
import { Lightbulb, Menu, User } from "lucide-react";
import { useState } from "react";
import { MenuItems } from "./Sidebar";

export default function Navbar() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center flex-wrap w-full">
        <ThreeDots />
        <div>
          <Link
            href={"/"}
            className="text-white hover:underline underline-offset-8 duration-150"
          >
            Home
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Menu
            onClick={() => setshowMenu(!showMenu)}
            className="block md:hidden "
            color="white"
          />
          <Link href={"/contact"} className="bg-white/30 backdrop-blur-sm hover:shadow-lg duration-150 flex items-center rounded-lg p-1">
            <Button
              className="text-sm"
              type="button"
              label="Contact Me"
            />
            <User size={16}/>
          </Link>
        </div>
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col md:hidden duration-200`}
      >
        <div className="mt-6 space-y-8">
          <Link
            href={"/projects"}
            className="flex ms-2 items-center cursor-pointer hover:-translate-y-1 duration-200"
          >
            <Lightbulb />
            <span className="ms-2">Projects</span>
          </Link>
          <MenuItems />
        </div>
      </div>
    </>
  );
}

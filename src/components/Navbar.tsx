"use client";

import Link from "next/link";
import Button from "./Button";
import ThreeDots from "./ThreeDots";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center flex-wrap w-full">
      <ThreeDots />
      <div>
        <Link href={"/"} className="text-white border-b-2">
          Home
        </Link>
      </div>
      <Button
        className="bg-white/30 backdrop-blur-sm"
        type="button"
        label="Contact"
      />
    </div>
  );
}

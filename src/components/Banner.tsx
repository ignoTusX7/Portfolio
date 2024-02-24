import Image from "next/image";
import React from "react";
import "@/app/component.css";
import UserImage from "../../public/user.png";
import Button from "./Button";
import Link from "next/link";
import { Instagram } from "lucide-react";
import myDetails from "../../myDetails";

const Banner = () => {
  return (
    <div className="flex justify-between w-auto md:w-full rounded-lg bg-[url('../../public/cover-2-img.jpg')] bg-no-repeat bg-cover">
      <div className="flex p-2 items-center md:rounded-lg md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-3">
        <div>
          <Image
            src={UserImage}
            width={120}
            height={120}
            alt={"Moksh"}
            style={{ color: "transparent" }}
            className="object-cover border-4 border-white rounded-full shadow-md"
          />
        </div>
        <div className="flex md:flex-1 flex-col justify-center gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 ">
            <div className="text-3xl flex flex-col font-bold text-white">
              Moksh
              <div className="text-sm font-thin flex justify-between items-center">
                @ignoTusX7
              </div>
            </div>
            <Link
              href={myDetails.instagram}
              target="_blank"
              className="flex items-center h-max w-max gap-2 justify-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-white/30 backdrop-blur-sm text-primary font-semibold text-xs py-2 px-4"
            >
              <Instagram />
              <Button
                type="button"
                label="Follow me on Instagram"
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

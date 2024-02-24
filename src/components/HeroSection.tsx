import React, { FC } from "react";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";

interface HeroProps {}

const HeroSection: FC<HeroProps> = ({}) => {
  return (
    <div className="flex mt-8">
      <Sidebar />
      <MainSection />
    </div>
  );
};

export default HeroSection;

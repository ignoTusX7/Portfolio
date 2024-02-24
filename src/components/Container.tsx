import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import "@/app/component.css";

export default function Container() {
  return (

    <div className="bg-gray-300 glass justify-between">
      <Navbar />
      <HeroSection/>
    </div>
  );
}

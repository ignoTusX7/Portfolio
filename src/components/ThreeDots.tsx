"use client";
import "@/app/component.css";

export default function ThreeDots() {
  return (
    <>
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-lg bg-red-500"></div>
        <div className="w-3 h-3 rounded-lg bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-lg bg-green-600"></div>
      </div>
    </>
  );
}

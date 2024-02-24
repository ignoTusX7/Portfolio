"use client";
import "@/app/component.css";

export default function ThreeDots() {
  return (
    <>
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-lg shadow-md bg-red-500"></div>
        <div className="w-3 h-3 rounded-lg shadow-md bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-lg shadow-md bg-green-600"></div>
      </div>
    </>
  );
}

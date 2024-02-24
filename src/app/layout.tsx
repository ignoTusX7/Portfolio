import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@/app/component.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - moksh",
  description: "Hi I'm Moksh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-300 glass">
          <Navbar />
          <div className="flex mt-8 h-[75%]">
            <Sidebar />
            <div className="flex-1 pl-0 lg:pl-[300px] overflow-y-scroll overflow-x-hidden">
              <div className="ms-0 md:ms-2 w-full h-[75vh] pr-2 overflow-y-scroll overflow-x-hidden">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

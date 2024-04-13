import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full bg-white flex border-2 border-gray-700 border-solid px-0">
      {/* PC View */}
      <div className="hidden sm:flex flex-row w-full text-gray-700 font-bold justify-center ">
        <Link className="w-1/6 py-3 hover:bg-indigo-200 sm:mx-auto " href={"/"}>
          <div className="text-center  ">Home</div>
        </Link>
        <Link
          className="w-1/6 py-3 hover:bg-indigo-200 mx-auto"
          href={"/AboutUs"}
        >
          <div className="text-center  ">About Us</div>
        </Link>

        <Link
          className="w-1/6 py-3 hover:bg-indigo-200 mx-auto"
          href={"/HowItWorks"}
        >
          <div className="text-center ">How It Works</div>
        </Link>

        <Link
          className="w-1/6 py-3 hover:bg-indigo-200 mx-auto"
          href={"/Milestones"}
        >
          <div className="text-center ">Milestones</div>
        </Link>

        <Link
          className="w-1/6 py-3 hover:bg-indigo-200 mx-auto"
          href={"/BusinessModel"}
        >
          <div className="text-center ">Business Model</div>
        </Link>

        <Link
          className="w-1/6 py-3 hover:bg-indigo-200 sm:mx-auto "
          href={"/ContactUs"}
        >
          <div className="text-center ">Contact Us</div>
        </Link>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden py-2 flex items-center justify-center w-full font-bold text-gray-700">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex text-500 uppercase">
              <Menu />
              Explore Options
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem className="shadow text-md">
              <Link href={"/"} className="px-10">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="shadow text-md">
              <Link href="/AboutUs" className="px-10">
                About Us
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="shadow text-md">
              <Link href={"/HowItWorks"} className="px-10">
                How It Works
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="shadow text-md">
              <Link href={"/Milestones"} className="px-10">
                Milestones
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="shadow text-md">
              <Link href={"/BusinessModel"} className="px-10">
                Business Model
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="shadow text-md">
              <Link href={"/ContactUs"} className="px-10">
                Contact Us
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;

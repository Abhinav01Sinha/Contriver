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
    <div className="bg-blue-50 flex">
      {/* PC View */}
      <div className="hidden sm:flex flex-grow w-full text-gray-700 font-bold justify-between mr-2">
        <div className="flex w-1/6">
          <Link
            className="flex-grow py-3 hover:underline underline-offset-8 text-lg"
            href={"/TheDroneContriver"}
          >
            <div className="text-center uppercase">The Drone Contriver</div>
          </Link>
        </div>
        <div className="flex w-7/12 justify-between space-x-4">
          <Link
            className="flex-grow py-3 hover:underline underline-offset-8 text-lg"
            href={"/"}
          >
            <div className="text-center">Home</div>
          </Link>
          <Link
            className="flex-grow py-3 hover:underline underline-offset-8 text-lg"
            href={"/Projects"}
          >
            <div className="text-center">Projects</div>
          </Link>
          <Link
            className="flex-grow py-3 hover:underline underline-offset-8 text-lg"
            href={"/Milestones"}
          >
            <div className="text-center">Milestones</div>
          </Link>
          <Link
            className="flex-grow py-3 hover:underline underline-offset-8 text-lg"
            href={"/HowItWorks"}
          >
            <div className="text-center">How It Works</div>
          </Link>

          <Link
            className="flex-grow py-3 hover:underline underline-offset-8 text-lg"
            href={"/BusinessModel"}
          >
            <div className="text-center">Business Model</div>
          </Link>
          <Link
            className="flex-grow py-3 hover:underline underline-offset-8 text-lg"
            href={"/ContactUs"}
          >
            <div className="text-center">Contact Us</div>
          </Link>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden py-2 flex items-center justify-center w-full font-bold text-gray-700">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex uppercase">
              <Menu />
              Explore Options
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem className="shadow text-md">
              <Link href={"/TheDroneContriver"} className="px-10">
                The Drone Contriver
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="shadow text-md">
              <Link href={"/"} className="px-10">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="shadow text-md">
              <Link href="/Projects" className="px-10">
                Projects
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
              <Link href={"/HowItWorks"} className="px-10">
                How It Works
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

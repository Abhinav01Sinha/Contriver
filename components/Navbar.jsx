import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-white flex justify-center sm:px-0 border-2 border-gray-700 border-solid px-0 mx-0">
      <div className="flex flex-row text-gray-700 font-bold justify-center items-center">
        <Link className="hidden sm:inline-block" href={"/"}>
          <div className="text-center py-2 px-1.5 sm:px-11  sm:my-1 mx-0 hover:bg-indigo-200 ">
            Home
          </div>{" "}
        </Link>
        <Link href={"/AboutUs"}>
          <div className="text-center py-2 px-1.5 sm:px-11  sm:my-1 mx-0 hover:bg-indigo-200 ">
            About Us
          </div>{" "}
        </Link>

        <Link href={"/HowItWorks"}>
          <div className="text-center py-2 px-1.5 sm:px-11  sm:my-1 mx-3 sm:mx-0 hover:bg-indigo-200">
            Working
          </div>
        </Link>

        <Link href={"/Milestones"}>
          <div className="text-center py-2 px-1.5 sm:px-11  sm:my-1 mx-3 sm: mx-0 hover:bg-indigo-200">
            Milestones
          </div>
        </Link>

        <Link href={"/BusinessModel"}>
          <div className="text-center py-2 px-1.5 sm:px-11  sm:my-1 mx-3 sm: mx-0 hover:bg-indigo-200">
            Business Model
          </div>
        </Link>

        <Link href={"/ContactUs"}>
          <div className="text-center py-2 px-1.5 lg:px-10  sm:my-1 mx-3 sm: mx-0 hover:bg-indigo-200">
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

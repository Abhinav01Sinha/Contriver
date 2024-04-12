import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full bg-white flex border-2 border-gray-700 border-solid px-0">
      <div className="flex flex-row w-full text-gray-700 font-bold justify-center ">
        <Link
          className="hidden sm:inline-block w-1/6 py-3 hover:bg-indigo-200 sm:mx-auto "
          href={"/"}
        >
          <div className="text-center  ">Home</div>{" "}
        </Link>
        <Link
          className="w-1/6 py-3 hover:bg-indigo-200 mx-auto"
          href={"/AboutUs"}
        >
          <div className="text-center  ">About Us</div>{" "}
        </Link>

        <Link
          className="w-1/6 py-3 hover:bg-indigo-200 mx-auto"
          href={"/HowItWorks"}
        >
          <div className="text-center ">Working</div>
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
    </div>
  );
}

export default Navbar;

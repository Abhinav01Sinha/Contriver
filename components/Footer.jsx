import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full bg-black flex flex-col sm:flex-row pb-5 sm:px-0 px-10">
      {/* Info */}
      <div className="text-white text-bold text-md my-auto sm:w-1/3  sm:px-10 sm:mx-auto">
        <p className="my-4 text-lg text-center">
          &copy;2024 The Drone Contriver
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row text-white my-auto justify-center items-center sm:w-1/2 sm:pl-10 sm:mx-auto">
        <div className="text-lg text-semibold my-auto hover:text-blue-50">
          <Link href={"/"}>Home</Link>
        </div>
        <p className="hidden sm:inline-block text-lg text-semibold mx-2">|</p>
        <div className="text-lg text-semibold my-auto hover:text-blue-50">
          <Link href={"/Projects"}>Projects</Link>
        </div>
        <p className="hidden sm:inline-block text-lg text-semibold mx-2">|</p>

        <div className="text-lg text-semibold my-auto hover:text-blue-50">
          <Link href={"/HowItWorks"}>How It Works</Link>
        </div>
        <p className="hidden sm:inline-block text-lg text-semibold mx-2">|</p>

        <div className="text-lg text-semibold my-auto hover:text-blue-50">
          <Link href={"/Milestones"}>Milestones</Link>
          <p className="hidden sm:inline-block text-lg text-semibold mx-2">|</p>
        </div>
        <div className="text-lg text-semibold my-auto hover:text-blue-50">
          <Link href={"/BusinessModel"}>Business Model</Link>
          <p className="hidden sm:inline-block text-lg text-semibold mx-2">|</p>
        </div>
        <div className="text-lg text-semibold my-auto hover:text-blue-50">
          <Link href={"/ContactUs"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

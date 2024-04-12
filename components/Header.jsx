import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="w-full bg-indigo-400 flex flex-col sm:flex-row ">
      <div className="p-0 grid-cols-3">
        <Link href={"/"}>
          <Image src={"/Drone.png"} alt="drone" width={526.5} height={150} />
        </Link>
      </div>

      <div className="flex flex-col sm:justify-end sm:flex-grow">
        <Link href={"/"} className="flex justify-end">
          <Image src={"/Logo2.png"} alt="logo" width={1064} height={600} />
        </Link>

        <Navbar />
      </div>
    </div>
  );
}

export default Header;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="w-full bg-blue-50 flex flex-col">
      <Link href={"/"} className="flex justify-end">
        <Image
          src={"/Logo.png"}
          alt="logo"
          width={1600}
          height={200}
          className="w-full"
        />
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;

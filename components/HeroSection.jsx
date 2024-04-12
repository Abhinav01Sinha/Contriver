import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { clients } from "@/data/constants";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function HeroSection() {
  return (
    <div
      className={`${roboto.className} w-full bg-blue-400 pt-10 lg:pt-10 h-full `}
    >
      {/* WHO ARE WE? */}
      <div className="flex flex-col px-5 lg:px-40 lg:py-10 mb-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5 ">
          WHO ARE WE ?
        </h1>
        <p className="max-w-4xl text-white text-semibold text-lg lg:text-2xl">
          Group of Engineers, Researchers and Designers working with a mindset
          to develop systems that are ethically autonomous.
        </p>
      </div>

      {/* WHAT WE DO? */}
      <div className="flex flex-col bg-white px-5 lg:px-40 lg:py-10">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-700 my-5 ">
          WHAT WE DO ?
        </h1>
        <p className="max-w-4xl text-gray-700 text-semibold text-lg lg:text-2xl my-2">
          Developing entire systems that works with minimum human intervention.
        </p>

        <p className="max-w-4xl text-gray-700 text-semibold text-lg lg:text-2xl mb-5">
          Ex. Cyber Physical Systems, Long Range Autonomous Communication
          Systems, Unmanned Autonomous Vehicles (Drones) and Their Control are
          part of our research projects and jobs.
        </p>
      </div>

      {/* Major Clients */}
      <div className="flex flex-col px-5 lg:px-40">
        <h1 className="text-center text-4xl text-white font-bold capitalize mt-5">
          TRUSTED BY OUR MAJOR CLIENTS . . .
        </h1>
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-10 px-5 my-10 ">
          {clients.map((client, ind) => (
            <div
              key={client.name}
              className="lg:flex lg:flex-col lg:w-1/6 my-auto"
            >
              <Image
                src={client.img}
                width={client.size}
                height={client.size}
                alt={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { clients } from "@/data/constants";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function HeroSection() {
  return (
    <div
      className={`${roboto.className} justify-center items-start bg-contriverBgRotate sm:bg-contriverBgFlip bg-cover bg-top pt-10`}
    >
      {/* WHO ARE WE? */}
      <div className="bg-gray-700 sm:w-3/5 flex flex-col mx-10 p-4 lg:p-10 my-5 animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 ">
          WHO ARE WE ?
        </h1>
        <p className="text-white text-lg lg:text-2xl">
          Group of Engineers, Researchers and Designers working with a mindset
          to develop systems that are ethically autonomous.
        </p>
      </div>

      {/* WHAT WE DO? */}
      <div className="bg-gray-700 sm:w-3/5 flex flex-col mx-10 p-4 lg:p-10 my-5 animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 ">
          WHAT WE DO ?
        </h1>
        <p className="text-white text-lg lg:text-2xl">
          Developing entire systems that works with minimum human intervention.
        </p>

        <p className="text-white text-lg lg:text-2xl">
          Ex. Cyber Physical Systems, Long Range Autonomous Communication
          Systems, Unmanned Autonomous Vehicles (Drones) and Their Control are
          part of our research projects and jobs.
        </p>
      </div>

      {/* Major Clients */}
      <div className="flex flex-col">
        <h1 className="bg-gray-700 w-full text-blue-50 py-2 text-center sm:text-4xl text-xl font-bold capitalize mt-5">
          OUR TRUSTED MAJOR CLIENTS . . .
        </h1>

        {/* Client Animation */}

        <div
          x-data="{}"
          x-init="
              $nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
              })"
          className="w-full py-2 my-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
            {clients.map((client) => (
              <li
                key={client.name}
                className="hover:shadow-sm hover:shadow-gray-700 text-center"
              >
                <Link
                  href={client.web}
                  className="text-lg sm:text-3xl font-semibold"
                >
                  {/* <Image src={client.img} width={150} height={150} /> */}
                  {client.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-10 w-full [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {clients.map((client) => (
              <li
                key={client.name}
                className="hover:shadow-sm hover:shadow-gray-700 text-center"
              >
                <Link
                  href={client.web}
                  className="text-lg sm:text-3xl font-semibold"
                >
                  {/* <Image src={client.img} width={150} height={150} /> */}
                  {client.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

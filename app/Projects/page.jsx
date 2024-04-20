"use client";

import React from "react";
import { Roboto, Poppins } from "next/font/google";
import { about } from "@/data/constants";
import { Separator } from "@/components/ui/separator";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

function ProjectPage() {
  return (
    <div
      className={`${roboto.className} w-full bg-contriverBgRotatePhone bg-cover md:bg-contriverBgRotate bg-no-repeat bg-top`}
    >
      <h1 className="text-3xl md:text-7xl font-bold text-gray-700 text-center pt-10 md:py-10 py-5 px-8 mx-auto uppercase animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        What Have We Done?
      </h1>
      <h2 className="text-gray-700 font-bold text-xl md:text-3xl text-center md:pb-10 pb-5 px-8 lg:px-40 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        We have built autonomous :
      </h2>

      {/* PC View */}
      <div className="hidden md:flex flex-col w-5/6 lg:w-3/4 mx-auto lg:px-20 space-y-10 pb-10 ">
        {about.map((item, ind) => (
          <div key={ind} className="py-5 bg-blue-50 ">
            <div className="flex flex-row py-4 px-5 justify-between">
              {/* Description */}
              <p className="sm:w-1/2 lg:w-7/12 lg:text-lg md:ml-6 animate-fade-up animate-once animate-duration-800 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                {item.title}
              </p>

              {/* Features */}
              <div className="sm:w-5/12 lg:w-4/12 py-5 sm:my-auto pl-6 bg-gray-700 animate-fade-left animate-once animate-duration-1500 animate-ease-in-out animate-normal animate-fill-forwards">
                <ul className="m-auto list-disc">
                  {item.description.map((desc, ind) => (
                    <li
                      key={ind}
                      className={`${poppins.className}  text-blue-50 text-semibold text-md `}
                    >
                      {desc.feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex flex-col w-full md:hidden">
        {about.map((item, ind) => (
          <div
            key={ind}
            className={`flex md:flex-row flex-col bg-${
              ind % 2 === 0 ? "white" : "blue-400"
            } py-10 md:space-x-20 md:px-20 px-10 animate-fade-up animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards`}
          >
            <p className="md:w-4/6 text-lg  md:ml-10">{item.title}</p>
            <Separator
              className={`md:hidden bg-${
                ind % 2 === 0 ? "gray-700" : "white"
              }  h-0.5 my-5`}
            />

            <div
              className={`inline-block w-0.4  bg-${
                ind % 2 === 0 ? "blue-400" : "white"
              } `}
            ></div>

            <div className="md:w-2/6 pr-10">
              <ul className="mt-auto list-disc  ">
                {item.description.map((desc, ind) => (
                  <li
                    key={ind}
                    className={`${poppins.className} text-black text-semibold text-md `}
                  >
                    {desc.feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;

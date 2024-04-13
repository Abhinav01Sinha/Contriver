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

function AboutUsPage() {
  return (
    <div className={`${roboto.className} w-full bg-blue-400 `}>
      <h1 className="text-3xl sm:text-7xl font-bold text-white text-center sm:py-10 py-5 px-8 lg:px-40 uppercase animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        What Have We Done?
      </h1>
      <h2 className="text-white font-bold text-xl sm:text-3xl text-center sm:pb-10 pb-5 px-8 lg:px-40 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        We have built autonomous :
      </h2>

      {/* PC View */}
      <div className="hidden sm:flex flex-col sm:w-3/4 mx-auto px-20 space-y-10 pb-10 ">
        {about.map((item, ind) => (
          <div key={ind} className="relative py-5 bg-white">
            <div className="flex flex-row space-x-5 z-10 py-4 px-10">
              {/* Description */}
              <p className="sm:w-7/12 text-lg font-medium sm:ml-10 animate-fade-up animate-once animate-duration-800 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                {item.title}
              </p>

              {/* Separator */}
              <div className="sm:w-1/24"></div>

              {/* Features */}
              <div className="sm:w-4/12 py-5 pl-8 mr-2 bg-black animate-fade-left animate-once animate-duration-1500  animate-ease-in-out animate-normal animate-fill-forwards">
                <ul className="mt-auto list-disc  ">
                  {item.description.map((desc, ind) => (
                    <li
                      key={ind}
                      className={`${poppins.className} text-white text-semibold text-md `}
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
      <div className="flex flex-col w-full sm:hidden">
        {about.map((item, ind) => (
          <div
            key={ind}
            className={`flex sm:flex-row flex-col bg-${
              ind % 2 === 0 ? "white" : "blue-400"
            } py-10 sm:space-x-20 sm:px-20 px-10 animate-fade-up animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards`}
          >
            <p className="sm:w-4/6 text-lg font-medium sm:ml-10">
              {item.title}
            </p>
            <Separator
              className={`sm:hidden bg-${
                ind % 2 === 0 ? "blue-400" : "white"
              }  h-0.5 my-5`}
            />

            <div
              className={`inline-block w-0.4  bg-${
                ind % 2 === 0 ? "blue-400" : "white"
              } `}
            ></div>

            <div className="sm:w-2/6 pr-10">
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

export default AboutUsPage;

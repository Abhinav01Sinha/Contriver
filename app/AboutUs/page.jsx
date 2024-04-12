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
{
  /* 
              <div class="relative ">
                <div class="absolute inset-0 transform skew-x-12  bg-white border-2 border-solid border-black"></div>
                <div class="relative flex flex-row space-x-5 z-10 py-4 px-10">
                  <LooksOneSharpIcon
                    className="my-auto"
                    style={{ fontSize: "4rem" }}
                  />
                  <p>
                    We are asking for total ₹10L for development of the
                    prototype. The fund is for the raw materials and equipment
                    that will go into the aircraft only.
                  </p>
                </div>
              </div>
              */
}

function AboutUsPage() {
  return (
    <div className={`${roboto.className} w-full bg-blue-400 `}>
      <h1 className="text-3xl sm:text-7xl font-bold text-white text-center sm:py-10 py-5 px-8 lg:px-40 uppercase">
        What Have We Done?
      </h1>
      <h2 className="text-white font-bold text-xl sm:text-3xl text-center sm:pb-10 pb-5 px-8 lg:px-40">
        We have built autonomous :
      </h2>

      {/* PC View */}
      <div className="hidden sm:flex flex-col w-full px-20 space-y-8 pb-10">
        {about.map((item, ind) => (
          <div key={ind} class="relative py-5">
            <div class="absolute inset-0 transform skew-x-12 bg-white border-2 border-solid border-black"></div>
            <div class="relative flex flex-row space-x-5 z-10 py-4 px-10">
              <p className="sm:w-7/12 text-lg font-medium sm:ml-10">
                {item.title}
              </p>
              <div className="sm:w-1/12"></div>
              <div className="sm:w-4/12 pr-10">
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
            } py-10 sm:space-x-20 sm:px-20 px-10`}
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
              class={`inline-block w-0.4  bg-${
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

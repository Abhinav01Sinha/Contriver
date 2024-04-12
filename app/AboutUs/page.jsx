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
    <div
      className={`${roboto.className} w-full bg-blue-400 px-8 lg:px-40 py-20  `}
    >
      <h1 className="text-4xl sm:text-7xl font-bold text-white text-center">
        What Have We Done?
      </h1>
      <h2 className="text-white font-bold text-xl sm:text-3xl mt-5">
        We have built autonomous :
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 py-4">
        {about.map((item, ind) => (
          <div
            key={ind}
            className="flex flex-col h-96 my-5 p-5 bg-white border-2 border-black border-solid hover:shadow-black shadow-lg relative"
          >
            <h3 className="text-gray-600 mb-2 text-semibold sm:text-lg h-2/3">
              {item.title}
            </h3>
            <Separator className="my-auto" />
            <ul className="mt-auto list-disc px-5 h-1/3 pt-4">
              {item.description.map((desc, ind) => (
                <li
                  key={ind}
                  className={`${poppins.className} text-gray-600 text-semibold text-md `}
                >
                  {desc.feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsPage;

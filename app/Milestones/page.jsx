import React from "react";
import Image from "next/image";
import LooksOneSharpIcon from "@mui/icons-material/LooksOneSharp";
import LooksTwoSharpIcon from "@mui/icons-material/LooksTwoSharp";
import { Looks3Sharp, Looks4Sharp } from "@mui/icons-material";
import { Separator } from "@/components/ui/separator";

function MilestonesPage() {
  return (
    <>
      {/* MILESTONES */}
      <div className=" flex flex-col bg-contriverBgRotate bg-cover bg-center sm:bg-top pt-3 sm:pt-8">
        <h1 className="sm:text-7xl text-3xl font-bold text-gray-700 text-center pb-12 mb-10 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
          MILESTONES 2024
        </h1>
        <div className="flex flex-col justify-center items-center bg-blue-50">
          <Image
            src={"/milestonePics/P1.png"}
            width={1050}
            height={1305}
            alt="milestone"
          />

          <Image
            src={"/milestonePics/P2.png"}
            width={1050}
            height={1305}
            alt="milestone"
          />
        </div>
      </div>

      {/* MILESTONES Based Implementation */}
      <div className="bg-blue-50">
        <div className="flex py-10 sm:py-20 sm:px-2 flex-col space-y-1 my-auto0 justify-center items-center">
          <h1 className="sm:text-5xl text-center text-2xl text-gray-700 font-bold capitalize mb-10">
            Milestones based implementations?
          </h1>

          <div className="flex flex-col sm:flex-row sm:px-20 text-lg space-x-8">
            <div className="flex flex-row sm:ml-0 ml-8 sm:w-1/3 space-x-4 bg-blue-50 py-4 px-0">
              <LooksOneSharpIcon
                style={{ fontSize: "4rem" }}
                className="my-auto text-gray-700"
              />
              <div className="flex flex-col space-y-1 w-full ">
                <p className="h-4/6 sm:h-1/2">
                  First Quarter, starts from the day the first operational and
                  manpower cost is given.
                </p>
                <Separator className="h-0.5 mr-0 bg-black" />
                <p className="h-2/6 sm:h-1/2">
                  Project need, scope, cost and valuation.
                </p>
              </div>
            </div>
            <div className="flex flex-row sm:w-1/5 space-x-4 bg-blue-50 py-4 px-0">
              <LooksTwoSharpIcon
                style={{ fontSize: "4rem" }}
                className="my-auto text-gray-700"
              />
              <div className="flex flex-col space-y-1 w-full ">
                <p className="sm:h-1/2">Second Quarter based on Go/No go</p>
                <Separator className="h-0.5 mr-0 bg-black" />
                <p className="sm:h-1/2">Development and POC</p>
              </div>
            </div>
            <div className="flex flex-row sm:w-1/5 space-x-4 bg-blue-50 py-4 px-0">
              <Looks3Sharp
                style={{ fontSize: "4rem" }}
                className="my-auto text-gray-700"
              />

              <div className="flex flex-col space-y-1 w-full ">
                <p className="sm:h-1/2">Third Quarter based on Go/No go</p>
                <Separator className="h-0.5 mr-0 bg-black" />
                <p className="sm:h-1/2">
                  Prototype and Industry or Market Validation
                </p>
              </div>
            </div>
            <div className="flex flex-row sm:w-1/4 space-x-4 bg-blue-50 py-4 px-0">
              <Looks4Sharp
                style={{ fontSize: "4rem" }}
                className="my-auto text-gray-700"
              />
              <div className="flex flex-col space-y-1 w-full">
                <p className="sm:h-1/2">
                  Fourth Quarter based <br className="hidden sm:inline" /> on
                  Go/No go
                </p>
                <Separator className="h-0.5 mr-0 bg-black" />
                <p className="sm:h-1/2">
                  Delivery and improvements on feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MilestonesPage;

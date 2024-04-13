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
      <div className="w-full flex flex-col bg-blue-300">
        <h1 className="sm:text-8xl text-5xl font-bold text-white text-center my-10 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
          MILESTONES
        </h1>
        <div className="flex flex-col justify-center items-center">
          <Image src={"/M1.png"} width={1605} height={1605} alt="milestone" />
          <Image src={"/M2.png"} width={1605} height={1605} alt="milestone" />
          <Image src={"/M3.png"} width={1605} height={1605} alt="milestone" />
          <Image src={"/M4.png"} width={1605} height={1605} alt="milestone" />
          <Image src={"/M5.png"} width={1605} height={1605} alt="milestone" />
        </div>
      </div>

      {/* MILESTONES Based Implementation */}
      <div className="bg-white">
        <div className="flex py-10 sm:py-20 sm:px-2 flex-col space-y-1 my-auto0 justify-center items-center">
          <h1 className="sm:text-5xl text-center text-2xl text-blue-400 font-bold capitalize mb-10">
            Milestones based implementations?
          </h1>

          <div className="flex flex-col sm:flex-row sm:px-20 text-lg space-x-8">
            <div className="flex flex-row sm:ml-0 ml-8 sm:w-1/3 space-x-4 bg-white py-4 px-0">
              <LooksOneSharpIcon
                style={{ fontSize: "4rem" }}
                className="my-auto"
              />
              <div className="flex flex-col space-y-1 ">
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
            <div className="flex flex-row sm:w-1/5 space-x-4 bg-white py-4 px-0">
              <LooksTwoSharpIcon
                style={{ fontSize: "4rem" }}
                className="my-auto"
              />
              <div className="flex flex-col space-y-1  ">
                <p className="sm:h-1/2">Second Quarter based on Go/No go</p>
                <Separator className="h-0.5 mr-0 bg-black" />
                <p className="sm:h-1/2">Development and POC</p>
              </div>
            </div>
            <div className="flex flex-row sm:w-1/5 space-x-4 bg-white py-4 px-0">
              <Looks3Sharp style={{ fontSize: "4rem" }} className="my-auto" />

              <div className="flex flex-col space-y-1 ">
                <p className="sm:h-1/2">The Third Quarter based on Go/No go</p>
                <Separator className="h-0.5 mr-0 bg-black" />
                <p className="sm:h-1/2">
                  Prototype and Industry or Market Validation
                </p>
              </div>
            </div>
            <div className="flex flex-row sm:w-1/4 space-x-4 bg-white py-4 px-0">
              <Looks4Sharp style={{ fontSize: "4rem" }} className="my-auto" />
              <div className="flex flex-col space-y-1">
                <p className="sm:h-1/2">
                  Fourth Quarter based <br /> on Go/No go
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

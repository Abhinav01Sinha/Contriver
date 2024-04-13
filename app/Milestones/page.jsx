import React from "react";
import Image from "next/image";
import LooksOneSharpIcon from "@mui/icons-material/LooksOneSharp";
import LooksTwoSharpIcon from "@mui/icons-material/LooksTwoSharp";
import { Looks3Sharp, Looks4Sharp } from "@mui/icons-material";

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

          <div className="flex flex-col sm:flex-row sm:px-20 text-lg space-x-2">
            <div className="flex flex-row sm:w-1/3 space-x-4 bg-white py-4 px-2">
              <LooksOneSharpIcon
                style={{ fontSize: "4rem" }}
                className="my-auto"
              />
              <div className="flex flex-col space-y-1 my-auto">
                <p>
                  First Quarter, starts from the day the first operational and
                  manpower cost is given for first phase:
                </p>
                <p>Project need, scope, cost and valuation.</p>
              </div>
            </div>
            <div className="flex flex-row sm:w-2/9 space-x-4 bg-white py-4 px-2">
              <LooksTwoSharpIcon
                style={{ fontSize: "4rem" }}
                className="my-auto"
              />
              <div className="flex flex-col space-y-1 my-auto">
                <p>Second Quarter based on Go/No go</p>
                <p>Development and POC</p>
              </div>
            </div>
            <div className="flex flex-row sm:w-2/9 space-x-4 bg-white py-4 px-2">
              <Looks3Sharp style={{ fontSize: "4rem" }} className="my-auto" />

              <div className="flex flex-col space-y-1 my-auto">
                <p>The Third Quarter based on Go/No go</p>
                <p>Prototype and Industry or Market Validation</p>
              </div>
            </div>
            <div className="flex flex-row sm:w-2/9 space-x-4 bg-white py-4 px-2">
              <Looks4Sharp style={{ fontSize: "4rem" }} className="my-auto" />
              <div className="flex flex-col space-y-1 my-auto">
                <p>Fourth Quarter based on Go/No go</p>
                <p>Delivery and improvements on feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MilestonesPage;

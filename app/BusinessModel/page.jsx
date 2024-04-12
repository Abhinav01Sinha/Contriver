import React from "react";
import {
  TbCircleLetterA,
  TbCircleLetterB,
  TbCircleLetterC,
  TbCircleLetterD,
  TbCircleLetterE,
  TbCircleLetterF,
  TbPentagonNumber1,
  TbPentagonNumber2,
  TbPentagonNumber3,
} from "react-icons/tb";

function BusnessModelPage() {
  return (
    <div className="bg-blue-400 ">
      {/* How will we make? */}
      <div className="sm:py-10 sm:px-20 px-6 sm:py-10 py-5 flex flex-col">
        {/* Headline */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="sm:text-7xl text-4xl text-white text-center font-bold capitalize mb-6">
            How will we make ?
          </h1>
          <p className="sm:text-xl text-white font-semibold mb-2">
            We always look forward to developing intellectual properties as
            appropriate and keeps the entire system exclusive (larger moat).
          </p>
          <p className="sm:text-xl text-white font-semibold">
            We then work with business models as below :
          </p>
        </div>

        {/* Methods */}
        <div className="flex sm:flex-row flex-col sm:space-x-5 sm:px-0">
          <div className="sm:w-1/3 flex flex-row bg-white sm:my-10 my-5">
            <div className="flex flex-col space-y-5 sm:pb-0  ">
              <div className="bg-black text-white font-semibold py-4 flex flex-row justify-center items-center text-3xl space-x-5">
                {/* icon */}
                <TbPentagonNumber1 />
                {/* heading */}
                <p>Network by Sales</p>
              </div>
              <p className="sm:text-xl font-semibold text-center px-3 pb-3">
                Sales of the UAV as a product based in requirements with a
                service model.
              </p>
            </div>
          </div>
          <div className="sm:w-1/3 flex flex-row bg-white sm:my-10 my-5">
            <div className="flex flex-col space-y-5 sm:pb-0  ">
              <div className="bg-black text-white font-semibold py-4 flex flex-row justify-center items-center text-3xl space-x-5">
                {/* icon */}
                <TbPentagonNumber2 />
                {/* heading */}
                <p className="font-semibold">Network Subscriptions</p>
              </div>
              <p className="sm:text-xl font-semibold text-center px-6 pb-3">
                Whereas the business is entirely a separate channel we look
                forward to license our IPRs on based on subscriptions defined
                case to case basis.
              </p>
            </div>
          </div>
          <div className="sm:w-1/3 flex flex-row bg-white sm:my-10 my-5">
            <div className="flex flex-col space-y-5 sm:pb-0 ">
              <div className="bg-black text-white font-semibold py-4 flex flex-row justify-center items-center text-3xl space-x-5">
                {/* icon */}
                <TbPentagonNumber3 />
                {/* heading */}
                <p className="font-semibold">Network by Exclusion</p>
              </div>
              <p className="sm:text-xl font-semibold text-center px-6 pb-3">
                Whereas the channel that is established is already operational
                in market, is unique, we sell the IPRs with returns as cash
                payments and equity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MARKET Opportunites  */}
      <div className="flex sm:flex-row flex-col bg-white sm:p-10">
        {/* First Market */}
        <div className="flex flex-col mx-auto sm:w-1/2 ">
          <p className="text-center text-blue-400 font-bold sm:text-4xl text-xl my-5">
            First Market opportunity - UAV Product
          </p>
          <div className="flex flex-col space-y-5 px-10 font-semibold ">
            <div className="flex flex-row space-x-4 ">
              <TbCircleLetterA
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />
              <p className="w-11/12 my-auto">
                Average cost of a large drone is from ₹ 10L - ₹ 1.5Cr with
                applications ranging from Kissan Drones to Defence Drones.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterB
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                Most designs are similar with vulnerable exposed propellers that
                rotate to create thrust as well as lift. The major hardware
                criteria that is required is to vertical take-off and to hover.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterC
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                Our fixed wing has the same capability but with unexposed
                propeller that reduces the possibilities of crashing to
                negligible.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterD
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                With only few research data available (USA), for every 1000-hour
                flight 1 large drone &gt; (250kg) crashes. Three major reason is
                propeller wreckage, battery failure and lost navigation. The
                aircraft after crash is no longer airworthy. Crash on public
                property is another hazard.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterE
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                Manufacturers rely on outsourced technology which makes drones
                costly. Development is limited to limited and recurring
                resources of software and hardware. Limited functionality of
                systems, non-explorative technologies.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterF
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                Our Solution : We are in a process to design and develop a UAV
                that is extra durable and shall not fall dead if collided with a
                bird while flying. A hex copter, in design that keeps its sound
                levels less than 20 Decibels and is completely autonomous.
                Durable to 40kmph collisions along with fail safe that extends
                its life!! Multiple Applications.
              </p>
            </div>
          </div>
        </div>

        {/* Second Market */}
        <div className="flex flex-col mx-auto sm:w-1/2 mb-10 sm:mb-0 mt-5 sm:mt-0">
          <p className="text-center text-blue-400 font-bold sm:text-4xl text-2xl my-5">
            Second Market Opportunity
          </p>
          <div className="flex flex-col space-y-11 px-10 font-semibold ">
            <div className="flex flex-row space-x-4 ">
              <TbCircleLetterA
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />
              <p className="w-11/12 my-auto">
                Reduction of crashing possibilities and sound levels less than
                20 decibels, the use cases that require close range monitoring
                becomes newer horizons of use cases.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterB
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                The total life of the UAV is yet to be decided, since the
                crashing possibilities are nearly negligible.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterC
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                Putting a number over the financial gains is not applicable as
                the system on itself is novel and never been attempted before.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterD
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                A predicted price of the UAV shall be ₹75L.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterE
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                The complete pitch deck defines very clearly TAM-SAM-SOM.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <TbCircleLetterF
                className="flex justify-center items-center w-1/12"
                style={{ fontSize: "40px" }}
              />

              <p className="w-11/12 my-auto">
                We look into the potential value addition and as the model found
                appropriate, we deliver. We always are willing to recurring
                revenue options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusnessModelPage;

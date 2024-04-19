import { firstMarket, market, secondMarket } from "@/data/constants";
import React from "react";
import {
  TbPentagonNumber1,
  TbPentagonNumber2,
  TbPentagonNumber3,
} from "react-icons/tb";

function BusnessModelPage() {
  return (
    <div className="bg-contriverBgRotatePhone sm:bg-contriverBgRotate bg-cover bg-no-repeat">
      {/* How will we make? */}
      <div className="sm:px-20 px-6 sm:py-6 py-5 flex flex-col">
        {/* Headline */}
        <div className="flex flex-col justify-center items-center animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
          <h1 className="sm:text-7xl text-3xl text-gray-700 text-center font-bold capitalize mt-4 mb-10 sm:mb-10">
            How will we make ?
          </h1>
          <div className="bg-gray-700 px-8 py-5">
            <p className="sm:text-xl text-white font-semibold mb-2">
              &rarr; We always look forward to developing intellectual
              properties as appropriate and keeps the entire system exclusive
              (larger moat).
            </p>
            <p className="sm:text-xl text-white font-semibold">
              &rarr; We then work with business models as below :
            </p>
          </div>
        </div>

        {/* Methods */}
        <div className="flex sm:flex-row flex-col sm:space-x-5 sm:px-0">
          <div className="sm:w-1/3 flex flex-row bg-white sm:my-10 my-5 animate-fade-up animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
            <div className="flex flex-col space-y-5 sm:pb-0  ">
              <div className="bg-gray-700 text-blue-50  font-semibold py-4 flex flex-row justify-center items-center sm:text-3xl text-2xl space-x-5">
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
          <div className="sm:w-1/3 flex flex-row bg-white sm:my-10 my-5 animate-fade-up animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
            <div className="flex flex-col space-y-5 sm:pb-0  ">
              <div className="bg-gray-700 text-blue-50  font-semibold py-4 flex flex-row justify-center items-center sm:text-3xl text-2xl space-x-5">
                {/* icon */}
                <TbPentagonNumber2 />
                {/* heading */}
                <p className="font-semibold">Network by Subscriptions</p>
              </div>
              <p className="sm:text-xl font-semibold text-center px-6 pb-3">
                Whereas the business is entirely a separate channel we look
                forward to license our IPRs on based on subscriptions defined
                case to case basis.
              </p>
            </div>
          </div>
          <div className="sm:w-1/3 flex flex-row bg-white sm:my-10 my-5 animate-fade-up animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
            <div className="flex flex-col space-y-5 sm:pb-0 ">
              <div className="bg-gray-700 text-blue-50 font-semibold py-4 flex flex-row justify-center items-center sm:text-3xl text-2xl space-x-5">
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
      <div className="flex sm:flex-row flex-col bg-blue-50 sm:p-10 pb-10">
        {/* First Market */}
        <div className="flex flex-col mx-auto sm:w-1/2 mb-10 sm:mb-4">
          <p className="text-center sm:text-gray-700 text-blue-50 font-bold sm:text-4xl text-xl py-3 sm:my-5 bg-gray-700 sm:bg-blue-50">
            First Market opportunity - UAV Product
          </p>
          <div className="flex flex-col space-y-5 px-8 font-semibold mt-2">
            {firstMarket.map((pt, ind) => (
              <div
                key={ind}
                className="flex flex-row justify-center items-center"
              >
                <p className="w-11/12">{pt.point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Market */}
        <div className="flex flex-col mx-auto sm:w-1/2 ">
          <p className="text-center sm:text-gray-700 text-blue-50 font-bold sm:text-4xl text-2xl py-3 sm:my-5 bg-gray-700 sm:bg-blue-50">
            Second Market Opportunity
          </p>
          <div className="flex flex-col space-y-11 px-8 font-semibold mt-4 sm:mt-0">
            {secondMarket.map((pt, ind) => (
              <div
                key={ind}
                className="flex flex-row justify-center items-center"
              >
                <p className="w-11/12">{pt.point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusnessModelPage;

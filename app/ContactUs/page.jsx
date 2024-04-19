"use client";
import React, { useRef, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function ContactUsPage() {
  return (
    <div className="h-dvh bg-contriverBgRotatePhone sm:bg-contriverBgRotate bg-cover  px-2 sm:px-10 py-0 sm:py-6 flex flex-col items-center ">
      {/* CONATACT US */}
      <h1 className="text-gray-700 sm:text-7xl text-4xl text-center font-bold text-center mb-10 mt-10 sm:mt-0 sm:mt-2">
        CONTACT US
      </h1>

      <div className="flex flex-col sm:flex-row sm:mx-10 sm:w-11/12 sm:h-1/2 mt-10 py-5 space-y-5 sm:space-y-0 animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        <div className="sm:w-1/3 bg-white p-2 flex flex-col px-8 ">
          <div className="flex flex-col py-3 justify-end sm:justify-center items-center m-auto sm:mx-0">
            <LocationOnIcon
              className="text-gray-700"
              style={{ fontSize: "5rem" }}
            />
            <p className="text-gray-700 font-bold sm:text-4xl mt-2 text-xl">
              ADDRESS
            </p>
          </div>

          <p className="text-md sm:text-xl font-semibold m-auto ">
            I - 188 , Phase 1 , Ashok Vihar, Delhi , IN
          </p>
        </div>
        <div className="hidden sm:inline-block h-auto my-8 w-0.5 self-stretch bg-gray-700"></div>

        <div className="sm:w-1/3 bg-white p-2 flex flex-col">
          <div className="flex flex-col py-3 justify-end sm:justify-center items-center m-auto sm:mx-0">
            <MailIcon className="text-gray-700" style={{ fontSize: "5rem" }} />
            <p className="text-gray-700 font-bold sm:text-4xl mt-2 text-xl">
              E-Mail
            </p>
          </div>

          <p className="text-md sm:text-xl font-semibold m-auto ">
            contrivewith@thedronecontriver.co.in
          </p>
        </div>
        <div className="hidden sm:inline-block h-auto my-8 w-0.5 self-stretch bg-gray-700"></div>
        <div className="sm:w-1/3 bg-white p-2 flex flex-col">
          <div className="flex flex-col py-3 justify-end sm:justify-center items-center m-auto sm:mx-0">
            <LocalPhoneIcon
              className="text-gray-700"
              style={{ fontSize: "5rem" }}
            />
            <p className="text-gray-700 font-bold sm:text-4xl mt-2 text-xl">
              PHONE NUMBER
            </p>
          </div>

          <p className="text-md sm:text-xl font-semibold m-auto">
            +91 9958312168
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;

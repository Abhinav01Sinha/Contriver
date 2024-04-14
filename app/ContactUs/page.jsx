"use client";
import React, { useRef, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function ContactUsPage() {
  const thisForm = useRef();
  // To-Do

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Email sent!");
    emailjs
      .sendForm("service_ID", "template_ID", thisForm.current, "Public Key")
      .then(
        (result) => {
          thisForm.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-blue-400 px-2 sm:px-10 py-0 sm:py-5 flex sm:flex-row flex-col justify-center items-center gap-x-20 ">
      {/* CONATACT US */}
      <div className="flex flex-col sm:mx-10 sm:w-1/3 space-y-5 my-5 animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        <h1 className="text-white sm:text-7xl text-4xl text-center font-bold text-center my-2">
          CONTACT US
        </h1>

        <div className="bg-white flex flex-row sm:px-15 rounded-3xl border-4 border-black border-solid ">
          <div className="flex flex-col py-3 justify-end sm:justify-center items-center w-1/4 m-auto sm:mx-0">
            <LocationOnIcon style={{ fontSize: "3rem" }} />
            <p className="text-black font-bold sm:text-xl text-md">ADDRESS</p>
          </div>

          <p className="text-md font-semibold px-5 m-auto w-3/4">
            I - 188 , Phase 1 , Ashok Vihar, Delhi , IN
          </p>
        </div>

        <div className="bg-white flex flex-row sm:px-15 rounded-3xl border-4 border-black border-solid">
          <div className="flex flex-col py-3 justify-end sm:justify-center items-center w-1/4 m-auto sm:mx-0">
            <MailIcon style={{ fontSize: "3rem" }} />
            <p className="text-black font-bold sm:text-xl text-md">E-Mail</p>
          </div>

          <p className="sm:text-lg text-sm sm:font-semibold sm:px-5 px-0 m-auto w-3/4">
            contrivewith@thedronecontriver.co.in
          </p>
        </div>

        <div className="bg-white flex flex-row sm:px-15 rounded-3xl border-4 border-black border-solid">
          <div className="flex flex-col py-3 justify-end sm:justify-center items-center w-1/4 m-auto sm:mx-0">
            <LocalPhoneIcon style={{ fontSize: "3rem" }} />
            <p className="text-black font-bold text-md">PHONE</p>
            <p className="text-black font-bold text-md">NUMBER</p>
          </div>

          <div className="flex flex-col py-3 justify-center items-start space-y-2 w-3/4">
            <p className="sm:text-lg text-sm font-semibold px-5 ">
              Utkarsh Ahuja : +91 9958312168
            </p>
          </div>
        </div>
      </div>

      <div className="hidden sm:inline-block h-auto my-8 w-0.5 self-stretch bg-white"></div>

      {/* Send E-Mail */}
      <div className=" bg-black flex flex-col px-3 pb-3 sm:mx-10 sm:my-5 my-10 sm:w-1/3 animate-fade-left animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        <h1 className=" text-white sm:text-6xl text-2xl text-center font-bold text-center mt-4 mb-2">
          DROP A MAIL!
        </h1>
        <p className=" text-white sm:text-xl text-md text-center font-semibold text-center mb-2">
          Feel free to reach out for any queries
        </p>
        <form ref={thisForm} onSubmit={handleSubmit}>
          <div className="flex flex-col bg-blue-600  space-y-4 p-6 justify-center items-center">
            <Input required type="email" placeholder="E-mail Address" />
            <Input required placeholder="Your Name" />
            <Input required placeholder="Subject" />
            <Textarea rows="1" placeholder="Type your message here!" />
            <Button className="w-full">Send Mail</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;

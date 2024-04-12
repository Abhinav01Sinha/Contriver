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
    <div className="bg-blue-400 px-5 sm:px-10 flex sm:flex-row flex-col justify-center items-center gap-x-20 ">
      {/* CONATACT US */}
      <div className="flex flex-col sm:mx-10 sm:w-1/3 space-y-5 my-5">
        <h1 className="text-white sm:text-7xl text-3xl text-center font-bold text-center my-2">
          CONTACT US
        </h1>

        <div className="bg-white flex flex-row sm:px-20 rounded-3xl border-4 border-black border-solid ">
          <div className="flex flex-col py-3 justify-center items-center w-1/4 m-auto sm:mx-0">
            <LocationOnIcon style={{ fontSize: "3rem" }} />
            <p className="text-black font-bold text-xl ">ADDRESS</p>
          </div>

          <p className="text-md text-start font-bold px-10 m-auto w-3/4">
            Headquarters Phase 1, Ashok Vihar, Delhi 110052, IN
          </p>
        </div>

        <div className="bg-white flex flex-row sm:px-20 rounded-3xl border-4 border-black border-solid">
          <div className="flex flex-col py-3 justify-center items-center w-1/4 m-auto sm:mx-0">
            <MailIcon style={{ fontSize: "3rem" }} />
            <p className="text-black font-bold text-xl">E-Mail</p>
          </div>

          <p className="text-md text-start font-bold px-10 m-auto w-3/4">
            utkarshessence.ahuja@gmail.com
          </p>
        </div>

        <div className="bg-white flex flex-row sm:px-20 rounded-3xl border-4 border-black border-solid">
          <div className="flex flex-col py-3 justify-center items-center w-1/4 m-auto sm:mx-0">
            <LocalPhoneIcon style={{ fontSize: "3rem" }} />
            <p className="text-black font-bold text-md">PHONE</p>
            <p className="text-black font-bold text-md">NUMBER</p>
          </div>

          <div className="flex flex-col py-3 justify-center items-start space-y-2 w-3/4">
            <p className="text-md font-bold px-10 ">Utkarsh Ahuja :</p>
            <p className="text-md font-bold px-10 ">+91 9958312168</p>
          </div>
        </div>
      </div>

      {/* Send E-Mail */}
      <div className=" bg-black flex flex-col px-2 pb-2 sm:mx-10 my-5 sm:w-1/3">
        <h1 className=" text-white sm:text-6xl text-2xl text-center font-bold text-center mt-4 mb-2">
          DROP A MAIL!
        </h1>
        <p className=" text-white sm:text-xl text-xl text-center font-semibold text-center mb-2">
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

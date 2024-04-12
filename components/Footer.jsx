import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full bg-black flex flex-col lg:flex-row pb-5 lg:px-10 px-10">
      {/* Info */}
      <div className="text-white text-bold text-md my-auto lg:mr-20">
        <p className="my-4 text-lg">
          &copy;2024 Contriver Autonomous Systems Private Limited
        </p>
        {/* Socials */}
        <div className="flex flex-col items-center ">
          <div className="flex flex-row gap-10">
            <div>
              <Link href="/">
                <Image
                  src={"/X-twitter.png"}
                  alt="X-twitter"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src={"/LinkedIn.png"}
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div>
              <Link href="/.png">
                <Image
                  src={"/Instagram.png"}
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src={"/Facebook.png"}
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="my-10 text-left lg:mx-20">
        <h1 className="text-3xl text-white mb-4">FIND US AT:</h1>
        <div className="py-2">
          <iframe
            className=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d286.63539058727616!2d77.11451204732097!3d28.74968022331842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01ca3b4e3f85%3A0xd03e90b6833fac09!2sA4%20Block%2C%20Dept.%20of%20Computer%20Science%20%26%20Software%20Engg.!5e0!3m2!1sen!2sin!4v1712438736581!5m2!1sen!2sin"
            width="400"
            height="200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col text-white my-auto justify-center items-center lg:ml-20">
        <div className="text-lg text-semibold hover:text-indigo-200">
          <Link href={"/AboutUs"}>About Us</Link>
        </div>
        <div className="text-lg text-semibold hover:text-indigo-200">
          <Link href={"/HowItWorks"}>How It Works</Link>
        </div>
        <div className="text-lg text-semibold hover:text-indigo-200">
          <Link href={"/Milestones"}>Milestones</Link>
        </div>
        <div className="text-lg text-semibold hover:text-indigo-200">
          <Link href={"/BusinessModel"}>Business Model</Link>
        </div>
        <div className="text-lg text-semibold hover:text-indigo-200">
          <Link href={"/ContactUs"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

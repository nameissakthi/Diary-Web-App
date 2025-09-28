import React from "react";
import assets from "../assets/assests";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-pink-400 sm:px-10 py-2 sm:py-5 flex flex-col items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between text-white">
        <div className="flex gap-2">
          <img src={assets.logo} alt="Logo" className="w-10 sm:w-32" />
          <p className="text-3xl font-bold self-center">My Diary</p>
        </div>

        <div className="flex flex-col gap-3 font-bold">
          <p className="text-base">Privacy Policy</p>
          <p className="text-base">Terms and Conditions</p>
        </div>

        <div className="flex flex-col gap-3 font-bold">
          <a href="#" className="flex gap-1 items-center text-base">
            <FaSquareFacebook className="text-2xl" /> Facebook
          </a>
          <a href="#" className="flex gap-1 items-center text-base">
            <FaSquareInstagram className="text-2xl" /> Instagram
          </a>
          <a href="#" className="flex gap-1 items-center text-base">
            <FaSquareXTwitter className="text-2xl" /> X (Twitter)
          </a>
        </div>
      </div>
      <div className="bg-pink-300 flex justify-between px-2 py-2 md:px-10 items-center text-xs md:text-base">
        <p className="text-center text-gray-500 font-extrabold">Created By Sakthivel</p>
        <p>
          <a href="https://github.com/nameissakthi" target="_blank" className="flex gap-1 items-center font-extrabold text-gray-500">
            <FaSquareGithub /> Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

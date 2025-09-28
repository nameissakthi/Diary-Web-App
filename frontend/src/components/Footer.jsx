import React from "react";
import assets from "../assets/assests";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-pink-400 px-10 py-5 flex justify-between text-white">
        <div className="flex gap-2">
          <img src={assets.logo} alt="Logo" className="w-32" />
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
      <div className="bg-pink-300">
        <p className="text-center text-gray-500 font-extrabold p-1">Created By Sakthivel</p>
      </div>
    </div>
  );
};

export default Footer;

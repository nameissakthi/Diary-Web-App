import React from "react";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import Header from "../components/Header";
import assets from "../assets/assests";

import { GoShieldLock } from "react-icons/go";
import { BsSpeedometer } from "react-icons/bs";
import { MdSupervisedUserCircle } from "react-icons/md";

import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

const Login = () => {
  return (
    <div>
      <Header
        children={
          <SignedOut>
            <SignInButton className="px-4 py-1 md:px-6 md:py-3 bg-amber-300 text-black text-base rounded-xl md:rounded-2xl" />
          </SignedOut>
        }
      />
      <div className="mt-10 px-2 md:px-[10%]">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <img
            src={assets.pencil_animation}
            alt="Pencil Animation"
            className="w-[80%] md:w-[70%] lg:w-[30%] lg:h-[30%]"
          />
          <div className="p-6">
            <p className="text-base lg:text-3xl lg:leading-12">
              <i>
                A <b>personal space</b> that travels with you—secure, simple,
                and soulful—because your story matters, every single day.
              </i>
            </p>
            <div className="flex flex-col lg:flex-row lg:justify-between p-4 gap-4 mt-4">
              <p className="w-full lg:px-4 min-h-20 md:min-h-30 bg-pink-400 flex justify-center items-center gap-2 font-extrabold text-xl md:text-4xl text-white">
                <GoShieldLock />
                Secure
              </p>
              <p className="w-full lg:px-4 min-h-20 md:min-h-30 bg-pink-400 flex justify-center items-center gap-2 font-extrabold text-xl md:text-4xl text-white">
                <BsSpeedometer />
                Fast
              </p>
              <p className="w-full lg:px-4 min-h-20 md:min-h-30 bg-pink-400 flex justify-center items-center gap-2 font-extrabold text-xl md:text-4xl text-white">
                <MdSupervisedUserCircle />
                Reliable
              </p>
            </div>

            <div className="mt-5 flex flex-col">
              <p className="md:text-xl self-center md:self-end mb-2 md:mb-0">
                More than 50,000+ user rated high on playstore.
              </p>
              <div className="self-center md:self-end text-xl">
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 font-extrabold">4.5/5</p>
                  <div className="flex gap-2 text-yellow-400 md:text-3xl items-center">
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarHalfOutline />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 md:px-5 text-xs md:text-base">
                <p className="px-2 py-1 border-2 w-fit rounded-2xl text-pink-400 font-bold">
                  #happymoments
                </p>
                <p className="px-2 py-1 border-2 w-fit rounded-2xl text-pink-400 font-bold">
                  #journey
                </p>
                <p className="px-2 py-1 border-2 w-fit rounded-2xl text-pink-400 font-bold">
                  #toughts
                </p>
                <p className="px-2 py-1 border-2 w-fit rounded-2xl text-pink-400 font-bold">
                  #life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10%] flex flex-col-reverse lg:flex-row lg:justify-between my-5 gap-5">
        <div className="flex items-center md:w-[90%] text-center">
          <p className="md:text-3xl lg:text-5xl font-mono flex flex-col w-full">
            <span className="lg:text-start">Access from anywhere</span>
            <span className="lg:text-end">with high security</span>
          </p>
        </div>
        <div className="">
          <img
            src={assets.data_backup}
            alt="Cloud"
            className="w-xl rounded-4xl"
          />
        </div>
      </div>

      <div className="flex justify-center my-10">
        <div className="w-[90%] p-8 text-center md:text-left md:p-20 bg-pink-400 rounded-2xl shadow-2xl shadow-pink-100">
          <div className="flex flex-col items-center gap-3">
            <p className="text-xl md:text-4xl lg:text-5xl font-bold text-white">Create your Account Now!!</p>
            <SignedOut>
              <SignInButton className="px-6 py-2 md:px-[10%] md:py-3 bg-amber-300 text-black text-base md:text-xl rounded-2xl scale-95 hover:bg-blue-500 hover:text-white hover:scale-100 transition-all duration-150 font-bold md:font-extrabold" />
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

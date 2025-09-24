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
            <SignInButton className="px-6 py-3 bg-amber-300 text-black text-base rounded-2xl" />
          </SignedOut>
        }
      />
      <div className="mt-10 px-[10%]">
        <div className="flex justify-between">
          <img
            src={assets.pencil_animation}
            alt="Pencil Animation"
            className="w-[30%] h-[30%]"
          />
          <div className="p-6">
            <p className="text-3xl leading-12">
              <i>
                A <b>personal space</b> that travels with you—secure, simple,
                and soulful—because your story matters, every single day.
              </i>
            </p>
            <div className="flex justify-between p-4 gap-4 mt-4">
              <p className="w-full min-h-30 bg-green-400 flex justify-center items-center gap-2 font-extrabold text-4xl text-white">
                <GoShieldLock />
                Secure
              </p>
              <p className="w-full min-h-30 bg-green-400 flex justify-center items-center gap-2 font-extrabold text-4xl text-white">
                <BsSpeedometer />
                Fast
              </p>
              <p className="w-full min-h-30 bg-green-400 flex justify-center items-center gap-2 font-extrabold text-4xl text-white">
                <MdSupervisedUserCircle />
                Reliable
              </p>
            </div>

            <div className="mt-5 flex flex-col">
              <p className="text-2xl self-end">
                More than 50,000+ user rated high on playstore.
              </p>
              <div className="self-end">
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 font-extrabold">4.5/5</p>
                  <div className="flex gap-2 text-yellow-400 text-4xl items-center">
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarHalfOutline />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-2 px-5">
                <p className="px-2 py-1 border-2 w-fit rounded-2xl text-gray-400 font-bold">
                  #happymoments
                </p>
                <p className="px-2 py-1 border-2 w-fit rounded-2xl text-gray-400 font-bold">
                  #journey
                </p>
                <p className="px-2 py-1 border-2 w-fit rounded-2xl text-gray-400 font-bold">
                  #toughts
                </p>
                <p className="px-2 py-1 border-2 w-fit rounded-2xl text-gray-400 font-bold">
                  #life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10%] mt-25 h-[50%]">
        <div className="flex flex-col">
          <div className="border w-fit py-8 px-24 rounded-4xl text-4xl shadow-inner shadow-slate-400 font-bold">
            <p>Access</p>
          </div>
          <div className="border w-fit py-8 px-24 rounded-4xl text-4xl shadow-inner shadow-slate-400 font-bold">
            <p>from</p>
          </div>
          <div className="border w-fit py-8 px-24 rounded-4xl text-4xl shadow-inner shadow-slate-400 font-bold">
            <p>anywhere</p>
          </div>
          <img src={assets.globe} alt="globe" className="absolute -z-50 opacity-10 h-[50%] self-center" />
        </div>
      </div>
    </div>
  );
};

export default Login;

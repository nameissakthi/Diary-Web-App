import React, { useContext } from "react";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import Header from "../components/Header";
import { DiaryContext } from "../context/DiaryContext";

import { CiPen } from "react-icons/ci";

const Home = () => {

  const { user } = useContext(DiaryContext);

  console.log(user)

  return (
    <div>
      <Header
        children={
          <div className="flex items-center gap-2">
            <p className="font-bold text-xl">{user.user.firstName!=undefined&&user.user.firstName}</p>
            <SignedIn>
              <UserButton appearance={{
                elements : {
                  userButtonAvatarBox : {
                    width : "40px",
                    height : "40px"
                  }
                }
              }} />
            </SignedIn>
          </div>
        }
      />

      <div className="px-[5%] my-10">
        <div className="shadow shadow-pink-800 flex justify-between rounded-2xl">
          <div className="flex-2 p-10">
            <p className="font-bold text-6xl">Hello <span className="text-pink-600">{user.user.firstName!=undefined?user.user.firstName:"There"}</span></p>
            <p className="text-xl">Your personal diary is <span className="bg-amber-400">ready</span> to use</p>
          </div>
          <div className="flex-1 flex justify-center items-center bg-pink-500 rounded-r-2xl">
            <CiPen className="text-8xl text-white scale-95 hover:scale-105 hover:translate-1.5 translate-3d transition-all duration-150" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import assets from "../assets/assests";

const Header = ({children}) => {
  return (
    <header className="flex justify-between items-center p-4 md:px-6 md:py-3 m-4 rounded-2xl bg-pink-400 text-white shadow-2xl shadow-pink-300 sticky top-3.5 opacity-[98%] z-40">
      <div>
        <div className="flex items-center-safe">
          <img src={assets.logo} alt="Logo" className="w-10 md:w-20 lg:w-24" />
          <p className="text-base md:text-2xl lg:text-3xl font-bold hidden md:block">My Diary</p>
        </div>
      </div>
      <div>{children}</div>
    </header>
  );
};

export default Header;

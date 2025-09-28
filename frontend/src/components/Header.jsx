import React from "react";
import assets from "../assets/assests";

const Header = (props) => {
  return (
    <header className="flex justify-between items-center p-2 md:px-6 md:py-3 m-4 rounded-2xl bg-pink-400 text-white shadow-2xl shadow-pink-300 sticky top-3.5 opacity-[98%]">
      <div>
        <div className="flex items-center-safe">
          <img src={assets.logo} alt="Logo" className="w-10 md:w-24" />
          <p className="text-base md:text-3xl font-bold">My Diary</p>
        </div>
      </div>
      <div>{props.children}</div>
    </header>
  );
};

export default Header;

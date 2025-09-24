import React from "react";
import assets from "../assets/assests";

const Header = (props) => {
  return (
    <header className="flex justify-between items-center px-6 py-3 m-4 rounded-2xl bg-pink-400 text-white shadow-2xl shadow-pink-300 sticky top-3.5 opacity-[98%]">
      <div>
        <div className="flex items-center-safe">
          <img src={assets.logo} alt="Logo" className="w-24" />
          <p className="text-3xl font-bold">My Diary</p>
        </div>
      </div>
      <div>{props.children}</div>
    </header>
  );
};

export default Header;

import React, { useContext } from "react";
import Header from "../components/Header";
import { DiaryContext } from "../context/DiaryContext";
import { Link } from "react-router-dom";

import { FaPencilAlt } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(DiaryContext);

  const handleProfileEdit = () => {
    console.log("Kundani Shobana")
  }

  return (
    <div>
      <Header
        children={
          <div className="flex gap-3 items-center">
            <div className="text-xl font-bold px-4 py-2 bg-yellow-400 rounded-xl">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="text-xl font-bold px-4 py-2 bg-yellow-400 rounded-xl">
              <Link to={"/new-record"}>New Record</Link>
            </div>
            <Link
              className="flex items-center gap-2 cursor-pointer"
              to={"/profile"}
            >
              <p className="font-bold text-xl">
                {user.user != undefined && user.user.firstName}
              </p>
              <img
                src={user.user.imageUrl}
                alt="Profile"
                className="w-10 rounded-full"
              />
            </Link>
          </div>
        }
      />

      <div className="px-[5%] my-10">
        <div className="flex flex-col w-fit">
            <div className="border-2 rounded-full p-1 border-pink-600">
                <img src={user.user.imageUrl} alt="Profile" className="w-72 rounded-full" />
            </div>
            <button onClick={handleProfileEdit} className="border-2 border-pink-600 rounded-sm w-fit px-4 py-2 flex justify-between items-center gap-2 text-xs font-semibold self-center relative -top-4 bg-white">
                <FaPencilAlt />
                Edit
            </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

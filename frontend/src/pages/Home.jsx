import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import { DiaryContext } from "../context/DiaryContext";

import { CiPen } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

import WordsFunction from "../func/WordsFunction.ts";
import DotLoading from "../components/DotLoading.jsx";

const Home = () => {
  const { user, data, loading, fetchAllRecords } = useContext(DiaryContext);

  useEffect(() => {
    if(user.isSignedIn)
      fetchAllRecords()
  }, [])

  return (
    <div>
      <Header
        children={
          <div className="flex gap-1 md:gap-6 items-center">
            <div className="text-xl font-bold px-4 py-2 bg-none md:bg-yellow-400 rounded-xl">
              <Link to={"/new-record"}>
                <span className="hidden md:block md:text-base lg:text-xl">
                  New Record
                </span>
                <IoMdAddCircle className="md:hidden text-2xl" />
              </Link>
            </div>
            <Link
              className="flex items-center gap-2 cursor-pointer"
              to={"/profile"}
            >
              <p className="font-bold text-xl">
                {user.user?.firstName || "User"}
              </p>
              <img
                src={user.user?.imageUrl}
                alt="Profile"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />
            </Link>
          </div>
        }
      />

      <div className="px-[5%] mt-10">
        <div className="shadow shadow-pink-800 flex flex-col-reverse md:flex-row md:justify-between rounded-2xl">
          <div className="flex-2 p-10">
            <p className="font-bold text-4xl md:text-5xl lg:text-6xl">
              Hello{" "}
              <span className="text-pink-600">
                {user.user?.firstName || "There"}
              </span>
            </p>
            <p className="text-xl">
              Your personal diary is <span className="bg-amber-400">ready</span>{" "}
              to use
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center bg-pink-500 py-5 md:py-0 rounded-t-2xl md:rounded-t-none md:rounded-r-2xl">
            <CiPen className="text-8xl text-white scale-95 hover:scale-105 hover:translate-1.5 translate-3d transition-all duration-150" />
          </div>
        </div>
      </div>

      <div className="px-[5%] my-10">
        <h1 className="text-3xl font-bold mb-5">
          Memories <hr className="border-2 border-pink-800" />
        </h1>
        {loading ? (
          <DotLoading />
        ) : (
          <div>
            {data!=null && data.length != 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {data.map((value) => {
                  return (
                    <Link
                      key={value.id}
                      className="p-4 rounded-xl shadow-pink-900 shadow-xs min-w-80 lg:min-w-72"
                      to={`/record/${value.id}`}
                    >
                      <div className="flex flex-col gap-4">
                        <p className="text-2xl text-pink-500">
                          {WordsFunction.makeTheTitleShort(
                            WordsFunction.capitalize(value.title)
                          )}
                        </p>
                        <div className="flex justify-between">
                          <p className="text-xs text-pink-400 font-extrabold">
                            Written on {value.date} at {value.time}
                          </p>
                          <p className="text-xs text-pink-400 font-extrabold">
                            Day : {value.day}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex justify-center items-center h-10">
                <p className="text-xl">No Memories Found!!!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

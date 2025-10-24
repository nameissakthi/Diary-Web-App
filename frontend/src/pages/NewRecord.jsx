import React, { useContext, useEffect, useState } from "react";

import { MDXEditor } from "@mdxeditor/editor";
import {
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import Header from "../components/Header";
import { DiaryContext } from "../context/DiaryContext";

import { SignedIn, UserButton } from "@clerk/clerk-react";

import { Link } from "react-router-dom";

import DateTime from "../func/DateTime.ts";
import { toast } from "react-toastify";

const NewRecord = () => {
  const { user } = useContext(DiaryContext);

  const [data, setData] = useState({
    title: "",
    content: "",
    day: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const save = () => {
    const dateTime = new DateTime();
    setData({
      ...data,
      day: dateTime.findDay(),
      date: dateTime.findDate(),
      time: dateTime.findTime(),
    });
    toast.success("Memory Saved Successfully");
  };

  return (
    <div className="mb-10">
      <Header
        children={
          <div className="flex gap-6 items-center">
            <div className="text-xl font-bold px-4 py-2 bg-yellow-400 rounded-xl">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="flex items-center gap-2">
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
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            </div>
          </div>
        }
      />

      <div className="px-[5%] mt-10">
        <div>
          <h1 className="text-2xl font-bold mb-5">New Diary Record</h1>
          <input
            type="text"
            className="border-2 rounded-xl w-full p-2 mb-4"
            placeholder="Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <MDXEditor
            markdown={data.content}
            placeholder="Write your day......."
            onChange={(e) => setData({ ...data, content: e })}
            plugins={[
              toolbarPlugin({
                toolbarClassName: "my-classname",
                toolbarContents: () => (
                  <>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                  </>
                ),
              }),
            ]}
            className="border-2 rounded-xl"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={save}
            className="text-xl px-6 py-2 rounded-xl bg-blue-500 text-white font-bold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRecord;

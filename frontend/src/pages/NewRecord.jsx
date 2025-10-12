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


  class DateTime {
    constructor() {
      this.date = new Date();
    }

    findDay() {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return days[this.date.getDay()];
    }

    findTime() {
      return this.date.getHours() + ":" + this.date.getMinutes();
    }

    findDate() {
      return (
        this.date.getDate() +
        " " +
        (this.date.getMonth() + 1) +
        " " +
        this.date.getFullYear()
      );
    }
  }


const NewRecord = () => {

  const { user } = useContext(DiaryContext);

  const [data, setData] = useState({
    content : "",
    day : "",
    date : "",
    time : ""
  });

  useEffect(() => {
    console.log(data);
  }, [data]);


  const save = () => {
    const dateTime = new DateTime()
    setData({...data, day : dateTime.findDay(), date : dateTime.findDate(), time : dateTime.findTime()})
  }


  return (
    <div className="mb-10">
      <Header
        children={
          <div className="flex gap-6 items-center">
            <div className="text-xl font-bold px-4 py-2 bg-yellow-400 rounded-xl">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-xl">
                {user.user != undefined && user.user.firstName}
              </p>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "40px",
                        height: "40px",
                      },
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        }
      />

      <div className="px-[5%] mt-10">
        <div>
          <h1 className="text-2xl font-bold mb-5">New Diary Record</h1>
          <MDXEditor
            markdown={data.content}
            onChange={(e) => setData({...data, content : e})}
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
          <button onClick={save} className="text-xl px-6 py-2 rounded-xl bg-blue-500 text-white font-bold">Save</button>
        </div>
      </div>
    </div>
  );
};

export default NewRecord;

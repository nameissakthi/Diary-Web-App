import { useContext, useState } from "react";

import { MDXEditor } from "@mdxeditor/editor";
import {
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import Header from "../components/Header";
import { DiaryContext } from "../context/DiaryContext";

import { Link } from "react-router-dom";

import DateTime from "../func/DateTime.ts";
import { toast } from "react-toastify";

import { IoHome } from "react-icons/io5";

const NewRecord = () => {
  const { user, saveNewDiaryRecord, navigate } = useContext(DiaryContext);

  const [data, setData] = useState({
    title: "",
    content: "",
    day: "",
    date: "",
    time: "",
    email: ""
  });

  const save = async () => {
    if (!data.title?.trim()) {
      toast.error("Please add a title");
      return;
    }
    if (!data.content?.trim()) {
      toast.error("Please add some content");
      return;
    }

    const dateTime = new DateTime();
    const day = dateTime.findDay();
    const date = dateTime.findDate();
    const time = dateTime.findTime();
    const email = user.user?.emailAddresses?.[0]?.emailAddress || "";

    const recordToSave = { ...data, day, date, time, email };

    setData(recordToSave);
    try {
      let res = await saveNewDiaryRecord(recordToSave);
      setData({ title: "", content: "", day: "", date: "", time: "", email: "" });
      navigate("/")
      if(res.success)
        toast.success(res.message)
    } catch (err) {
      console.error("Failed to save record", err);
      toast.error("Error while storing the data")
    }
  };

  return (
    <div className="mb-10">
      <Header
        children={
          <div className="flex gap-1 md:gap-6 items-center">
            <div className="text-xl font-bold px-4 py-2 bg-none md:bg-yellow-400 rounded-xl">
              <Link to={"/"}>
                <span className="hidden md:block md:text-base lg:text-xl">Home</span>
                <IoHome className="md:hidden text-2xl" />
              </Link>
            </div>
            <div className="flex items-center gap-2">
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
            className="text-xl px-6 py-2 rounded-xl bg-blue-500 text-white font-bold w-full md:w-[20%]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRecord;

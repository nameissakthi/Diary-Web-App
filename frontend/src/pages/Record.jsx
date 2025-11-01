import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DiaryContext } from "../context/DiaryContext";

import Header from "../components/Header";
import { MDXEditor } from "@mdxeditor/editor";
import { IoHome } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import DotLoading from "../components/DotLoading";

const Record = () => {
  const { user, loading, getSingleDiaryRecord } = useContext(DiaryContext);
  const { id } = useParams();
  const [data, setData] = useState();

  useState(()=>{
    setData(getSingleDiaryRecord(id))
  }, [])

  return (
    <div>
      <Header
        children={
          <div className="flex gap-3 items-center">
            <div className="text-xl font-bold md:px-4 md:py-2 bg-none md:bg-yellow-400 rounded-xl">
              <Link to={"/"}>
                <span className="hidden md:block md:text-base lg:text-xl">Home</span>
                <IoHome className="md:hidden text-2xl" />
              </Link>
            </div>
            <div className="text-xl font-bold md:px-4 md:py-2 bg-none md:bg-yellow-400 rounded-xl">
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

      <div className="px-[5%] my-10">
        {loading ? (
          <DotLoading />
        ) : data ? (
          <div>
            <div className="flex flex-col md:justify-between md:flex-row mb-5">
              <p className="text-3xl md:text-5xl font-extralight">{data.title}</p>
              <p className="flex flex-row justify-between md:flex-col">
                <span className="flex gap-2 font-extralight md:text-xl md:font-bold">{data.date}</span>
                <span className="flex gap-2 font-extralight">
                  <span>{data.day}</span>
                  <span>{data.time}</span>
                </span>
              </p>
            </div>

            <div>
              <MDXEditor key={data.id} markdown={data.content} readOnly={true} plugins={[]} className="border-2" />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No data available. Please reload the application.</p>
        )}
      </div>
    </div>
  );
};

export default Record;

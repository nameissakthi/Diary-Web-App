import { useContext, useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { DiaryContext } from "../context/DiaryContext";

import Header from "../components/Header";
import Loading from "../components/Loading";
import { MDXEditor } from "@mdxeditor/editor";
import { toast } from "react-toastify";

const Record = () => {
  const { user, navigate } = useContext(DiaryContext);
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const getData = useCallback(async () => {

    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.log("Error will retriving the data", error);
      navigate("/");
      toast.error("Error while retriving the data!!!");
    } finally {
        setLoading(false)
    }
  }, [navigate]);

  useEffect(() => {
    getData()
  }, [getData])

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
                {user.user?.firstName || "User"}
              </p>
              <img
                src={user.user?.imageUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </Link>
          </div>
        }
      />

      <div className="px-[5%] my-10">
        {loading ? (
          <Loading />
        ) : data ? (
          <div>
            <div className="flex justify-between mb-5">
              <p className="text-5xl font-extralight self-end">{data.title}</p>
              <p className="flex flex-col">
                <span className="text-2xl font-extralight">{data.date}</span>
                <span className="flex gap-2 font-bold">
                  <span>{data.day}</span>
                  <span>{data.time}</span>
                </span>
              </p>
            </div>

            <div>
              <MDXEditor key={data.id} markdown={data.content} readOnly={true} plugins={[]} />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>
    </div>
  );
};

export default Record;

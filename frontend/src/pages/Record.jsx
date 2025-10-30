import { useContext, useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DiaryContext } from "../context/DiaryContext";

import Header from "../components/Header";
import Loading from "../components/Loading";
import { MDXEditor } from "@mdxeditor/editor";
import { toast } from "react-toastify";
import { IoHome } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";

const Record = () => {
  const { user, navigate } = useContext(DiaryContext);
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const getData = useCallback(async () => {

    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // const response = await fetch(`/api/records/${id}`);
      // const result = await response.json();
      // setData(result);
      
      console.log("Data loaded successfully")
    } catch (error) {
      console.log("Error will retriving the data", error);
      navigate("/");
      toast.error("Error while retriving the data!!!");
    } finally {
        setLoading(false)
    }
  }, [navigate]);

  useEffect(()=>{
   getData() 
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
          <Loading />
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
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>
    </div>
  );
};

export default Record;

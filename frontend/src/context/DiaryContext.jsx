import { DiaryContext } from "./DiaryContext";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DiaryContextProvider = (props) => {
  const user = useUser();
  const clerk = useClerk();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [loading, setLoading] = useState(false);

  const fetchAllRecords = async () => {
    setLoading(true);
    try {
      const email = user.user?.emailAddresses?.[0]?.emailAddress || "";
      const response = await axios.get(`${BACKEND_URL}/list`, {
        params: { email },
      });

      if (response.status === 200 && response.data?.success) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("fetchAllRecords error:", error);
      toast.error(error.response?.data?.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const saveNewDiaryRecord = async (diary) => {
    let response = await axios.post(BACKEND_URL + "/add", diary);
    return response.data;
  };

  const getSingleDiaryRecord = (id) => {
    return data.filter((v) => v.id == id)[0];
  };

  useEffect(() => {
    console.log("Hi")
    if (user.isLoaded) {
      const currentPath = location.pathname;
      const isLoginPage = currentPath === "/login";
      const protectedRoutes = ["/", "/profile", "/new-record"];
      const isProtectedRoute =
        protectedRoutes.includes(currentPath) ||
        currentPath.startsWith("/record/");

      if (user.isSignedIn) {
        if (isLoginPage) {
          navigate("/");
        }
      } else {
        if (isProtectedRoute) {
          navigate("/login");
        }
      }
    }
  }, [user.isLoaded, user.isSignedIn, location.pathname, navigate]);

  const value = {
    user,
    navigate,
    clerk,
    data,
    loading,
    saveNewDiaryRecord,
    getSingleDiaryRecord,
    fetchAllRecords
  };

  return (
    <DiaryContext.Provider value={value}>
      {props.children}
    </DiaryContext.Provider>
  );
};

export default DiaryContextProvider;

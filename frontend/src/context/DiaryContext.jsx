import { DiaryContext } from "./DiaryContext";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DiaryContextProvider = (props) => {
  
  const user = useUser()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user.isSignedIn)
      navigate("/login")
  }, [user.isSignedIn])

  const value = { user, navigate };

  return (
    <DiaryContext.Provider value={value}>{props.children}</DiaryContext.Provider>
  );
};

export default DiaryContextProvider;
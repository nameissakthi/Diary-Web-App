import { useEffect } from "react";
import { DiaryContext } from "./DiaryContext";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const DiaryContextProvider = (props) => {
  
  const user = useUser()
  const navigate = useNavigate()

  useEffect(()=>{
    console.log(user)
    if(!user.isSignedIn)
      navigate("/login")
    else
      navigate("/")
  }, [user.isSignedIn])

  const value = { user, navigate };

  return (
    <DiaryContext.Provider value={value}>{props.children}</DiaryContext.Provider>
  );
};

export default DiaryContextProvider;
import { DiaryContext } from "./DiaryContext";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const DiaryContextProvider = (props) => {
  
  const user = useUser()
  const clerk = useClerk()
  const navigate = useNavigate()

  const value = { user, navigate, clerk };

  return (
    <DiaryContext.Provider value={value}>{props.children}</DiaryContext.Provider>
  );
};

export default DiaryContextProvider;
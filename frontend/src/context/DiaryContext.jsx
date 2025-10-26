import { DiaryContext } from "./DiaryContext";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DiaryContextProvider = (props) => {
  const user = useUser();
  const clerk = useClerk();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user.isLoaded) {
      const currentPath = location.pathname;
      const isLoginPage = currentPath === "/login";
      const protectedRoutes = ["/", "/profile", "/new-record"];
      const isProtectedRoute = protectedRoutes.includes(currentPath);

      if (user.isSignedIn) {
        // If user is signed in and on login page, redirect to home
        if (isLoginPage) {
          navigate("/");
        }
      } else {
        // If user is not signed in and trying to access protected routes, redirect to login
        if (isProtectedRoute) {
          navigate("/login");
        }
      }
    }
  }, [user.isLoaded, user.isSignedIn, location.pathname, navigate]);

  const value = { user, navigate, clerk };

  return (
    <DiaryContext.Provider value={value}>
      {props.children}
    </DiaryContext.Provider>
  );
};

export default DiaryContextProvider;

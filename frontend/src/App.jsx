import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import NewRecord from "./pages/NewRecord";
import { useContext } from "react";
import { DiaryContext } from "./context/DiaryContext";
import { Bounce, ToastContainer } from "react-toastify";
import assets from "./assets/assests";
import Profile from "./pages/Profile";
import Loading from "./components/Loading";

export default function App() {
  const { user } = useContext(DiaryContext);

  return !user.isLoaded ? (
    <Loading className={"h-screen"} />
  ) : (
    <div className="app">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Login />} path="/login" />
        <Route element={<NewRecord />} path="/new-record" />
      </Routes>
      <Footer />
    </div>
  );
}

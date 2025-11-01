import { useContext, useState } from "react";
import Header from "../components/Header";
import { DiaryContext } from "../context/DiaryContext";
import { Link } from "react-router-dom";

import { FaPencilAlt } from "react-icons/fa";
import Popup from "../components/Popup";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { IoHome } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import DotLoading from "../components/DotLoading";

const Profile = () => {
  const { user, navigate, clerk } = useContext(DiaryContext);

  const [openPopup, setOpenPopup] = useState({ open: false, poptitle: "" });

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  const [fullName, setFullName] = useState(user.user?.fullName || "");

  const handleProfileEdit = () => {
    setOpenPopup({ open: true, poptitle: "Edit Profile" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!profilePic) {
      toast.error("Please select an image first!");
      return;
    }

    setLoading(true);

    try {
      await user.user.setProfileImage({ file: profilePic });
      toast.success("Profile Picture Updated Successfully!!!");
    } catch (error) {
      console.log("Failed to upload image : ", error);
      toast.error("Failed to upload image!!!");
    } finally {
      setLoading(false);
      setOpenPopup({ open: false, poptitle: "" });
      setPreview(null);
      setProfilePic(null);
    }
  };

  const ProfileEditContent = () => (
    <div>
      {loading ? (
        <DotLoading />
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-bold text-2xl text-center text-gray-800">
            Upload your profile picture
          </h1>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-72 rounded-2xl border-2 border-pink-600"
            />
          )}
          <input
            type="file"
            accept="image/*"
            className="px-4 py-2 border-2 border-dashed border-pink-600 rounded-lg cursor-pointer"
            onChange={handleFileChange}
          />
          <button
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );

  const handleDeleteAccount = () => {
    setOpenPopup({ open: true, poptitle: "Delete Profile" });
  };

  const handleDeleteProfile = async (deleteProfile) => {
    setLoading(true);
    const { signOut } = clerk;

    try {
      if (deleteProfile) {
        const sessionTime =
          Date.now() - new Date(user.user?.lastSignInAt).getTime();
        if (sessionTime > 5 * 60 * 1000) {
          toast.info(
            "Please sign in again to confirm account deletion for security purposes."
          );
          await signOut();
          setOpenPopup({ open: false, poptitle: "" });
          setLoading(false);
          navigate("/login");
        }
        await user.user.delete();
        navigate("/login");
        toast.success("Account Deleted Successfully");
      }
    } catch (error) {
      console.log("Failed to delete Profile: ", error);
      toast.error("Failed to delete Profile!!!");
    } finally {
      setOpenPopup({ open: false, poptitle: "" });
      setLoading(false);
    }
  };

  const ProfileDleteContent = () => (
    <div>
      {loading ? (
        <DotLoading />
      ) : (
        <div>
          <p className="font-bold text-2xl text-center text-gray-800">
            Are you sure you want to delete your profile?
          </p>

          <div className="flex mt-10 justify-center gap-10">
            <button
              className="bg-red-600 px-4 py-2 text-white font-semibold"
              onClick={() => handleDeleteProfile(true)}
            >
              I'm Sure 😢
            </button>
            <button
              className="bg-pink-600 px-4 py-2 text-white font-semibold"
              onClick={() => handleDeleteProfile(false)}
            >
              No Accidently Clicked 😅
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const handleLogout = () => {
    setOpenPopup({ open: true, poptitle: "Logout" });
  };

  const handleLogoutProfile = async (logoutProfile) => {
    setLoading(true);
    const { signOut } = clerk;

    try {
      if (logoutProfile) {
        await signOut();
        toast.success("Logout Successfull!!!");
      }
    } catch (error) {
      console.log("Failed to logout: ", error);
      toast.error("Failed to logout!!!");
    } finally {
      setLoading(false);
      setOpenPopup({ open: false, poptitle: "" });
    }
  };

  const ProfileLogoutContent = () => (
    <div>
      {loading ? (
        <DotLoading />
      ) : (
        <div>
          <p className="font-bold text-2xl text-center text-gray-800">
            Are you sure you want to logout your profile?
          </p>

          <div className="flex mt-10 justify-center gap-10">
            <button
              className="bg-red-600 px-4 py-2 text-white font-semibold"
              onClick={() => handleLogoutProfile(true)}
            >
              I'm Sure 👍
            </button>
            <button
              className="bg-pink-600 px-4 py-2 text-white font-semibold"
              onClick={() => handleLogoutProfile(false)}
            >
              No Accidently Clicked 😅
            </button>
          </div>
        </div>
      )}
    </div>
  );

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

      <Popup
        title={openPopup.poptitle}
        children={
          openPopup.poptitle == "Edit Profile" ? (
            <ProfileEditContent />
          ) : openPopup.poptitle == "Delete Profile" ? (
            <ProfileDleteContent />
          ) : (
            <ProfileLogoutContent />
          )
        }
        open={openPopup.open}
        setOpen={setOpenPopup}
      />

      <div className="px-[5%] my-10">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <div className="flex flex-col w-fit">
            <div className="border-2 rounded-full p-1 border-pink-600">
              <img
                src={user.user?.imageUrl}
                alt="Profile"
                className="w-72 h-72 rounded-full"
              />
            </div>
            <button
              onClick={handleProfileEdit}
              className="border-2 border-pink-600 rounded-sm w-fit px-4 py-2 flex justify-between items-center gap-2 text-xs font-semibold self-center relative -top-4 bg-white"
            >
              <FaPencilAlt />
              Edit
            </button>
          </div>

          <div className="md:flex-1 flex flex-col gap-4 md:p-5 md:ml-10 w-full md:w-fit">
            <label htmlFor="fullName" className="flex flex-col gap-1">
              <span className="text-2xl font-semibold">Full Name</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled
                className="p-2 border-2 rounded-sm"
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-1">
              <span className="text-2xl font-semibold">Email</span>
              <input
                type="text"
                value={user.user?.emailAddresses?.[0]?.emailAddress || ""}
                disabled
                className="p-2 border-2 rounded-sm"
              />
            </label>
            <div className="flex justify-center md:justify-end">
              <button
                className="px-6 py-2 bg-red-600 text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white hidden">
                Update
              </button>
            </div>
          </div>
        </div>

        <div className="md:px-[10%] mt-10">
          <div className="p-10 rounded-2xl w-full bg-red-600">
            <p className="text-2xl md:text-3xl text-white font-semibold mb-5">
              Danger Zone
            </p>
            <p className="text-base md:text-xl text-white">
              Click{" "}
              <span
                className="text-blue-700 underline font-semibold cursor-pointer"
                onClick={handleDeleteAccount}
              >
                here
              </span>{" "}
              to delete your profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

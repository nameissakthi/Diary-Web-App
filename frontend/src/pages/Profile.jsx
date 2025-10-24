import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { DiaryContext } from "../context/DiaryContext";
import { Link } from "react-router-dom";

import { FaPencilAlt } from "react-icons/fa";
import Popup from "../components/Popup";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useContext(DiaryContext);

  const [openPopup, setOpenPopup] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  const [fullName, setFullName] = useState(user.user.fullName)

  const handleProfileEdit = () => {
    setOpenPopup(true);
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

    setUploading(true);

    try {
      await user.user.setProfileImage({ file: profilePic });
      toast.success("Profile Picture Updated Successfully!!!");
    } catch (error) {
      console.log("Failed to upload image : ", error);
      toast.error("Failed to upload image!!!");
    } finally {
      setUploading(false);
      setOpenPopup(false);
      setPreview(null);
      setProfilePic(null);
    }
  };

  const ProfileEditContent = () => (
    <div>
      {uploading ? (
        <Loading className={"w-full"} />
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

  console.log(user)

  return (
    <div>
      <Popup
        title={"Edit Profile"}
        children={<ProfileEditContent />}
        open={openPopup}
        setOpen={setOpenPopup}
      />
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
                {user.user != undefined && user.user.firstName}
              </p>
              <img
                src={user.user.imageUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </Link>
          </div>
        }
      />

      <div className="px-[5%] my-10">
        <div className="flex justify-between">
          <div className="flex flex-col w-fit">
            <div className="border-2 rounded-full p-1 border-pink-600">
              <img
                src={user.user.imageUrl}
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

          <div className="flex-1 flex flex-col gap-4 p-5 ml-10">
            <label htmlFor="fullName" className="flex flex-col gap-1">
              <span className="text-2xl font-semibold">Full Name</span>
              <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)} disabled className="p-2 border-2 rounded-sm" />
            </label>
            <label htmlFor="email" className="flex flex-col gap-1">
              <span className="text-2xl font-semibold">Email</span>
              <input type="text" value={user.user.emailAddresses[0].emailAddress} disabled className="p-2 border-2 rounded-sm" />
            </label>
            <div className="flex justify-end hidden">
              <button className="px-6 py-2 bg-blue-600 text-white">Update</button>
            </div>
          </div>
        </div>

        <div className="px-[10%] mt-10 hidden">
          <div className="p-10 rounded-2xl w-full bg-red-600">
            <p className="text-3xl text-white font-semibold mb-5">Danger Zone</p>
            <p className="text-xl text-white">Click <a href="http://" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">here</a> to delete your profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

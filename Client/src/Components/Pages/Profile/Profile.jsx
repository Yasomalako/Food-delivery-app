import "./Profile.css";
import React from "react";

const Profile = () => {

  return (
    <div className=" h-screen flex justify-center items-center" >
      <div className="hover:scale-125 transition-500 bg-white rounded-xl shadow-2xl p-10 flex flex-col items-center">
        <div className="relative">
          <div className="activeStatus h-4 w-4 bg-green-500 absolute top-1 right-1 rounded-full ring-white ring-4"></div>
          <img alt="avatar" className="h-25 ring-2 ring-offset-2 cursor-pointer rounded-full ring-white " />
        </div>
        <div className="hover:scale-125 transition-all duration-500 bg-white ring-4">yaso malako</div>
        <div className="relative">developer at google  </div>

        <div className="stats flex justify-between items-center my-6 text-sm">
          <div className="stats-sub flex flex-col items-center font-semibold mr-4 ">
            <div className="stat-num text-indigo-500 font-bold text-md">172</div>
            <div className="stat-type text-indigo-400 text-xs">Posts</div>
          </div>
          <div className="stats-sub flex flex-col items-center font-semibold mr-4">
            <div className="stat-num text-indigo-500 font-bold  text-md">3.2K</div>
            <div className="stat-type text-indigo-400 text-xs">FOLLOWERS</div>
          </div>
          <div className="stats-sub flex flex-col items-center font-semibold">
            <div className="stat-num text-indigo-500 font-bold">27</div>
            <div className="stat-type text-indigo-400">FOLLOWING</div>
          </div>


        </div>
        <div className="actions mt-4 flex justify-center items-center">
          <div> <button className="follow focus:ring-2 ring-offset-2 mr-4 bg-indigo-500 text-white p-2 px-4 rounded-md">follow</button></div>
          <div> <button className="msg focus:ring-2 ring-offset-2 ring-pink-300 bg-pink-600 text-white p-2 px-4 rounded-md">Message</button></div>
        </div>
      </div>
    </div>
  );
};

export default Profile

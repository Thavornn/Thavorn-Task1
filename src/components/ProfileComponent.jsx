import React from "react";

const ProfileComponent = () => {
  return (
    <div className="flex gap-5 items-center bg-gray-200 p-2 rounded-lg">
      <img
        className="rounded-full w-12"
        src="https://i.pinimg.com/736x/fb/68/90/fb6890bb57f9724c93571108d082ecfe.jpg"
        alt=""
      />
      <div className="flex flex-col">
        <h6 className=" text-emerald-600 font-bold">Monster</h6>
        <p className="text-sm text-gray-500">
          Either being happy or sad you decide.
        </p>
      </div>
    </div>
  );
};

export default ProfileComponent;

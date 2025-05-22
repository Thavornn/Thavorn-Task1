import React from "react";

const ProfileComponent = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-2  sm:gap-4 bg-[#F6F6F6] p-2 sm:p-3 rounded-lg">
        <img
          className="rounded-full w-10 md:w-12 2xl:w-14"
          src="https://i.pinimg.com/736x/fb/68/90/fb6890bb57f9724c93571108d082ecfe.jpg"
          alt=""
        />
        <div className="flex flex-col">
          <h6 className="text-green-custom text-sm md:text-base font-medium">
            Monster
          </h6>
          <p className="text-blue-custom text-xs md:text-sm">
            Either being happy or sad you decide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;

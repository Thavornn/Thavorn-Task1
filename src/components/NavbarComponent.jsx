import React from "react";

const NavbarComponent = () => {
  return (
    <div className="w-[84%] mx-auto mb-10">
      <div className=" flex justify-between gap-30 items-center p-5">
        <div>
          <nav className="flex mt-3 ">
            <div className="text-[32px] font-[600]">
              <span className="text-blue-custom">MY</span>
              <span className="text-red-custom">GAL</span>
              <span className="text-blue-custom">LER</span>
              <span className="text-yellow-custom">Y</span>
            </div>
          </nav>
        </div>

        {/* title component */}

        <div className="flex text-blue-custom text-[20px] gap-20  font-medium mt-5">
          <h3>Romantic Dates</h3>
          <h3>About Author</h3>
        </div>

        {/* profile component */}
        <div className="flex gap-5 items-center bg-[#F6F6F6] p-2 rounded-lg">
          <img
            className="rounded-full w-12"
            src="https://i.pinimg.com/736x/fb/68/90/fb6890bb57f9724c93571108d082ecfe.jpg"
            alt=""
          />
          <div className="flex flex-col">
            <h6 className=" text-green-custom text-[16px] font-[500]">
              Monster
            </h6>
            <p className="text-[14px] text-blue-custom">
              Either being happy or sad you decide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;

import React from "react";

const LoginComponent = () => {
  return (
    <div className="flex justify-center items-center mt-25 ">
      <div className="flex justify-center mb-29">
        <div className=" w-[1170px] h-[679px] flex justify-evenly   rounded-4xl shadow-[0_4px_16px_rgba(0,0,0,0.15),_0_-1px_16px_rgba(0,0,0,0.15)] overflow-hidden">
          {/* Form Section */}
          <div className="w-1/2 p-8">
            <h2 className="text-3xl font-bold text-blue-custom mb-10 pt-[110px] ml-25">
              Welcome to <span className="text-blue-custom">MY</span>
              <span className="text-red-custom">GAL</span>
              <span className="text-blue-custom">LER</span>
              <span className="text-yellow-custom">Y</span>
            </h2>
            <form className="space-y-12">
              <div>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
                      stroke="#94A3B8"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
                      stroke="#94A3B8"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Please type your email"
                  className="w-[544px] p-2  bg-[#F8FAFC] text-[#94A3B880] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.79 14.93a7.575 7.575 0 0 1-7.6 1.87l-4.71 4.7c-.34.35-1.01.56-1.49.49l-2.18-.3c-.72-.1-1.39-.78-1.5-1.5l-.3-2.18c-.07-.48.16-1.15.49-1.49l4.7-4.7c-.8-2.6-.18-5.55 1.88-7.6 2.95-2.95 7.74-2.95 10.7 0 2.96 2.95 2.96 7.76.01 10.71ZM6.89 17.49l2.3 2.3"
                      stroke="#94a3b8"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      stroke="#94a3b8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>

                  <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  placeholder="Please type your password"
                  className="w-[544px] p-2  bg-[#F8FAFC] text-[#94A3B880] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <hr className="my-10 text-[#94A3B8]  mb-12" />
              <button
                type="submit"
                className="w-full bg-[#009990] text-white p-2 rounded-lg hover:bg-teal-600 transition"
              >
                Login
              </button>
            </form>
            <p className="text-end text-[#183B4E] font-normal mt-4">
              Haven’t had an account yet?
              <a
                href="/login"
                className="text-[#309898] font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
          {/* Image Section */}
          <div className="">
            <img
              className="w-[499px] h-[619px] mt-7  "
              src="/images/registerpic.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

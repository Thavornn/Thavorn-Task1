import React from "react";

const ViewProfileComponent = () => {
  return (
    <div className="ml-50">
      <div className="flex w-[1409px] justify-between p-4 mt-10 bg-white rounded-t-3xl shadow-lg border border-gray-200">
        <div>
          {" "}
          <h2 className="text-2xl font-medium text-[#27445D]">
            Personal Information{" "}
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="#94a3b8"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65L2.5 12l3.35 3.35"
            ></path>
          </svg>
          <a href="#" className="text-[#94A3B8] text-sm hover:underline">
            Logout{" "}
          </a>
        </div>
      </div>

      <div className="h-[542px] w-[1409px]   border border-gray-200 bg-white">
        <div>
          {" "}
          <div className="w-[212px] m-10 h-[212px] flex-shrink-0">
            <img
              src="/images/profile.png"
              alt="Profile"
              width={212}
              height={300}
              className="rounded-full object-cover border border-gray-300"
            />
          </div>
          <div>
            {" "}
            <div className="grid grid-cols-2 gap-6 gap-y-10 ml-7 mt-10">
              <div>
                <div className="flex gap-1">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 0 1 .16 8.87ZM7.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0Z"
                      stroke="#94A3B8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  {/* <Profile size="24" color="#94a3b8" /> */}

                  <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                    Full Name
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Black Monster"
                  className="w-[654.5px] p-2 bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <div className="flex gap-1">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.12 12.78a.963.963 0 0 0-.24 0 3.27 3.27 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 0 1 .12 6.55ZM18.74 19.38A9.934 9.934 0 0 1 12 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58Z"
                      stroke="#94A3B8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                      stroke="#94A3B8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                    Gender{" "}
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Female"
                  className="w-[654.5px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                    Email Address
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="monster@gmail.com"
                  className="w-[654.5px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <div className="flex gap-1">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                      stroke="#94a3b8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7 8.89c3.15-1.57 6.85-1.57 10 0M12 16.3V7.93"
                      stroke="#94a3b8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                    Bio (optional)
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Either being happy or sad you decide."
                  className="w-[654.5px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 w-[1409px] p-3 mb-16 bg-white rounded-b-3xl shadow-lg border border-gray-200">
        <button className=" bg-white text-[#183B4E] border-2 border-[#94A3B8] px-8 py-2 rounded-xl hover:bg-[#F8FAFC] transition duration-200">
          cancel
        </button>
        <button className=" bg-[#183B4E] text-white px-6 py-2 rounded-xl hover:bg-[#0f4c75] transition duration-200">
          Save Change
        </button>
      </div>
    </div>
  );
};

export default ViewProfileComponent;

import React from "react";
import ProfileComponent from "./ProfileComponent";

const NavbarComponent = () => {
  return (
    <div className="mb-10 text-sm md:text-lg lg:text-xl">
      <div className=" flex   items-center justify-between  lg:mx-auto p-4 ">
        {/* max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 */}
        <div>
          <nav className="flex mt-3 ">
            <div className="text-3xl font-semibold">
              <span className="text-blue-custom">MY</span>
              <span className="text-red-custom">GAL</span>
              <span className="text-blue-custom">LER</span>
              <span className="text-yellow-custom">Y</span>
            </div>
          </nav>
        </div>

        {/* title component */}
        <div className="flex items-center  space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="items-center text-[#183B4E] justify-between hidden w-full md:flex md:w-auto "
            id="navbar-user"
          >
            <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded-sm md:bg-transparent md:p-0 "
                  aria-current="page"
                >
                  Romantic Dates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Author
                </a>
              </li>
              <li>
                <ProfileComponent />
              </li>
            </ul>
          </div>

          {/* <div className="flex text-blue-custom text-xl gap-20  font-medium mt-5">
            <h3>Romantic Dates</h3>
            <h3>About Author</h3>
          </div> */}

          {/* profile component */}
          {/* <div className="px-2 md:px-4 lg:px-6 sm:hidden">
            <ProfileComponent />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;

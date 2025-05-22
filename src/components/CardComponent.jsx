import React from "react";

const CardComponent = () => {
  return (
    <div className=" w-[80%] md:p-10 md:w-[50%]     lg:w-[30%] lg:p-0  2xl:w-[23%] 2xl:p-0">
      <div>
        <div className="rounded-4xl">
          <div>
            <img
              className="object-cover w-full h-[263px] rounded-[30px] "
              src="/images/city.png"
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-between mt-5">
              <div className="text-xl font-medium flex text-green-custom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z"
                    fill="#309898"
                  ></path>
                </svg>
                Switzerland
              </div>
              <div className="text-green-custom flex gap-1  text-xs">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                      stroke="#309898"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
                      stroke="#309898"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="mt-1 font-normal text-xs">Jan 26, 2025</div>
              </div>
            </div>
            <p className="mt-5">
              This picture was taken in Europe. I went there last month with my
              special person. It was such a romantic date.
            </p>
            <p>
              <a
                className="text-dark-red-custom flex  gap-x-2 justify-end  mt-5 "
                href="#"
              >
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

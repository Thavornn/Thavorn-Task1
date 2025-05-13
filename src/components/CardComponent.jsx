import React from "react";

const CardComponent = () => {
  return (
    <div className="items-center ">
      <div>
        {/* <div className="text-3xl mt-10 font-bold p-10 flex justify-baseline gap-2">
          <div>
            <span>
              <img src="/images/heart.png" width={34} alt="" />
            </span>
          </div>
          <div>
            <span className="text-[#E55050]"> Romantic </span>
            <span className="text-[#309898]">Memories</span>
          </div>
        </div> */}

        <div className="rounded-[30px] p-6">
          <div>
            <img
              className="object-cover w-full h-[263px] rounded-[30px] "
              src="/images/city.png"
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-between mt-5">
              <div className="text-[20px] font-[500] text-green-custom">
                Switzerland
              </div>
              <div className="text-green-custom flex gap-1  text-[12px]">
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
                <div className="mt-1 font-[400] text-[12px]">Jan 26, 2025</div>
              </div>
            </div>
            <p className="mt-5">
              This picture was taken in Europe. I went there last month with my
              special person. It was such a romantic date.
            </p>
            <p>
              <a
                className="text-darkRed-custom flex  gap-x-2 justify-end  mt-5 "
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

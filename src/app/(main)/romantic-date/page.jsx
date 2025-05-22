import CardComponent from "@/components/CardComponent";
import TableComponent from "@/components/TableComponent";
import React from "react";

const page = () => {
  return (
    <div className="w-[84%] mx-auto mb-10 ">
      <div className=" flex justify-between items-center mt-2 mb-2">
        <div className="flex gap- mb-10">
          <div className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                stroke="#309898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-4"
                stroke="#309898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16.12 5.11c-.33-1.04.06-2.33 1.14-2.68.57-.18 1.28-.03 1.68.52.38-.57 1.11-.71 1.68-.52 1.09.35 1.48 1.64 1.15 2.68-.52 1.64-2.32 2.5-2.82 2.5-.51 0-2.3-.84-2.83-2.5ZM2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"
                stroke="#309898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>

          <div className="text-[32px] font-[500] ">
            <span className="text-green-custom ">MY </span>
            <span className="text-red-custom">Dating </span>
            <span className="text-green-custom">Schedule</span>
          </div>
        </div>
        <div>
          <button className="p-3  px-10 bg-[#309898] text-xl font-medium text-white rounded-2xl">
            New Memory
          </button>
        </div>
      </div>
      <div>
        <TableComponent />
      </div>
    </div>
  );
};

export default page;

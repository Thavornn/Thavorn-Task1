import React from "react";
const ImgBoardComponent = () => {
  return (
    <div className="lg:flex ml-50 gap-10 w-full md:hidden ">
      <div className="">
        <img
          src="./images/pic1.png"
          alt="Gallery 1"
          className="rounded-2xl  md:w-[300px] md:h-[324px] object-cover lg:h-[525px] lg:w-[335px] xl:h-sc xl:w-80 col-span-1 row-span-3 w-[335px]   h-[525px]"
        />
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-10">
          <img
            src="./images/pic2.png"
            alt="Gallery 2"
            className="rounded-2xl col-span-1  object-cover w-[298px] h-[175px]"
          />
          <img
            src="/images/pic3.png"
            alt="Gallery 3"
            className="rounded-2xl col-span-1 object-cover w-[374px] h-[175px]"
          />
        </div>

        <div>
          {" "}
          <img
            src="/images/pic5.png"
            alt="Gallery 5"
            className="rounded-2xl col-span-1 object-cover row-span-2 w-[719px]   h-[310px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <img
            src="/images/pic4.png"
            alt="Gallery 4"
            className="rounded-2xl col-span-1 object-cover row-span-2  w-[422px]   h-[324px]"
          />
        </div>
        <div>
          <img
            src="/images/pic6.png"
            alt="Gallery 6"
            className="rounded-2xl col-span-1 object-cover  w-[422px]   h-[161px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgBoardComponent;

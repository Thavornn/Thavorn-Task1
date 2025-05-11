import React from "react";

const Section1Component = () => {
  return (
    <div className="w-[74%] mx-auto m-0  grid grid-cols-4 gap-12 p-8">
      <img
        src="/pic1.png"
        alt="Gallery 1"
        className="rounded-lg col-span-1 object-cover row-span-3 w-[335px]   h-[580px]"
      />
      <img
        src="pic2.png"
        alt="Gallery 2"
        className="rounded-lg col-span-1  object-cover w-[298px] h-[175px]"
      />
      <img
        src="pic3.png"
        alt="Gallery 3"
        className="rounded-lg col-span-1 object-cover w-[374px] h-[175px]"
      />
      <img
        src="pic4.png"
        alt="Gallery 4"
        className="rounded-lg col-span-1 object-cover row-span-2  w-[550px]   h-[324px]"
      />
      <img
        src="pic5.png"
        alt="Gallery 5"
        className="rounded-lg col-span-2 object-cover row-span-2 w-[719px]   h-[350px]"
      />
      <img
        src="pic6.png"
        alt="Gallery 6"
        className="rounded-lg col-span-1 object-cover  w-[422px]   h-[175px]"
      />
    </div>
  );
};

export default Section1Component;

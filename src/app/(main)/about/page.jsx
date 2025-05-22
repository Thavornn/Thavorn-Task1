import CardTextComponent from "@/components/CardTextComponent";
import LeftPictureCardComponent from "@/components/LeftPictureCardComponent";
import RightPictureCardComponent from "@/components/RightPictureCardcomponent";
import RightPictureCardComponenttwo from "@/components/RightPictureCardComponenttwo";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col  gap-10">
      <RightPictureCardComponent />

      <LeftPictureCardComponent />

      <RightPictureCardComponenttwo />
    </div>
  );
};

export default page;

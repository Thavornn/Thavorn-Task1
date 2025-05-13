import CardComponent from "@/components/CardComponent";
import ImgBoardComponent from "@/components/ImgBoardComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-[84%] mx-auto mb-10">
        <ImgBoardComponent />

        <div>
          <div className="text-3xl mt-10 font-bold p-10 flex justify-baseline gap-2">
            <div>
              <span>
                <img src="/images/heart.png" width={34} alt="" />
              </span>
            </div>
            <div className="font-[500]">
              <span className="text-red-custom"> Romantic </span>
              <span className="text-green-custom">Memories</span>
            </div>
          </div>
          {/* <div className="grid grid-cols-4 gap-10">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div className="grid grid-cols-4 gap-10">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div> */}

          <div className="flex">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div className="flex">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </div>
      </div>
    </>
  );
}

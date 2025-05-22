import CardComponent from "@/components/CardComponent";
import ImgBoardComponent from "@/components/ImgBoardComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <ImgBoardComponent />

        <div>
          <div className="text-3xl mt-10 font-bold md:p-10 flex lg:px-0 justify-baseline gap-2">
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

          <div className="grid grid-cols-1 px-6 md:px-0 md:flex md:flex-wrap w-full md:justify-between space-y-8 ">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          {/* <div className="flex">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div> */}
        </div>
      </div>
    </>
  );
}

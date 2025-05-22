import React from "react";

const RightPictureCardComponenttwo = () => {
  return (
    <div className="bg-gray-100 mb-5">
      <a
        href="#"
        className="flex text-justify items-center ml-44  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover  w-[699px] h-[400px] rounded-lg "
          src="/images/aboutfirst.png"
          alt=""
        />
        <div className="flex mt-10  flex-col justify-between w-full p-15 leading-normal">
          <h5 className="mb-2 text-2xl text-[#FF9F00] font-bold tracking-tight  dark:text-white">
            Favorite Quote and Philosophy
          </h5>
          <p className="mb-3 font-normal w-[807px] h-[382px]    text-base text-[#183B4E] dark:text-gray-400">
            <span className="font-bold text-[#183B4E]">
              “Stay curious, keep building, and never stop evolving.”
            </span>{" "}
            <br />
            This isn’t just a quote I like—it's a personal mantra I live by.
            "Stay curious" reminds me that the world is an infinite classroom.
            There’s always something new to learn, always another perspective
            waiting to challenge you. Curiosity is what fuels innovation,
            empathy, and self-awareness. It keeps me humble and inspired.
            Whether I'm learning a new programming language or questioning
            long-held beliefs, curiosity is the compass that guides my growth.
            "Keep building" is a call to action. It reminds me to create—whether
            that’s building a product, shaping a habit, designing an experience,
            or nurturing a community. Creation is the ultimate form of
            contribution. Even when the results aren’t perfect, the act of
            building something meaningful—something that didn’t exist before—is
            always worthwhile. And finally, "never stop evolving" speaks to my
            belief that we’re all a work in progress. I don’t aim for
            perfection; I aim for progress. That means embracing failure, being
            open to feedback, and letting go of what no longer serves me. It
            means checking in with myself often and asking: “Is this still
            aligned with who I want to become?” I believe that life is both an
            artwork and a process. You don’t have to have it all figured out.
            You just have to be brave enough to keep exploring, keep adjusting,
            and keep showing up with an open heart and a clear mind. These words
            ground me when I feel lost, energize me when I feel stuck, and
            remind me that growth is a lifelong journey—not a destination.
          </p>
        </div>
      </a>
    </div>
  );
};

export default RightPictureCardComponenttwo;

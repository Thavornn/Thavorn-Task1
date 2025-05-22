import React from "react";

const RightPictureCardComponent = () => {
  return (
    <div className="bg-gray-100">
      <a
        href="#"
        className="flex text-justify items-center ml-44  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover  w-[699px] h-[400px] rounded-lg "
          src="/images/aboutfirst.png"
          alt=""
        />
        <div className="flex flex-col justify-between w-full p-15 leading-normal">
          <h5 className="mb-2 text-2xl text-[#309898] font-bold tracking-tight  dark:text-white">
            Personal Background
          </h5>
          <p className="mb-3 font-normal w-[900px] h-[400px]    text-base text-[#183B4E] dark:text-gray-400">
            My name is Monster, and I come from a background shaped byabout
            author curiosity, creativity, and persistence. I was born in a
            space, a place that taught me the value of community, discipline,
            and growth through everyday experiences. Growing up, I was always
            the kind of person who asked "why" and "how." Whether it was taking
            apart an old radio to see how it worked, or sketching random ideas
            in a notebook, I was endlessly fascinated by how the world fit
            together. My educational journey has been just as varied as my
            interests. I pursued [your educational field or degree], which gave
            me a strong foundation in critical thinking and problem-solving.
            However, learning never stopped at the classroom door for me. I
            constantly found myself exploring things outside the
            curriculum—tinkering with code, reading philosophy, dabbling in art,
            and absorbing knowledge from wherever I could find it. I believe
            that a well-rounded mind comes from being open to different
            disciplines and letting them intersect naturally. <br /> Over the
            years, I’ve embraced challenges as growth opportunities. Whether I
            was moving to a new city, starting a new project, or stepping into a
            leadership role, I’ve always believed that getting uncomfortable is
            a prerequisite for becoming more capable. My personal
            values—authenticity, resilience, and a desire to contribute
            meaningfully—guide every step I take. Even though I've learned to
            work independently, I genuinely enjoy collaboration. I find great
            joy in connecting with people who think differently, who inspire me
            to expand my understanding and see the world through different
            lenses. I see myself not just as a "specialist" in one area, but as
            someone who thrives in the spaces where different fields meet.{" "}
            <br /> To me, success isn't just about personal achievement—it's
            about leaving something better than you found it. Whether that's
            building helpful tools, telling stories that matter, or simply being
            kind in moments that count, I aim to live with intention and leave a
            lasting impact.
          </p>
        </div>
      </a>
    </div>
  );
};

export default RightPictureCardComponent;

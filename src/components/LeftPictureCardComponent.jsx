import React from "react";

const LeftPictureCardComponent = () => {
  return (
    <div className="bg-gray-100">
      <a
        href="#"
        className="flex text-justify items-center ml-30 mr-50  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col justify-between w-full p-15 leading-normal">
          <h5 className="mb-2 text-2xl text-[#E55050] font-bold tracking-tight  dark:text-white">
            Lifestyle and Values
          </h5>
          <p className="mb-3 font-normal w-[900px] h-[400px]    text-base text-[#183B4E] dark:text-gray-400">
            My lifestyle is built around simplicity, purpose, and mindful
            growth. In a world that moves fast and demands more, I’ve chosen to
            slow down, focus on essentials, and design a life that reflects what
            truly matters to me. I strive to live intentionally—prioritizing
            quality over quantity in everything from the items I own to the
            relationships I nurture. Each day begins with a grounding routine. I
            usually start my morning with a quiet moment—journaling, reading, or
            meditating before the day’s responsibilities unfold. That little
            space of stillness helps me set the tone, aligning my thoughts and
            energy toward the things that matter most. I value deep work, so I
            often time-block my day to stay focused, yet I leave room for
            spontaneity and inspiration to strike. Outside of work, I’m a
            passionate learner and hobby explorer. I rotate between activities
            like hiking, painting, reading nonfiction, learning new languages,
            and experimenting with productivity tools. I don’t believe in having
            a "niche life"; instead, I believe in being multidimensional—feeding
            both the analytical and creative sides of who I am. I'm also big on
            minimalism—not just as a visual aesthetic, but as a way of being. I
            try to be conscious of what I bring into my life, whether it’s
            digital clutter, material possessions, or even the types of
            conversations I have. That simplicity allows me to focus on depth
            rather than distraction. Health and well-being are priorities too. I
            eat mostly plant-based meals, move regularly (even if it’s just a
            walk in the sun), and make time to recharge. I've learned that
            burnout doesn't come from doing too much, but from doing too little
            of what lights you up. So I try to create space for joy, rest, and
            reflection. Ultimately, I want to live in a way that aligns with who
            I am—not just who the world expects me to be. That means listening
            to my own voice, staying curious, and continuing to evolve without
            losing my sense of self.
          </p>
        </div>
        <img
          className="object-cover  w-[699px] h-[400px] rounded-lg "
          src="/images/aboutfirst.png"
          alt=""
        />
      </a>
    </div>
  );
};

export default LeftPictureCardComponent;

import React from "react";

const CardTextComponent = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="w-48 h-48 bg-blue-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div>

        <div className="md:w-2/3 p-4">
          <h2 className="text-xl font-bold mb-4">Personal Background</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            My name is Monster, and I come from a background shaped by
            curiosity, creativity, and persistence. I was born in a space, a
            place that taught me the value of community, discipline, and growth
            through everyday experiences. Growing up, I was always the kind of
            person who asked “why” and “how.” Whether it was taking apart an old
            radio to see how it worked, or sketching random ideas in a notebook,
            I was endlessly fascinated by how the world fit together.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            My educational journey has been just as varied as my interests, I
            pursued [your educational field or degree], which gave me a strong
            foundation in critical thinking and problem solving. However,
            learning never stopped in the classroom for me. I constantly found
            myself exploring outside the curriculum—tinkering with code, reading
            philosophy, dabbling in art, and absorbing knowledge from wherever I
            could find it. I believe that a well-rounded mind comes from being
            open to different disciplines and letting them intersect naturally.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            Over the years, I’ve embraced challenges as growth opportunities.
            Whether it was moving to a new city, starting a new project, or
            stepping into a leadership role, I’ve always believed that getting
            uncomfortable is a prerequisite for learning more. My capability,
            personal values—authenticity, resilience, and a desire to contribute
            meaningfully—guide every step I take.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            Even though I’ve learned to work independently, I genuinely enjoy
            collaboration. I find great joy in connecting with people who think
            differently, who inspire me to expand my understanding and see the
            world through different lenses. I see myself not just as a
            “specialist” in one area, but as someone who thrives in the spaces
            where different fields meet.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            On a more personal achievement—it’s about leaving somewhere better
            than you found it. Whether that’s building helpful tools, telling
            stories that matter, or simply being present for the moments that
            count, I aim to live with intention and leave a lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTextComponent;

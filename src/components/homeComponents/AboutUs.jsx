import { Star } from "lucide-react";
import React from "react";

const AboutUs = () => {
  return (
    <section className="px-20 py-24 bg-blue-500 text-white">
      <div>
        <h2 className="text-5xl font-bold text-center mb-16">About Us</h2>
      </div>

      <div className="w-3/5 mx-auto mb-16">
        <p className="text-2xl italic text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          totam tempore quis odit pariatur ipsam accusantium alias nulla.
          Asperiores at illo minima laborum? Mollitia exercitationem quo dolorum
          architecto obcaecati! Doloribus!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 w-1/2 mx-auto">
        <div className="border-r">
          <p className="text-3xl font-semibold text-center mb-2">200+</p>
          <p className="text-lg italic text-center">clients served</p>
        </div>

        <div className="border-r">
          <p className="text-3xl font-semibold text-center mb-2">10+</p>
          <p className="text-lg italic text-center">countries visited</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-center mb-2 flex items-center justify-center">
            4.5 <Star />
          </p>
          <p className="text-lg italic text-center">ratings achieved</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

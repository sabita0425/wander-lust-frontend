import React from "react";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  return (
    <section className="relative">
      {/* for img */}
      <div className="h-[89.5dvh] overflow-hidden flex items-center">
        <img
          src="/heroImage.avif"
          className="w-full"
          alt="WanderLust Hero Image"
        />
      </div>

      {/* overlay */}
      <div className="h-[89dvh] w-full bg-black absolute top-0 opacity-40"></div>
      {/* content */}
      <div className="absolute top-0 h-[89dvh] flex items-center justify-center">
        <div className="w-1/2 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            plan your trip with WanderLust.
          </h1>
          <p className="text-2xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam
            repellat non ab nihil, autem necessitatibus quod incidunt dolorum
            accusamus rerum culpa nesciunt perferendis veritatis facilis
            corporis voluptatibus mollitia exercitationem?
          </p>
          <CustomButton
            text="Register Now"
            link="/register"
            more="bg-red-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

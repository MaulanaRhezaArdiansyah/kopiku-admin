import React from "react";
import Carousel from "./Carousel";

export const Reviews = () => {
  return (
    <section className=" w-full mt-10 max-sm:h-[80vh] md:h-[50vh] lg:h-[80vh] justify-center flex flex-col relative items-center gap-14">
      <section className="w-1/3 max-sm:w-[80%] max-sm:h-[40%] sm:w-2/3 md:w-2/3 lg:w-1/3 flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-4xl text-[#0B132A] font-bold text-center leading-snug">
          Loved by Thousands of Happy Customer
        </h1>
        <p className="text-[#4F5665] text-center leading-snug">
          These are the stories of our customers who have visited us with great
          pleasure.
        </p>
      </section>
      <Carousel />
    </section>
  );
};

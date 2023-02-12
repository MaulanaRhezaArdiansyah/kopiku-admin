import React from "react";
import { Link } from "react-router-dom";
import heroBackground from "../../../assets/img/coffe-hero.webp";

export const Hero = () => {
  return (
    <section
      className="hero-section bg-emerald-500 w-full h-[40rem] pl-20 pt-20 max-sm:pl-5 max-sm:pt-24 sm:pt-5 md:pt-10 md:max-lg:pt-40 md:max-lg:h-[80vh] lg:pt-40 lg:h-[120vh] xl:bg-no-repeat bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="w-1/2 max-sm:w-full flex flex-col gap-8 max-sm:gap-3 h-full max-sm:justify-center">
        <h1 className="text-[#ffffff] font-black text-[50px] max-sm:text-[40px] sm:text-[40px] md:text-[40px] lg:text-[50px]">
          Start Your Day with Coffee and Good Meals
        </h1>
        <p className="text-[#ffffff] font-bold text-[20px] max-sm:mb-6">
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <Link to="/product">
          <button className="text-[#6A4029] font-bold bg-amber-400 px-24 max-sm:px-10 sm:px-5 md:px-5 lg:px-5 h-16 rounded-xl w-1/2 sm:w-3/4 md:w-3/4 lg:w-1/2">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

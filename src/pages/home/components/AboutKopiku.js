import React from "react";

export const AboutKopiku = () => {
  const aboutTitle = "We Provide Good Coffee and Healthy Meals";
  const aboutCaption =
    "You can explore the menu that we provide with fun and have their own taste and make your day better.";
  return (
    <section
      id="about"
      className="flex w-full h-[80vh] sm:h-[200vh] md:h-[100vh] sm:flex-col sm:pt-5 md:flex-col md:pt-20 lg:flex-row lg:h-[100vh] justify-center items-center px-20 max-sm:flex-col max-sm:mb-10 max-sm:h-[150vh] max-sm:px-5"
    >
      <div className="h-full items-center justify-center flex max-sm:w-full max-sm:h-[30%] md:h-[40%] lg:h-[70%]">
        <img
          src={require("../../../assets/img/about.webp")}
          alt=""
          width="573px"
          height="457px"
        />
      </div>

      <div className="flex items-center justify-center h-full max-sm:w-full max-sm:h-[50%] md:h-[40%] lg:h-[70%]">
        <div className="w-3/4 h-[80%] flex flex-col gap-y-5 lg:gap-y-3 justify-center max-sm:w-full">
          <h1 className="text-[#0B132A] text-[35px] font-bold max-lg:text-center">
            {aboutTitle}
          </h1>
          <p className="text-[#4F5665] leading-7">{aboutCaption}</p>
          <div className="flex items-center gap-x-2">
            <img
              src={require("../../../assets/img/check.webp")}
              alt="check"
              width="20px"
              height="20px"
            />
            <p className="text-[#4F5665]">High quality beans</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              src={require("../../../assets/img/check.webp")}
              alt="check"
              width="20px"
              height="20px"
            />
            <p className="text-[#4F5665]">
              Healthy meals, you can request the ingredients
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              src={require("../../../assets/img/check.webp")}
              alt="check"
              width="20px"
              height="20px"
            />
            <p className="text-[#4F5665]">
              Chat with our staff to get better experience for ordering
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              src={require("../../../assets/img/check.webp")}
              alt="check"
              width="20px"
              height="20px"
            />
            <p className="text-[#4F5665]">
              Free member card with a minimum purchase of IDR 200.000.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";

export const Maps = () => {
  return (
    <section id="store-maps" className="max-sm:py-10 mt-20 md:py-20 md:mt-40 ">
      <div className="store-maps-container flex flex-col items-center sm:gap-y-10 md:gap-y-14 lg:gap-y-20 max-sm:gap-y-10">
        <div className="flex flex-col justify-center items-center w-1/2 max-sm:w-full sm:w-3/4 md:w-3/4 lg:w-1/2 gap-y-4">
          <h1 className="text-[#0B132A] text-[35px] font-bold text-center w-3/4">
            Visit Our Store in the Spot on the Map Below
          </h1>
          <p className="text-[#4F5665] text-center max-sm:px-10">
            See our store in every city on the spot and spen your good day
            there. See you soon!
          </p>
        </div>
        <div className="img-store-maps sm:px-12 lg:px-20 md:px-12">
          <img src={require("../../../assets/img/maps-dot.webp")} alt="" />
        </div>
      </div>
    </section>
  );
};

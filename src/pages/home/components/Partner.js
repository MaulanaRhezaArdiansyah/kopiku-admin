import React from "react";

export const Partner = () => {
  return (
    <section className="partner w-full mt-10 h-20vh ">
      <h1 className="text-4xl text-[#0B132A] font-bold text-center leading-snug">
        Our Partner
      </h1>
      <img
        src={require("../../../assets/img/partner.webp")}
        alt=""
        className=" w-full px-20 max-sm:px-10 "
      />
    </section>
  );
};

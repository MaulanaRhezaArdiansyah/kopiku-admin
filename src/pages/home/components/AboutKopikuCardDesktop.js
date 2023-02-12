import React from "react";

export const AboutKopikuCardDesktop = () => {
  return (
    <section className="w-full h-[30vh] relative flex justify-center items-center max-sm:hidden sm:max-md:hidden">
      <div className="card-staff bg-white shadow-xl absolute lg:-top-24 md:max-lg:-top-24 flex justify-center items-center h-[30vh] md:max-lg:h-[20vh] w-[80%] md:max-lg:w-[90%] rounded-md">
        <div className="w-1/3 h-2/3 flex justify-center items-center  gap-x-5  border-r-[1px] border-slate-200">
          <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded-full">
            <img
              src={require("../../../assets/img/staff.webp")}
              alt=""
              className=""
            />
          </div>
          <div>
            <p className="font-bold text-2xl text-[#0B132A]">90+</p>
            <p className="text-[#4F5665] text-lg">Staff</p>
          </div>
        </div>
        <div className="w-1/3 h-2/3 flex justify-center items-center gap-x-5  border-r-[1px] border-slate-200">
          <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded-full">
            <img
              src={require("../../../assets/img/location.webp")}
              alt=""
              className=""
            />
          </div>
          <div>
            <p className="font-bold text-2xl text-[#0B132A]">30+</p>
            <p className="text-[#4F5665] text-lg">Stores</p>
          </div>
        </div>
        <div className="w-1/3 h-2/3 flex justify-center items-center gap-x-5">
          <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded-full">
            <img
              src={require("../../../assets/img/love.webp")}
              alt=""
              className=""
            />
          </div>
          <div>
            <p className="font-bold text-2xl text-[#0B132A]">800+</p>
            <p className="text-[#4F5665] text-lg">Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

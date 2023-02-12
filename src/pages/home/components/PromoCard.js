import React from "react";
import { Link } from "react-router-dom";

export const PromoCard = () => {
  return (
    <section className="flex justify-center mt-10 py-10 max-sm:py-10 max-sm:h-[50vh] md:h-[30vh] lg:h-[40vh]">
      <div className="promo-container flex max-sm:flex-col max-sm:p-5 sm:p-5 bg-[#ffffff] shadow-2xl shadow-slate-400 w-2/3 max-sm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-2/3 h-48 max-sm:h-64 rounded-md justify-around items-center">
        <div className="flex flex-col w-2/6 sm:w-3/6 max-sm:w-full gap-y-2">
          <h1 className="text-4xl text-[#0B132A] font-bold">
            Check our promo today!
          </h1>
          <p className="text-base text-[#4F5665]">
            Let's see the deals and pick yours!
          </p>
        </div>
        <div className="flex justify-end">
          <Link to="/product">
            <button className="py-5 px-20 text-lg text-[#6A4029] font-bold cursor-pointer bg-amber-400 rounded-md">
              See promo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

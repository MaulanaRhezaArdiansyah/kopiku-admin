import React from "react";
import { FavProductCard } from "./FavProductCard";

export const FavouriteProduct = () => {
  return (
    <section className="pt-16 max-sm:h-[300vh] md:h-[200vh] md:pt-40 lg:h-[120vh] lg:pt-16">
      <div className="flex flex-col gap-y-14 max-sm:gap-y-20">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h1 className="text-[#0B132A] text-[35px] font-bold text-center">
            Here is People’s Favorite
          </h1>
          <p className="text-[#4F5665] text-center">
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
        </div>
        <FavProductCard />
      </div>
    </section>
  );
};

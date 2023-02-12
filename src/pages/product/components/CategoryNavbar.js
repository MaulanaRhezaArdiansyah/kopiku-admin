import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllDataProducts } from "../../../redux/actions/products";

export const CategoryNavbar = () => {
  const [categ, setCateg] = useState("");
  const [refetchCateg, setRefetchCateg] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDataProducts(`cat=${categ}`));
  }, [refetchCateg, categ]);
  return (
    <div className="flex w-full h-[10%] gap-x-16 justify-center items-center max-sm:overflow-x-scroll max-sm:justify-start max-sm:px-5 max-sm:pt-28">
      {/* <NavLink activeclassname="active"> */}
      <button
        onClick={() => {
          setRefetchCateg(true);
          setCateg("");
        }}
        className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
        activeclassname="active"
      >
        Favorite & Promo
      </button>
      {/* </NavLink> */}
      <button
        onClick={() => {
          setRefetchCateg(true);
          setCateg("coffee");
        }}
        className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
      >
        <NavLink activeclassname="active">Coffee</NavLink>
      </button>
      <button
        onClick={() => {
          setRefetchCateg(true);
          setCateg("non coffee");
        }}
        className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
      >
        <NavLink activeclassname="active">Non Coffee</NavLink>
      </button>
      <button
        onClick={() => {
          setRefetchCateg(true);
          setCateg("foods");
        }}
        className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
      >
        <NavLink activeclassname="active">Foods</NavLink>
      </button>
      <button
        onClick={() => {
          setRefetchCateg(true);
          setCateg("add on");
        }}
        className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
      >
        <NavLink activeclassname="active">Add-on</NavLink>
      </button>
    </div>
  );
};

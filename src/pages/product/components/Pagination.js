import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDataProducts } from "../../../redux/actions/products";

export const Pagination = () => {
  const [pageRedux, setPageRedux] = useState(1);
  const [refetchPage, setRefetchPage] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDataProducts(`page=${pageRedux}`));
  }, [pageRedux, refetchPage]);
  return (
    <div className="flex pb-20 justify-center gap-x-4 ">
      <button
        onClick={() => {
          setRefetchPage(true);
          // setPage(1);
          setPageRedux(1);
        }}
        className="w-4 h-4 bg-slate-500 rounded-full"
      ></button>
      <button
        onClick={() => {
          setRefetchPage(true);
          setPageRedux(2);
        }}
        className="w-4 h-4 bg-slate-500 rounded-full"
      ></button>
      <button
        onClick={() => {
          setRefetchPage(true);
          setPageRedux(3);
        }}
        className="w-4 h-4 bg-slate-500 rounded-full"
      ></button>
      <button
        onClick={() => {
          setRefetchPage(true);
          setPageRedux(4);
        }}
        className="w-4 h-4 bg-slate-500 rounded-full"
      ></button>
    </div>
  );
};

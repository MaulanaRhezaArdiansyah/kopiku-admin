// import { useState } from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllDataProducts } from "../../redux/actions/products";

export default function Auth({ setIsLogin, setRefetch }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  console.log();

  useEffect(() => {
    // FITUR SEARCH PRODUCT
    // sementara ini masih ada bug, ketika misal kita salah search, maka ketika mengetikkan keyword baru, maka dia tetap menampilkan error
    dispatch(getAllDataProducts(`search=${search}`));
  });
  return (
    <div className="flex gap-x-3">
      <div className="bg-[#EFEEEE] rounded-full flex items-center max-sm:hidden">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
            // console.log(e.target.value);
          }}
          type="text"
          className="bg-[#EFEEEE] rounded-l-full px-4 py-2"
          placeholder="Search"
        />
        <button
          onClick={() => {
            console.log("ok");
            setRefetch(true);
          }}
          className="flex rounded-r-full py-2 px-4 border-l-[1px] border-slate-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-x-3 max-sm:hidden sm:hidden md:hidden lg:flex">
        <Link to="/chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 max-sm:hidden md:max-lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </Link>
      </div>
      <div className="">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img src={require("../../assets/img/account.webp")} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 bg-slate-100 shadow menu menu-compact dropdown-content rounded-box w-52"
          >
            <li>
              <button
                onClick={() => navigate("/profile")}
                className="hover:bg-amber-200 justify-between"
              >
                Profile
                <span className="badge bg-[#6A4029] border-none text-white">
                  New
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/product")}
                className="hover:bg-amber-200"
              >
                Product
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/payment")}
                className="hover:bg-amber-200"
              >
                Cart
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/history")}
                className="hover:bg-amber-200"
              >
                History
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/chat")}
                className="hover:bg-amber-200"
              >
                Chat
              </button>
            </li>
            <li>
              <button
                className="hover:bg-amber-200"
                onClick={() => {
                  localStorage.removeItem("@userLogin");
                  setIsLogin(false);
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

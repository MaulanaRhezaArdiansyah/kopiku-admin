import { Link } from "react-router-dom";

export default function AuthCard(props) {
  return (
    <>
      <div className="promo-container absolute -top-4 lg:-top-24 flex max-sm:flex-col max-sm:p-5 sm:p-5 bg-[#ffffff] shadow-2xl shadow-slate-400 w-2/3 max-sm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-2/3 h-48 max-sm:h-64 rounded-md justify-around items-center">
        <div className="flex flex-col w-2/6 sm:w-3/6 max-sm:w-full gap-y-2">
          <h1 className="text-4xl text-[#0B132A] font-bold">{props.title}</h1>
          <p className="text-base text-[#4F5665]">{props.caption}</p>
        </div>
        <div className="flex justify-end">
          <Link to="/product">
            <button className="py-5 px-20 text-lg text-[#6A4029] font-bold cursor-pointer bg-amber-400 hover:bg-amber-500 duration-300 rounded-md">
              {props.textBtn}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

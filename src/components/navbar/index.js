import "../../assets/css/global.css";
import { Link, NavLink } from "react-router-dom";
import Auth from "./Auth";
import UnAuth from "./UnAuth";
import { useEffect, useState } from "react";

// RENDER NAVBAR WITH IF ELSE CONDITIONAL
// const renderNavbar = (props) => {
//   if (localStorage.getItem("@userLogin")) {
//     return <Authenticated setIsLogin={props.setIsLogin} />;
//   }
//   return <Unauthenticated />;
// };

const Navbar = ({ titleLogo, setKeyword, setRefetch }) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <>
      <div
        id="display-menu-navbar"
        className="bg-white max-sm:w-full max-sm:h-[100vh] sm:w-full sm:h-[100vh] md:w-full md:h-[100vh] flex flex-col items-center text-3xl gap-10 pt-32 fixed"
      >
        <a href="./index.html">Home</a>
        <a href="./product.html">Product</a>
        <a href="./payment.html">Your Cart</a>
        <a href="./history.html">History</a>
        <div className="flex flex-col gap-8 items-center w-full">
          <a href="/login" className="w-[90%]">
            <button className="bg-[#6A4029] text-white py-5 w-full rounded-full">
              Login
            </button>
          </a>
          <a href="./auth-signup.html" className="w-[90%]">
            <button className="bg-amber-400 text-[#6A4029] py-5 w-full rounded-full">
              Sign Up
            </button>
          </a>
        </div>
      </div>
      <nav className="bg-white/90 flex items-center justify-around max-sm:justify-between sm:justify-between sm:px-20 md:justify-between md:px-20 lg:justify-around max-sm:px-5 w-full h-28 fixed top-0 z-10 backdrop-blur-sm border-b-[1px] border-slate-200">
        <Link to="/" className="flex items-center gap-x-2 z-10">
          <img src={require("../../assets/img/coffe-logo.webp")} alt="" />
          <p className="text-[#0B132A] font-black text-xl">{titleLogo}</p>
        </Link>
        <ul className="flex gap-x-8 max-sm:hidden sm:hidden md:hidden lg:flex">
          <li>
            <NavLink to="/" className="text-lg" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="text-lg" activeclassname="active">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" className="text-lg" activeclassname="active">
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="text-lg"
              activeclassname="active"
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
        {/* USE THIS CONDITIONAL WITH TERNARY OPERATOR BUT MORE SLOWLY */}
        {/* {localStorage.getItem("@userLogin") ? (
          <Authenticated setIsLogin={setIsLogin} />
        ) : (
          <Unauthenticated />
        )} */}
        {isLogin ? (
          <Auth
            setIsLogin={setIsLogin}
            setKeyword={setKeyword}
            setRefetch={setRefetch}
          />
        ) : (
          <UnAuth setKeyword={setKeyword} />
        )}
        {/* OR USE THIS WITH IF ELSE, FASTER THAN TERNARY BRO!! */}
        {/* {renderNavbar({ setIsLogin })} */}
        <div className="flex flex-col gap-2 max-sm:hidden sm:hidden lg:hidden menu-toggle relative">
          <input
            type="checkbox"
            className="absolute h-10 w-10 opacity-0 bottom-[-4px] right-[2px] z-10"
          />
          <span className="w-10 h-1 bg-[#6A4029] rounded-md duration-300"></span>
          <span className="w-10 h-1 bg-[#6A4029] rounded-md duration-300"></span>
          <span className="w-10 h-1 bg-[#6A4029] rounded-md duration-300"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

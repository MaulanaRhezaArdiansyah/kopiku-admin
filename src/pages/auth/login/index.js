import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BrandLogo from "../../../components/BrandLogo";
import AuthBtn from "../../../components/AuthBtn";
import AuthCard from "../../../components/AuthCard";
import Footer from "../../../components/footer";
import background from "../../../assets/img/bg.webp";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:3001/api/v1/auth/login`,
      data: loginData,
    })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("@userLogin", JSON.stringify(res.data.data));
        alert("Login success! Enjoy your journey!");
        navigate("/product");
      })
      // .catch((err) => console.log(err.response.data.message));
      .catch((err) =>
        setValidate({ message: err.response.data.message, error: true })
      );
  };

  // console.log(localStorage.getItem("@userLogin"));
  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      navigate("/product");
    }
  }, []);
  return (
    <>
      {/* <ContentLogin /> */}
      <main className="flex flex-col w-full h-[120vh] lg:h-[150vh]">
        <section className="flex w-full h-full">
          <section
            className="w-1/2 h-full max-sm:hidden flex justify-center items-center"
            style={{ backgroundImage: `url(${background})` }}
          ></section>
          <section className="w-1/2 max-sm:w-full h-full px-20 max-sm:px-10 flex flex-col">
            <div className="flex justify-between items-center w-full h-20 pt-10">
              <BrandLogo />
              <AuthBtn content="Sign Up" linkto="/auth/signup" />
            </div>
            <p className="text-[#6A4029] font-black text-3xl text-center pt-14  mb-8">
              Login
            </p>
            <form
              action=""
              onSubmit={handleLogin}
              className="flex flex-col gap-5 "
            >
              {validate.error && (
                <div className="error-message bg-red-200 text-red-500 p-5 rounded-lg font-bold italic">
                  {validate.message}
                </div>
              )}

              <label
                htmlFor="email"
                className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
              >
                Email address:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    setLoginData({
                      // isi dari form login sebelumnya
                      ...loginData,
                      // kemudian replace dengan data yang baru karena ada key yang sama
                      email: e.target.value,
                    });
                    // console.log(e.target.value);
                  }}
                  className="p-5 rounded-lg border-[1px] border-[#4F5665]"
                />
              </label>
              <label
                htmlFor="password"
                className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
              >
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    });
                  }}
                  className="p-5 rounded-lg border-[1px] border-[#4F5665]"
                />
              </label>
              <Link to="/forgot" className="text-[#6A4029] font-bold underline">
                Forgot password?
              </Link>
              <button
                type="submit"
                className="text-[#6A4029] bg-amber-400 font-bold p-5 rounded-lg w-full hover:bg-amber-500 duration-300"
              >
                Login
              </button>
              <button className="text-[#000000] bg-white hover:bg-slate-200 duration-300 font-extrabold p-5 rounded-lg flex items-center justify-center gap-2 shadow-xl">
                <img src={require("../../../assets/img/google.webp")} alt="" />
                <p>Login with Google</p>
              </button>
            </form>
          </section>
        </section>
        <section className="flex bg-slate-100 relative justify-center lg:mt-0 py-10 max-sm:py-10 max-sm:h-[50vh] max-sm:mt-10 md:h-[30vh] lg:h-[0vh]">
          <AuthCard
            title="Get your member card now!"
            caption="Let's join with our member and enjoy the deals."
            textBtn="Create Now"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;

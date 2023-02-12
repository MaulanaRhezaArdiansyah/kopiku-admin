import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <>
      <Link to="/" className="flex items-center gap-x-2 z-10">
        {/* <img src={require("../../assets/img/coffe-logo.webp")} alt="" /> */}
        <img src={require("../assets/img/coffe-logo.webp")} alt="" />
        <p className="text-[#0B132A] font-black text-xl">KopiKu</p>
      </Link>
    </>
  );
};

export default BrandLogo;

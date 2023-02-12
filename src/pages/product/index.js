import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Promo from "./components/Promo";
import Footer from "../../components/footer";
import { CategoryNavbar } from "./components/CategoryNavbar";
import { Pagination } from "./components/Pagination";
import ProductList from "./components/ProductList";
import { TabTitle } from "../../utils/GeneralFunction";

const Product = () => {
  const [data, setData] = useState([]);
  // const [dataProduct, setDataProduct] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [refetchCategory, setRefetchCategory] = useState(false);
  const [refetchPagination, setRefetchPagination] = useState(false);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  // console.log(data);
  // console.log(dataProduct);
  //   let { productId } = useParams();
  const navigate = useNavigate();

  const getDetailProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  TabTitle("Kopiku | Admin | Product");
  return (
    <>
      <Navbar
        titleLogo="Kopiku"
        setKeyword={setKeyword}
        setRefetch={setRefetch}
      />
      <main className="w-full h-[160vh] sm:max-lg:h-[250vh] flex lg:h-[220vh] max-sm:h-[400vh] sm:max-lg:flex-col-reverse max-sm:flex-col-reverse sm:max-lg:pt-28 max-sm:pt-20 lg:pt-28">
        <Promo />
        <section className="h-full w-[70%] sm:max-lg:w-full max-sm:w-full  flex flex-col">
          <CategoryNavbar
            setCategory={setCategory}
            setRefetchCategory={setRefetchCategory}
          />
          <div className="container px-10 max-sm:px-4 h-full flex flex-col justify-between">
            <div>
              <div className="row flex flex-wrap gap-8 justify-center sm:max-lg:pt-10 max-sm:pt-10">
                {/* {dataProduct.length === 0 ? (
                  <h2>Loading...</h2>
                ) : (
                  dataProduct.map((item) => {
                    // dataProduct.map(({id, title, price, images }) => {
                    return (
                      // <Link to={`${item.id}`}>
                      <div
                        key={item.id}
                        onClick={(id) => {
                          // 2 ways to get detail product when user click the product card
                          getDetailProduct(item.id);
                          // navigate(`/product/${item.id}`);
                        }}
                        className="card bg-white w-40 h-56 max-sm:w-36 max-sm:h-64 md:max-lg:w-44 md:max-lg:h-68 justify-center flex flex-col gap-y-2 items-center rounded-2xl shadow-xl"
                      >
                        <div className="flex h-32 w-32 items-center justify-center">
                          <img
                            src={
                              item.images.length > 0
                                ? `http://localhost:3001/uploads/images/${item.images[0].filename}`
                                : ""
                            }
                            alt=""
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-[#000000] text-xl text-center font-extrabold w-[80%]">
                            {item.title}
                          </p>
                          <p className="text-[#6A4029] text-lg font-bold">
                            IDR {numberWithCommas(item.price)}
                          </p>
                        </div>
                      </div>
                      // </Link>
                    );
                  })
                )} */}
                <ProductList />
              </div>
            </div>
            <div className="lg:flex lg:flex-col ">
              <div className=" flex flex-col items-start justify-start lg:h-[10vh] pl-10 text-2xl gap-3 underline text-[#6A4029] font-bold">
                <Link to="/product/add">
                  <p>Add new product</p>
                </Link>
              </div>
              <Pagination
                setRefetchPagination={setRefetchPagination}
                setPage={setPage}
              />
            </div>
          </div>
          {/* <p className="text-[#6A4029] font-semibold pt-10 pl-20">
              *the price has been cutted by discount appears
            </p> */}
        </section>
      </main>
      <Footer />
      <Outlet />
    </>
  );
};

export default Product;

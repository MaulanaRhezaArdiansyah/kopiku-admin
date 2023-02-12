import { useDispatch, useSelector } from "react-redux";
import { getAllDataProducts } from "../../../redux/actions/products";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  // const { data, response, loading, error } = useSelector(
  //   (state) => state.products
  // );
  const productsData = products.data;
  const loadingProducts = products.loading;
  const errorProducts = products.error;
  const dispatch = useDispatch();
  // const limit = 12;
  // action redux - get all data products
  // useEffect(() => {
  //   dispatch(getAllDataProducts());
  // }, []);
  useEffect(() => {
    dispatch(getAllDataProducts());
  }, []);

  const navigate = useNavigate();

  const getDetailProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (errorProducts) {
    // console.log(errorProducts);
    return (
      <div className="card bg-white w-40 h-56 max-sm:w-36 max-sm:h-64 md:max-lg:w-44 md:max-lg:h-68 justify-center flex flex-col gap-y-2 items-center rounded-2xl shadow-xl">
        <div className="flex flex-col items-center">
          <p>{errorProducts.message}</p>
          <p className="text-[#000000] text-xl text-center font-extrabold w-[80%]">
            ● ● ● ●
          </p>
          <p className="text-[#6A4029] text-lg font-bold">IDR ● ● ● ●</p>
        </div>
      </div>
    );
  }
  if (loadingProducts) {
    return (
      <div className="card bg-white w-40 h-56 max-sm:w-36 max-sm:h-64 md:max-lg:w-44 md:max-lg:h-68 justify-center flex flex-col gap-y-2 items-center rounded-2xl shadow-xl">
        <div className="flex h-32 w-32 items-center justify-center">
          <img
            src={require("../../../assets/img/default-img.jpg")}
            alt=""
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#000000] text-xl text-center font-extrabold w-[80%]">
            ● ● ● ●
          </p>
          <p className="text-[#6A4029] text-lg font-bold">IDR ● ● ● ●</p>
        </div>
      </div>
    );
  }
  return productsData.map((item) => {
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
  });
};

export default ProductList;

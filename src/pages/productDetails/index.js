import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import EditProduct from "../editProduct";
import { TabTitle } from "../../utils/GeneralFunction";
// import DelivAndTime from "./components/DelivAndTime";

const ProductDetails = () => {
  const { productId } = useParams();
  // console.log(productId);

  // const [dataProductDetails, setDataProductDetails] = useEffect("");
  // abstraction for state default
  const [dataProductDetails, setDataProductDetails] = useState({
    id: "",
    title: "",
    price: "",
    image: null,
    category: "",
    description: "",
    images: [
      {
        product_id: "",
        name: "",
        filename: "",
      },
    ],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/products/${productId}`)
      // .then((res) => console.log(res.data.data))
      .then((res) => {
        // console.log(res.data.data);
        // console.log(res.data.data.images[0].filename);
        setDataProductDetails(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [order, setOrder] = useState(0);
  const [size, setSize] = useState("");

  // const cart = {
  //   titleCart: dataProductDetails.title,
  //   priceCart: dataProductDetails.price,
  //   imageCart: `http://localhost:3001/uploads/images/${dataProductDetails.images[0].filename}`,
  //   orderCart: order,
  //   sizeCart: size,
  // };
  const cart = {
    titleCart: dataProductDetails.title,
    priceCart: dataProductDetails.price * order,
    imageCart: `http://localhost:3001/uploads/images/${dataProductDetails.images[0].filename}`,
    orderCart: order,
    sizeCart: size,
  };
  // console.log(cart.priceCart);

  // const cart = [
  //   {
  //     titleCart: dataProductDetails.title,
  //     priceCart: dataProductDetails.price,
  //     imageCart: `http://localhost:3001/uploads/images/${dataProductDetails.images[0].filename}`,
  //     orderCart: order,
  //     sizeCart: size,
  //   },
  // ];
  // console.log(cart);
  // 1 on 1
  // get data cart sebelumnya / yang sudah terinput ke cart
  const carts = JSON.parse(localStorage.getItem("@cart"));

  const handleAddCart = (e) => {
    alert("Yeayy! One step closer to enjoy your meal!");
    if (carts == null) {
      // null disini  adalah array kosong di data localStorage untuk carts
      localStorage.setItem("@cart", JSON.stringify([cart]));
    } else {
      localStorage.setItem("@cart", JSON.stringify([...carts, cart]));
      // loca
    }
    // debugging untuk cek carts
    console.log(carts);
  };

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  TabTitle(`Kopiku | Admin - ${dataProductDetails.title}`);

  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <main className="flex max-sm:flex-col md:max-lg:flex-col w-full h-[150vh] md:max-lg:h-[200vh] max-sm:h-[220vh] lg:pt-28 max-sm:pt-28 ">
        <section className="flex flex-col gap-y-10 w-1/2 h-full max-sm:w-full max-sm:h-[50%] md:max-lg:w-full md:max-lg:h-[50%] md:max-lg:pt-14  lg:pl-32 lg:pr-10 pt-6">
          <p className="md:max-lg:pl-10 md:max-lg:text-xl lg:text-lg max-sm:pl-5 text-[#4F5665]">
            Favorite & Promo
            <span className="text-[#6A4029] font-bold">
              {" "}
              &gt; {dataProductDetails.title}
            </span>
          </p>
          <div className="max-sm:flex flex-col max-sm:h-[80vh]">
            <div className=" w-full h-[60vh] flex justify-center items-center max-sm:px-5 ">
              <img
                // src={`http://localhost:3001/uploads/images/${dataProductDetails.images? dataProductDetails.images[0].filename: ""}`}
                src={`http://localhost:3001/uploads/images/${dataProductDetails.images[0].filename}`}
                alt=""
                className="h-full max-sm:w-72 max-sm:h-72 rounded-full"
              />
            </div>
            {/* <DelivAndTime /> */}
          </div>
        </section>
        <section className="max-sm:mt-10 max-sm:px-5 md:max-lg:mt-36 md:max-lg:pt-20 md:max-lg:px-10 flex flex-col gap-y-14 w-1/2 h-full max-sm:w-full md:max-lg:w-full md:max-lg:h-[50%]  lg:pr-32 lg:pl-10 pt-6 lg:pt-28 max-sm:h-[120vh]">
          <div className="flex flex-col gap-y-8 h-[50%] w-full">
            <h2 className="text-5xl font-extrabold text-center pb-4 max-sm:pb-0 md:max-lg:text-7xl">
              {dataProductDetails.title}
            </h2>
            <p className="text-lg text-[#6A4029] md:max-lg:text-2xl">
              {dataProductDetails.description}
            </p>
            <p className="text-lg text-[#6A4029] md:max-lg:text-2xl">
              Delivery only on
              <span className="font-bold"> Monday to friday </span>at
              <span className="font-bold"> 1 - 7 pm</span>
            </p>
          </div>
          <div className="flex flex-col gap-y-6 h-[50%] max-sm:h-[100vh] w-full">
            {/* this is set size in mobile design */}
            <div className="bg-white shadow-xl shadow-slate-300 w-[30%] max-sm:w-full sm:hidden h-full max-sm:h-[20vh] rounded-lg flex flex-col gap-y-2 p-5 items-center justify-center">
              <p className="font-bold text-xl">Choose a size</p>
              <div className="flex gap-x-3 w-full lg:px-6  justify-center items-center">
                <button className="bg-amber-400 text-lg h-14 w-14 rounded-full flex items-center justify-center font-bold">
                  R
                </button>
                <button className="bg-amber-400 text-lg h-14 w-14 rounded-full flex items-center justify-center font-bold">
                  L
                </button>
                <button className="bg-amber-400 text-lg h-14 w-14 rounded-full flex items-center justify-center font-bold ">
                  XL
                </button>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex items-center bg-white md:max-lg:text-2xl w-[30%] h-12 text-[#6A4029] font-bold border-[2px] rounded-md">
                <input
                  onClick={() =>
                    setOrder((prev) => {
                      if (prev === 0) {
                        return 0;
                      } else {
                        return prev - 1;
                      }
                    })
                  }
                  type="button"
                  value="-"
                  className="flex items-center justify-center  border-r-[2px] w-[30%] h-full "
                />
                <p className="flex items-center justify-center  border-r-[2px] w-[40%] h-full ">
                  {order}
                </p>
                <input
                  onClick={() =>
                    setOrder((prev) => {
                      return prev + 1;
                    })
                  }
                  type="button"
                  value="+"
                  className="flex items-center justify-center w-[30%] h-full "
                />
              </div>
              <p className="h-10 text-2xl md:max-lg:text-4xl font-extrabold flex items-center">
                IDR {numberWithCommas(dataProductDetails.price)}
              </p>
            </div>
            <div className="w-full flex flex-col gap-y-5 md:max-lg:text-2xl">
              <button
                onClick={handleAddCart}
                className="bg-[#6A4029] text-white font-bold py-5 rounded-lg"
              >
                Add to Cart
              </button>
              <Link to={`/product/edit/${productId}`} className="">
                <button className="w-full bg-amber-400 text-[#6A4029] font-bold py-5 rounded-lg">
                  Edit Product
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <section className="w-full h-36 relative">
        <div className="absolute max-sm:-top-10 lg:top-16 md:max-lg:top-16 flex gap-x-5 justify-center w-full px-32 max-sm:px-5 md:max-lg:px-10 h-36 max-sm:h-44">
          {/* this is set size in desktop design */}
          <div className="max-sm:hidden bg-white shadow-xl shadow-slate-300 w-[30%] h-full rounded-lg flex flex-col gap-y-2 p-5 items-center justify-center">
            <p className="font-bold text-xl">Choose a size</p>
            <div className="flex gap-x-3 w-full lg:px-6  justify-center items-center">
              <button
                onClick={() => setSize("Regular")}
                className="bg-amber-400 text-lg h-14 w-14 md:max-lg:w-12 md:max-lg:h-12 rounded-full flex items-center justify-center font-bold"
              >
                R
              </button>
              <button className="bg-amber-400 text-lg h-14 w-14 md:max-lg:w-12 md:max-lg:h-12 rounded-full flex items-center justify-center font-bold">
                L
              </button>
              <button className="bg-amber-400 text-lg h-14 w-14 md:max-lg:w-12 md:max-lg:h-12 rounded-full flex items-center justify-center font-bold ">
                XL
              </button>
            </div>
          </div>
          <div className=" bg-white shadow-xl shadow-slate-300 w-[70%] max-sm:w-full h-full rounded-lg flex py-5 lg:px-10 md:max-lg:px-5 max-sm:px-3 max-sm:py-3 gap-x-5 items-center">
            <div className="w-24 lg:h-full flex items-center justify-center">
              <img
                // 2 ways for call images
                src={`http://localhost:3001/uploads/images/${dataProductDetails.images[0].filename}`}
                // src={`http://localhost:3001/uploads/images/${dataProductDetails.images ? dataProductDetails.images[0].filename : ""}`}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="max-sm:w-[60%] lg:w-full lg:h-full flex max-sm:flex-col md:gap-x-5 md:max-lg:h-full">
              <div className="w-[40%] lg:w-[50%] md:max-lg:w-[50%] max-sm:w-full max-sm:h-[50%] max-sm:gap-y-1 h-full flex flex-col justify-center gap-y-2 ">
                <p className="text-lg font-extrabold">
                  {dataProductDetails.title}
                </p>
                <p>
                  x{order} ({size})
                </p>
              </div>
              <div className="w-[40%] lg:w-[50%] lg:h-full max-sm:w-full max-sm:h-[50%] h-full md:max-lg:w-[50%] md:max-lg:h-full flex items-center justify-end max-sm:justify-start gap-x-5 md:max-lg:gap-x-2 ">
                <p className="text-lg font-bold">Checkout</p>
                <Link to="/payment">
                  <button className="bg-amber-400 w-14 h-14 max-sm:h-10 max-sm:w-12 md:max-lg:w-12 md:max-lg:h-10 rounded-full flex items-center justify-center font-bold text-[#6A4029] text-xl">
                    &gt;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;

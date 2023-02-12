import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "../../assets/css/global.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProducts } from "../../redux/actions/products";
import axios from "axios";
import FormData from "form-data";

// const AddProduct = ({ img, ...rest }) => {
const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    // image: "",
  });
  // const login = JSON.parse(localStorage.getItem("@userLogin"));
  // const adminToken = login.token;
  // const dispatch = useDispatch();
  // const handleAddProduct = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     postProducts(
  //       {
  //         title: productData.title,
  //         // image:,
  //         price: productData.price,
  //         category: productData.category,
  //         description: productData.description,
  //       },
  //       {
  //         token: adminToken,
  //       }
  //     )
  //   );
  //   alert("success add product");
  // };

  const { title, price, category, description } = productData;
  const body = new FormData();
  body.append("title", title);
  body.append("price", price);
  body.append("category", category);
  body.append("description", description);
  // body.append("image", image);
  // const handleAddProduct = (e) => {
  //   e.preventDefault();
  //   console.log(title);
  //   console.log(price);
  //   console.log(category);
  //   console.log(description);
  //   // console.log(image);
  // };
  const handleAddProduct = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:3001/api/v1/products`,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
        // 'Authorization': `${adminToken}`,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };
  // const addProducts = useSelector((state) => state.addProducts);

  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <main className="lg:h-[220vh] w-full lg:pt-28 lg:flex lg:flex-col lg:justify-center">
        <section className="text-desc w-full lg:h-[20vh] lg:px-20 lg:pt-10">
          <h2 className="">
            Favorite & Promo{" "}
            <span className="text-coffee font-bold">&gt; Add new product</span>
          </h2>
        </section>
        <form
          onSubmit={handleAddProduct}
          className="content w-full lg:h-[200vh] lg:flex"
        >
          <section className="left  lg:w-2/5 lg:h-full lg:px-20 lg:pt-6 lg:flex lg:flex-col lg:gap-y-16">
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-8">
              <div className="bg-gray-300 lg:w-64 lg:h-64 flex justify-center items-center rounded-full">
                <img
                  src={require("../../assets/img/png/crud-image.png")}
                  alt=""
                />
                {/* {img && <img src={img} alt="" />} */}
              </div>
              <div className="lg:w-full lg:flex lg:flex-col lg:gap-y-4">
                <button className="bg-[#0B132A] text-white font-bold flex justify-center items-center w-full lg:py-6 btn-rounded text-lg">
                  Take a picture
                </button>
                <input
                  type="file"
                  // {...rest}
                  name="uploadfile"
                  id="img"
                  className="bg-red-100"
                  style={{ display: "none" }}
                  // onChange={(e) => {
                  //   setProductData({
                  //     ...productData,
                  //     image: e.target.files[0],
                  //   });
                  // }}
                  // onChange={(e) => {
                  //   setProductData({
                  //     ...productData,
                  //     image: e.target.files[0],
                  //   });
                  // }}
                />
                <label
                  // for="img"
                  htmlFor="img"
                  className="cursor-pointer  bg-amber-400 text-[#6A4029] flex justify-center items-center font-bold lg:py-6 btn-rounded text-lg"
                >
                  Choose from gallery
                </label>
              </div>
            </div>
            <div className="lg:w-full lg:flex lg:flex-col lg:gap-y-4">
              <p className="text-coffee font-bold text-lg lg:pb-4">
                Delivery Hour :{" "}
              </p>
              <select
                className="lg:py-6 btn-rounded lg:px-6 border-[1px] border-gray-300 focus:outline-none"
                name="start"
                id="start"
              >
                <option value="">Select start hour</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select
                className="lg:py-6 btn-rounded lg:px-6 border-[1px] border-gray-300 focus:outline-none"
                name="end"
                id="end"
              >
                <option value="">Select end hour</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="lg:w-full lg:flex lg:flex-col lg:gap-y-4">
              <p className="text-coffee font-bold text-lg lg:pb-4">
                Input Stock :{" "}
              </p>
              <select
                className="lg:py-6 btn-rounded lg:px-6 border-[1px] border-gray-300 focus:outline-none"
                name="stock"
                id="stock"
              >
                <option value="">Input stock</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </select>
            </div>
          </section>
          <section className="right  lg:w-3/5 lg:h-full lg:px-20 lg:flex lg:flex-col lg:gap-y-16 lg:pt-6">
            <div className="form-content lg:flex lg:flex-col lg:gap-y-10">
              <label htmlFor="product-title" className="">
                <p className="text-lg text-coffee font-bold">Name :</p>
                <input
                  onChange={(e) => {
                    setProductData({
                      ...productData,
                      title: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Type product name"
                  className="lg:py-3 w-full border-gray-300 border-b-[2px] focus:outline-none bg-transparent placeholder:text-gray-300"
                />
              </label>
              <label htmlFor="product-price" className="">
                <p className="text-lg text-coffee font-bold">Price:</p>
                <input
                  onChange={(e) => {
                    setProductData({
                      ...productData,
                      price: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Type product price"
                  className="lg:py-3 w-full border-gray-300 border-b-[2px] focus:outline-none bg-transparent placeholder:text-gray-300"
                />
              </label>
              <label htmlFor="product-category" className="">
                <p className="text-lg text-coffee font-bold">Category :</p>
                <input
                  onChange={(e) => {
                    setProductData({
                      ...productData,
                      category: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Type product category"
                  className="lg:py-3 w-full border-gray-300 border-b-[2px] focus:outline-none bg-transparent placeholder:text-gray-300"
                />
              </label>
              <label htmlFor="product-description" className="">
                <p className="text-lg text-coffee font-bold">Description :</p>
                <input
                  onChange={(e) => {
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Type product description"
                  className="lg:py-3 w-full border-gray-300 border-b-[2px] focus:outline-none bg-transparent placeholder:text-gray-300"
                />
              </label>
              <div className="lg:flex lg:flex-col w-full lg:gap-y-4">
                <label htmlFor="product-size">
                  <p className="text-lg text-coffee font-bold">
                    Input product size :
                  </p>
                </label>
                <p className="text-gray-300">
                  Click size you want to use for this product
                </p>
                <div className="product-size-btn w-full lg:flex justify-start items-center lg:gap-x-5">
                  <input
                    // class="checkbox-tools"
                    className=""
                    type="radio"
                    name="tools"
                    id="tool-1"
                    // checked
                  />
                  <label
                    className="for-checkbox-tools bg-gold w-16 h-16 lg:flex justify-center items-center font-bold rounded-full text-lg"
                    htmlFor="tool-1"
                  >
                    <p>R</p>
                  </label>
                  <input
                    // class="checkbox-tools"
                    className=""
                    type="radio"
                    name="tools"
                    id="tool-1"
                    // checked
                  />
                  <label
                    className="for-checkbox-tools bg-gold w-16 h-16 lg:flex justify-center items-center font-bold rounded-full text-lg"
                    htmlFor="tool-1"
                  >
                    <p>L</p>
                  </label>
                  <input
                    // class="checkbox-tools"
                    className=""
                    type="radio"
                    name="tools"
                    id="tool-1"
                    // checked
                  />
                  <label
                    className="for-checkbox-tools bg-gold w-16 h-16 lg:flex justify-center items-center font-bold rounded-full text-lg"
                    htmlFor="tool-1"
                  >
                    <p>XL</p>
                  </label>
                  <input
                    // class="checkbox-tools"
                    className=""
                    type="radio"
                    name="tools"
                    id="tool-1"
                    // checked
                  />
                  <label
                    className="for-checkbox-tools bg-gray-300 w-16 h-16 lg:flex justify-center items-center font-bold rounded-full text-lg"
                    htmlFor="tool-1"
                  >
                    <p className=" text-gray-800">250 gr</p>
                  </label>
                  <input
                    // class="checkbox-tools"
                    className=""
                    type="radio"
                    name="tools"
                    id="tool-1"
                    // checked
                  />
                  <label
                    className="for-checkbox-tools bg-gray-300 w-16 h-16 lg:flex justify-center items-center font-bold rounded-full text-lg"
                    htmlFor="tool-1"
                  >
                    <p className=" text-gray-800">300 gr</p>
                  </label>
                  <input
                    // class="checkbox-tools"
                    className=""
                    type="radio"
                    name="tools"
                    id="tool-1"
                    // checked
                  />
                  <label
                    className="for-checkbox-tools bg-gray-300 w-16 h-16 lg:flex justify-center items-center font-bold rounded-full text-lg"
                    htmlFor="tool-1"
                  >
                    <p className=" text-gray-800">500 gr</p>
                  </label>
                </div>
              </div>
              <div className="deliv-methods lg:flex lg:flex-col w-full lg:gap-y-4">
                <label htmlFor="product-size">
                  <p className="text-lg text-coffee font-bold">
                    Input delivery methods :
                  </p>
                </label>
                <p className="text-gray-300">
                  Click methods you want to use for this product
                </p>
                <div className="deliv-btn w-full lg:flex lg:justify-center lg:gap-x-5">
                  <button className="btn-rounded bg-gold font-bold text-coffee lg:py-6 lg:w-1/3">
                    Home Delivery
                  </button>
                  <button className="btn-rounded bg-gold font-bold text-coffee lg:py-6 lg:w-1/3">
                    Dine In
                  </button>
                  <button className="btn-rounded bg-gold font-bold text-coffee lg:py-6 lg:w-1/3">
                    Take Away
                  </button>
                </div>
              </div>
            </div>
            <div className="form-button lg:flex lg:flex-col lg:gap-y-4">
              <button
                type="submit"
                className="w-full lg:py-6 btn-rounded font-bold text-lg flex justify-center items-center bg-coffee text-white"
              >
                Save Product
              </button>
              <button className="w-full lg:py-6 btn-rounded font-bold text-lg flex justify-center items-center bg-gray-300 text-gray-800">
                Cancel
              </button>
            </div>
          </section>
        </form>
        {/* <section className="bg-red-400 lg:w-2/5 lg:h-full lg:px-20 lg:pt-6 lg:flex lg:flex-col lg:gap-y-16">
          <h2>
            Favorite & Promo{" "}
            <span className="text-coffee font-bold">&gt; Add new product</span>
          </h2>
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-8">
            <div className="bg-gray-300 lg:w-64 lg:h-64 flex justify-center items-center rounded-full">
              <img
                src={require("../../assets/img/png/crud-image.png")}
                alt=""
              />
            </div>
            <div className="lg:w-full lg:flex lg:flex-col lg:gap-y-4">
              <button className="bg-[#0B132A] text-white font-bold flex justify-center items-center w-full lg:py-6 btn-rounded text-lg">
                Take a picture
              </button>
              <input
                type="file"
                name="uploadfile"
                id="img"
                className="bg-red-100"
                style={{ display: "none" }}
              />
              <label
                for="img"
                className="cursor-pointer  bg-amber-400 text-[#6A4029] flex justify-center items-center font-bold lg:py-6 btn-rounded text-lg"
              >
                Choose from gallery
              </label>
            </div>
          </div>
          <div className="lg:w-full lg:flex lg:flex-col lg:gap-y-4">
            <p className="text-coffee font-bold text-lg lg:pb-4">
              Delivery Hour :{" "}
            </p>
            <select
              className="lg:py-6 btn-rounded lg:px-6 border-[1px] border-gray-300 focus:outline-none"
              name="start"
              id="start"
            >
              <option value="">Select start hour</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select
              className="lg:py-6 btn-rounded lg:px-6 border-[1px] border-gray-300 focus:outline-none"
              name="end"
              id="end"
            >
              <option value="">Select end hour</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="lg:w-full lg:flex lg:flex-col lg:gap-y-4">
            <p className="text-coffee font-bold text-lg lg:pb-4">
              Input Stock :{" "}
            </p>
            <select
              className="lg:py-6 btn-rounded lg:px-6 border-[1px] border-gray-300 focus:outline-none"
              name="stock"
              id="stock"
            >
              <option value="">Input stock</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="40">40</option>
              <option value="60">60</option>
              <option value="80">80</option>
              <option value="100">100</option>
            </select>
          </div>
        </section> */}
        {/* <section className="bg-emerald-400 lg:w-3/5 lg:h-full lg:px-20">

        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default AddProduct;

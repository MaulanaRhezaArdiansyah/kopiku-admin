import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Homepage from "./pages/home";
import Product from "./pages/product";
import NotFound from "./pages/404";
import Order from "./pages/order";
import Dashboard from "./pages/dashboard";
import AddProduct from "./pages/addProduct";
import EditProduct from "./pages/editProduct";
import ProductDetails from "./pages/productDetails";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/">
              <Route index element={<Homepage />} />
              <Route path="/auth/login" element={<Login />} />
              {/* <Route path="product" element={<Product />} /> */}
              <Route path="product" element={<Product />} />
              <Route path="product/:productId" element={<ProductDetails />} />
              <Route path="product/add" element={<AddProduct />} />
              <Route path="product/edit/:productId" element={<EditProduct />} />
              <Route path="order" element={<Order />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

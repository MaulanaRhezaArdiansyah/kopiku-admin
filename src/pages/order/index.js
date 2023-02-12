import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import backgroundManageOrder from "../../assets/img/payment-bg.webp";

const Order = () => {
  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <main
        className="h-[150vh] w-full pt-28 flex justify-center bg-cover "
        style={{ backgroundImage: `url(${backgroundManageOrder})` }}
      >
        <h1 className="text-3xl">This is order page</h1>
      </main>
      <Footer />
    </>
  );
};
export default Order;

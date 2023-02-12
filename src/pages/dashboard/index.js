import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <main className="h-[150vh] w-full pt-28 flex justify-center bg-slate-50 border-b-[2px] border-slate-200">
        <h1 className="text-3xl">This is dashboard page</h1>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-9xl">404</h1>
        <h3 className="text-3xl">Page Not Found!</h3>
        <Link to="/">
          <p className="text-xl text-slate-400">Back to the homepage</p>
        </Link>
        {/* <h3 className="text-xl">This page is currently under development!</h3> */}
      </div>
    </>
  );
};

export default NotFound;

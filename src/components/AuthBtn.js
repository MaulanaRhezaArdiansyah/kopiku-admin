import { Link } from "react-router-dom";

export default function AuthBtn(props) {
  return (
    // <Link to="/auth/login">
    <Link to={props.linkto}>
      <button className="text-[#6A4029] font-bold bg-amber-400 hover:bg-amber-500 duration-300 text-lg px-12 p-3 rounded-full">
        {props.content}
      </button>
    </Link>
  );
}

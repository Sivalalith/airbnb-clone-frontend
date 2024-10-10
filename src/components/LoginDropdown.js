import { Link } from "react-router-dom";

const LoginDropdown = () => {
  return (
    <div className="absolute right-0 top-20 w-40 my-6 flex flex-col bg-white shadow-lg rounded-3xl">
      <Link className="m-2 p-2" to="/login">
        Login
      </Link>

      <Link className="m-2 p-2" to="/signup">
        Signup
      </Link>
    </div>
  );
};

export default LoginDropdown;

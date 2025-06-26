import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import logo from "../assets/logo.png";
import Google from "../component/Google";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        alert("User signed in successfully:", user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        alert("Error signing in user:", error);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="mt-10 bg-white shadow-md rounded px-8 py-6 mb-4 w-full max-w-sm">
        <div className="">
          <div className="btn btn-ghost text-3xl font-black text-[#002147e1] font-body p-0">
            <img src={logo} alt="logo" className="rotate-90 w-12 mr-2" />
          </div>
        </div>
        <h1 className="text-3xl font-body font-bold mt-5">Sign in</h1>
        <p className="text-gray-600 mb-6 mt-2">
          Don't have an account? &nbsp;
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="**********"
            />
            {/* <p className="text-right text-blue-500">Forgot Password?</p> */}
          </div>
          <div className="">
            <button
              className="bg-main btn-lg btn border-none text-white btn-block"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <Google />
      </div>
    </div>
  );
};

export default Login;

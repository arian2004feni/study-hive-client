import React from "react";
import { GiBookCover } from "react-icons/gi";
import { PiUsersThreeBold } from "react-icons/pi";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="mt-10 bg-white shadow-md rounded px-8 py-6 mb-4 w-full max-w-sm">
        <div className="">
          <div className="btn btn-ghost text-3xl font-black text-[#002147e1] font-body p-0">
            <span className="flex flex-col-reverse items-center text-main">
              <GiBookCover className="text-4xl" />{" "}
              <PiUsersThreeBold className="text-2xl -mb-3" />
            </span>{" "}
          </div>
        </div>
        <h1 className="text-3xl font-body font-bold mt-5">Sign in</h1>
        <p className="text-gray-600 mb-6 mt-2">
          Don't have an account? &nbsp;
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
        <form className="">
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
              type="text"
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
              placeholder="******************"
            />
            {/* <p className="text-right text-blue-500">Forgot Password?</p> */}
          </div>
          <div className="">
            <button
              className="bg-blue-500 hover:bg-blue-700 btn border-none text-white btn-block"
              type="submit"
            >
              Sign In
            </button>

          </div>
        </form>
            <button className="btn bg-white text-black border-none hover:bg-gray-200 btn-block mt-4">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
      </div>
    </div>
  );
};

export default Login;

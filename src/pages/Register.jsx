import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import logo from "../assets/logo.png";
import Google from "../component/Google";
import Swal from "sweetalert2";

const Register = () => {
  const { registerUser, setLoading } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(username, photoURL, email, password);

    registerUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log("User registered successfully:", user);

        setLoading(false);

        const profile = {
          displayName: username,
          photoURL: photoURL,
        };

        updateProfile(user, profile)
          .then(() => {
            setLoading(false);
            Swal.fire({
              title: "Successfully sign in",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
            setTimeout(() => {
              navigate(location?.state || '/')
            }, 1000);
          })
          .catch(() => {
            setLoading(false);
            Swal.fire({
              title: "Sign in failed",
              icon: "error",
            });
          });
      })
      .catch(() => {
        Swal.fire({
          title: "Sign in failed",
          icon: "error",
        });
        setLoading(false);
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
        <h1 className="text-3xl font-body font-bold mt-5">Sign Up</h1>
        <p className="text-gray-600 mb-6 mt-2">
          Already have an account? &nbsp;
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Username"
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="photoURL"
            >
              Photo URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photoURL"
              name="photoURL"
              type="url"
              placeholder="https://example.com/photo.jpg"
            />
          </div>
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
              placeholder="user@example.com"
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
              minLength={6}
              pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must be at least 6 characters, including uppercase and lowercase letters"
              placeholder="******************"
            />
            {/* <p className="text-right text-blue-500">Forgot Password?</p> */}
          </div>
          <div className="">
            <button
              className="bg-main btn btn-lg border-none text-white btn-block"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <Google />
      </div>
    </div>
  );
};

export default Register;

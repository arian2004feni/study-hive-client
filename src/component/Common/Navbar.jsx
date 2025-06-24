import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../logo";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Assignments</NavLink>
      </li>
      <li>
        <NavLink>Pending Assignments</NavLink>
      </li>
      <li>
        <a>profile</a>
      </li>
    </>
  );

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl font-black text-[#002147e1] font-body">
            <Logo />
            StudyHive
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-body menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" role="button" className="btn btn-ghost mr-2">
            Login
          </Link>
          <Link
            to="/register"
            role="button"
            className="btn bg-main text-white btn-ghost"
          >
            Register
          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-white rounded-box z-1 mt-4 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

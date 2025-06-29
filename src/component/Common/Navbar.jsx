import { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out user:", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignment">Assignments</NavLink>
      </li>
      <li>
        <NavLink to="/pending">Pending Assignments</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-heading sticky top-0 z-50">
      <div className="navbar xl:max-w-10/12 max-lg:max-w-10/12 px-6 max-lg:container mx-auto">
        <div className="navbar-start flex-0">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl text-white font-black font-body"
          >
            <img src={logo} alt="logo" className="rotate-90 w-10 mr-2" />
            StudyHive
          </Link>
        </div>
        <div className="navbar-end flex-1">
          <div className="hidden lg:flex mr-12">
            <ul className="menu menu-lg font-medium text-white opacity-80 menu-horizontal px-1">
              {links}
            </ul>
          </div>
          {!user ? (
            <>
              <Link
                to="/login"
                role="button"
                className="btn hidden lg:flex text-heading bg-white text-lg btn-ghost mr-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                role="button"
                className="btn hidden lg:flex text-lg bg-main text-heading/80 btn-ghost"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end">
                {/* <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div> */}
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar avatar-online cursor-pointer element-head m-1 mr-2"
                >
                  {/* <span className="element-child size-20"></span> */}
                  <div className="w-12 rounded-full">
                    <img
                      src={user.photoURL}
                      alt="profile pic"
                      onError={(e) =>
                        (e.target.src =
                          "https://i.ibb.co/JX3zV4J/pngtree-vector-avatar-icon-png-image-889567-removebg-preview.png")
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-lg relative dropdown-content bg-white rounded-box z-1 w-68 p-2 mt-3 shadow"
                >
                  <span className="absolute bg-white size-6 right-5 -top-1 rotate-45"></span>
                  <li>
                    <Link to="/create-assignment">Create Assignments</Link>
                  </li>
                  <li>
                    <Link to={`/assignment/my-submission/${user?.email}`}>My Attempted Assignments</Link>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleSignOut}
                role="button"
                className="btn hidden lg:flex text-lg bg-main text-heading/80 btn-ghost"
              >
                Logout
              </button>
            </>
          )}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white hover:text-heading lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
              className="menu menu-lg dropdown-content bg-white rounded-box z-1 mt-6 w-56 text-center p-2 shadow-xl gap-2"
            >
              {links}
              {!user ? (
                <>
                  <Link
                    to="/login"
                    role="button"
                    className="btn text-white bg-heading text-lg btn-ghost mr-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    role="button"
                    className="btn text-lg bg-main text-heading/80 btn-ghost"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSignOut}
                    role="button"
                    className="btn text-lg bg-main text-heading/80 btn-ghost"
                  >
                    Logout
                  </button>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

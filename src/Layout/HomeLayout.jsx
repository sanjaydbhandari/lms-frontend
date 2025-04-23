import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../Pages/Footer";
import { logout } from '../redux/slices/authSlice';

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  async function onLogout(e) {
      e.preventDefault();

      const response = await dispatch(logout());
      if(response?.payload?.data)
          navigate("/");
  }

  return (
    <div className="min-h-[90vh] flex justify-center">
      <div className="drawer absolute left-0">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="fixed">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="relative z-40 font-bold text-white m-4 hover:cursor-pointer"
            />
          </label>
        </div>
        <div className="drawer-side w-0 z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer} className="">
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/"> Home </Link>
            </li>
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
              </li>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/course/create">Create Course</Link>
              </li>
            )}
            <li>
              <Link to="/about"> About us </Link>
            </li>
            <li>
              <Link to="/contact"> Contact us </Link>
            </li>
            <li>
              <Link to="/courses"> All courses </Link>
            </li>

            {!isLoggedIn ? (
              <div className="absolute bottom-4 w-[90%] left-0 right-0 mx-auto">
                <div className="w-full flex items-center gap-2">
                  <Link to="/signin" className="flex-1">
                    <button
                      type="button"
                      className="w-full text-yellow-600 hover:text-white border border-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-yellow-400 dark:text-yellow-400 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-900"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/signup" className="flex-1">
                    <button
                      type="button"
                      className="w-full text-yellow-600 hover:text-white border border-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-yellow-400 dark:text-yellow-400 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-900"
                    >
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="absolute bottom-4 w-[90%] left-0 right-0 mx-auto">
                <div className="w-full flex items-center gap-2">
                  <Link to="/user/profile" className="flex-1">
                    <button
                      type="button"
                      className="w-full text-yellow-600 hover:text-white border border-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-yellow-400 dark:text-yellow-400 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-900"
                    >
                      Profile
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="flex-1 text-yellow-600 hover:text-white border border-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-yellow-400 dark:text-yellow-400 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-900"
                  >
                    <Link onClick={onLogout}>Logout</Link>
                  </button>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>

      <main className="flex-grow">
                {children}
            <Footer />
            </main>

    </div>
  );
}

export default HomeLayout;

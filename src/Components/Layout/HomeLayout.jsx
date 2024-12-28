import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Pages/Footer";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const HomeLayout = ({ children }) => {
  // const dispatch = useDispatch();

  // const navigate = useNavigate();

  const changeWidth = () => {
    document.getElementsByClassName("drawer-side")[0].style.width = "auto";
  };

  const hideDrawer = () => {
    document.getElementsByClassName("drawer-toggle")[0].checked = false;
    document.getElementsByClassName("drawer-side")[0].style.width = "0";
  };

  return (
    <>
      <div className="min-h-[90vh] z-50">
        <Toaster position="top-right" />
        <div className="drawer absolute left-0 w-fit">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="cursor-pointer relative"
              onClick={changeWidth}
            >
              <FiMenu className="font-bold text-white m-4" />
            </label>
          </div>
          <div className="drawer-side w-0">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-100 text-base-content w-48 sm:w-80 p-4 relative h-[100%]">
              {/* Sidebar content here */}
              <li className="w-fit absolute right-2 z-50">
                <button
                  onClick={hideDrawer}
                  className="flex justify-end text-xl"
                >
                  <AiFillCloseCircle className="" />
                </button>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/">All Courses</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <div className="flex flex-wrap gap-2 justify-around p-5 w-full">
                <Link to="/signup">
                  <button className="border-yellow-600 border-2 text-nowrap hover:bg-yellow-600 px-5 py-3 rounded-lg font-semibold cursor-pointer transition-all ease-in-out text-white">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="border-yellow-600 text-nowrap border-2 hover:bg-yellow-600 px-5 py-3 rounded-lg font-semibold cursor-pointer  transition-all ease-in-out text-white">
                    Login
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>

        <div className="w-[98vw]">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;

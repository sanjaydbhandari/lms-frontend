import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail } from "../Helpers/regexMatcher";
import HomeLayout from "../Layout/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";
// import { login } from "../redux/slices/authSlice";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSigninDetails({
      ...signinDetails,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!signinDetails.email || !signinDetails.password) {
      toast.error("Please fill all the details");
      return;
    }
    if (!isEmail(signinDetails.email)) {
      toast.error("Invalid email provided");
      return;
    }

    const response = await dispatch(login(signinDetails));
    console.log(response);
    if (response?.payload?.data) {
      navigate("/");
    }
    setSigninDetails({
      email: "",
      password: "",
    });
  }

  return (
    <HomeLayout>
      <div className="p-4 flex overflow-x-auto items-center justify-center h-[100vh]">
        <form
          onSubmit={onFormSubmit}
          noValidate
          className="flex flex-col justify-center gap-3 rounded-lg text-white w-96 p-4 gap-3 items-center shadow-[0_0_10px_black]"
        >
          <h1 className="text-2xl text-center font-bold">Login Page</h1>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              onChange={handleUserInput}
              value={signinDetails.email}
              required
              type="text"
              name="email"
              className="bg-transparent px-2 py-1 border"
              placeholder="enter your Email..."
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              required
              onChange={handleUserInput}
              value={signinDetails.password}
              type="password"
              name="password"
              className="bg-transparent px-2 py-1 border"
              placeholder="enter your Password..."
              id="password"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 w-full text-black font-semibold mt-3 py-2 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-sm"
          >
            Login
          </button>
          <p className="text-center">
            Don't have an account ?{" "}
            <Link to="/signup" className="cusror-pointer text-accent">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Signin;

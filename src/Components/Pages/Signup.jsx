import React, { useEffect, useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const getImage = (e) => {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      setInputData({ ...inputData, avatar: uploadedImage });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        console.log(this.result);
        setPreviewImage(this.result);
      });
    }
  };

  const validateData = (e) => {
    e.preventDefault();
    if (!inputData.email || !inputData.password || !inputData.fullname) {
      toast.error("Please fill all details");
      return;
    }

    if (inputData.fullname.length < 3) {
      toast.error("Name should  be atleast of 3 Character");
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(inputData.password)) {
      toast.error(
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputData.email)) {
      toast.error("Invalid email format.");
    }

    const formData = new FormData();
    formData.append("fullname", inputData.fullname);
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);
    formData.append("avatar", inputData.avatar);

    // dipatch

    Navigate("/");
    setInputData({
      fullname: "",
      email: "",
      password: "",
      avatar: "",
    });
    setPreviewImage("");
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          noValidate
          onSubmit={validateData}
          action=""
          className="flex flex-col justify-center w-96 p-4 gap-3 items-center shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl">Registration Page</h1>
          <label htmlFor="image_uploads" className="">
            {previewImage ? (
              <img
                src={previewImage}
                className="w-24 h-24 rounded-full m-auto"
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
            )}
          </label>

          <input
            onChange={getImage}
            type="file"
            name="image_uploads"
            id="image_uploads"
            accept=".jpg .png .jpeg .svg"
            className="hidden"
          />

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="fullname" className="font-semibold">
              fullname
            </label>
            <input
              type="fullname"
              name="fullname"
              className=" bg-transparent px-2 py-1 border"
              placeholder="Enter your name..."
              id="fullname"
              value={inputData.fullname}
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className=" bg-transparent px-2 py-1 border"
              placeholder="email"
              id="email"
              value={inputData.email}
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              className=" bg-transparent px-2 py-1 border"
              placeholder="password"
              id="password"
              value={inputData.password}
              onChange={handleUserInput}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 w-full text-black font-semibold mt-3 py-2 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-sm"
          >
            Create Account
          </button>
          <p>
            Already have an account ?{" "}
            <Link
              to="/Login"
              className="link text-accent no-underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
};

export default Signup;
import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center h-screen bg-[#1a2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#1a2238] text-white text-xs -rotate-12 py-1 absolute ">
        Page Not Found
      </div>
      <button className="mt-5">
        <a
          href=""
          className="relative inline-block text-sm font-medium text-[#ff6A3D]"
        >
          Go Back
        </a>
      </button>
    </div>
  );
};

export default NotFound;

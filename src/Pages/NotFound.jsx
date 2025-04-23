import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen flex flex-col justify-center items-center h-screen gap-6 bg-[#1a2238]">
      <div className="flex">
        <h1 className="text-9xl font-extrabold text-white tracking-widest relative">
          404
          <p className="bg-[#1a2238] text-white text-xs tracking-normal -rotate-25 w-fit py-1 absolute left-[calc(50%-6px)] top-[calc(50%+10px)] -translate-x-1/2 -translate-y-1/2">
            Page Not Found
          </p>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-3 flex-col">
        <p className="text-slate-200">
          The page you're looking for doesn't exist.
        </p>
        <button
          type="button"
          className="w-fit text-yellow-600 hover:text-white border border-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-yellow-400 dark:text-yellow-400 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-900"
          onClick={()=>navigate(-1)}
        >Back</button>
      </div>
    </div>
  );
};

export default NotFound;

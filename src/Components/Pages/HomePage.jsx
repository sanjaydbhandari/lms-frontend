import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
const HomePage = () => {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex flex-col sm:flex-row items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="font-semibold text-5xl">
            Find Out
            <span className="text-yellow-600 font-bold"> Best Cources</span>
          </h1>
          <p className="text-xl text-gray-200">
            We have large library of cources
          </p>
          <div className="flex flex-wrap space-x-6 gap-2 justify-start ">
            <Link to="/courses">
              <button className="bg-yellow-500 text-nowrap hover:bg-yellow-600 px-5 py-3 rounded-lg font-semibold cursor-pointer text-lg transition-all ease-in-out">
                Explore Courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-yellow-600 text-nowrap border-2 hover:bg-yellow-600 px-5 py-3 rounded-lg font-semibold cursor-pointer  text-lg transition-all ease-in-out">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals"
            alt=""
            className=" rounded-tl-full rounded-t-full"
          />
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePage;

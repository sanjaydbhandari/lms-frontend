import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import FAQ from "./FAQ";

const HomePage = ({ children }) => {
  return (
    <HomeLayout>
      <div className="flex flex-col justify-center items-center gap-20 ">
        {/* Hero Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:mx-16 min-h-[90vh] pt-16 pb-10">
          <div className="md:w-1/2 w-5/6 md:space-y-6 space-y-4">
            <div className="title flex flex-wrap gap-2 md:gap-4">
              <h1 className="font-semibold text-xl md:text-5xl">
                Start Upskilling With Our
              </h1>
              <span className="text-yellow-600 text-3xl md:text-5xl font-bold">
                &lt;FOCUSED&gt;Courses
              </span>
            </div>
            <p className="text-sm md:text-xl text-gray-200">
              SanjayKoding Skills is your partner in effective upskilling. Get
              more value for time and resources you invest, with job-ready
              courses powered by high-technology, accessible for everyone!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between md:justify-start w-full">
              <Link to="/courses" className="w-full md:w-fit">
                <button className="w-full bg-yellow-500 text-nowrap hover:bg-yellow-600 px-5 py-3 rounded-lg font-semibold cursor-pointer text-lg transition-all ease-in-out">
                  Explore Courses
                </button>
              </Link>
              <Link to="/contact" className="w-full md:w-fit">
                <button className="w-full border-yellow-600 text-nowrap border-2 hover:bg-yellow-600 px-5 py-3 rounded-lg font-semibold cursor-pointer text-lg transition-all ease-in-out">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="w-3/4 md:w-1/2 flex justify-center items-center">
            <img
              src="https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals"
              alt="Courses showcase"
              className="rounded-tl-full rounded-t-full"
            />
          </div>
        </div>

        {/* Banner Section */}
        <div className="banner flex flex-col gap-10 justify-center w-full py-10">
          <p className="text-center text-5xl text-2xl font-bold mb-6">
            On a mission to teach Millions
          </p>
          <div className="flex justify-center">
            <img
              src="https://idigitize.co/assets/images/landingmain1.webp"
              alt="Mission banner"
              className="max-w-full"
            />
          </div>
        </div>

        {/* Placement Current batch */}
        <div className="rounded-2xl shadow-lg bg-gray-900 ">
          <div className="w-full text-white px-6 py-12 flex flex-col items-center justify-center text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              New <span className="text-yellow-400 ">PLACEMENT PREP</span> Batch
              🔥
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-200">
              Sigma 7.0:{" "}
              <span className="text-white">DSA + Development + Aptitude</span>
            </p>
            <p className="text-lg text-gray-300">
              Start your placement preparation today!
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-black font-bold py-3 px-6 rounded-lg text-lg">
              Explore More
            </button>
          </div>
        </div>

        {/* FAQ */}
        <FAQ/>
      </div>
    </HomeLayout>
  );
};

export default HomePage;

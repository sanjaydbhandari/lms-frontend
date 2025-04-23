import HomeLayout from "../Layout/HomeLayout";
import Carousel from "../Components/Carousel"


const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col items-center text-white">
        <div className="flex flex-col justify-center items-center w-fit">
          <div className="flex items-center justify-between gap-5 h-screen">
            {/* Left section */}
            <section className="w-1/2 space-y-10">
              <h1 className="text-5xl text-yellow-500 font-semibold">
                Affordable and quality education
              </h1>
              <p className="text-xl text-gray-200">
                Our goal is to provide affordable and quality education to the
                world. We are providing the platform for aspiring teachers and
                students to share their skills, creativity and knowledge to
                empower each other and contribute to growth.
              </p>
            </section>

            {/* Right Image */}
            <div className="w-1/2 flex justify-center">
              <img
                className="mix-blend-color-dodge drop-shadow-2xl rounded-full shadow-lg w-3/4"
                src="https://img.freepik.com/free-vector/education-tree-concept_1284-10861.jpg?t=st=1744189998~exp=1744193598~hmac=d7c4ac59e57a95e11a77dc6d596e2609564a05856c26ab08ad72e81c0a43d891&w=826"
                alt=""
              />
            </div>
          </div>

          {/* Auto Carousel + Quote */}
          <div className="my-16 flex items-center justify-center">
            <div className="w-1/2 flex justify-center items-center mb-20">
            <Carousel /></div>

            {/* Quote Section */}
            <div className="w-1/2 flex justify-center items-center px-16">
              <h1 className="font-bold text-3xl flex flex-col">
                “There is no end to education. It is not that you read a book,
                pass an examination, and finish with education. The whole of
                life, from the moment you are born to the moment you die, is a
                process of learning.”
                <span className="font-thin text-end leading-10 text-xl">
                  — Jiddu Krishnamurti
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;

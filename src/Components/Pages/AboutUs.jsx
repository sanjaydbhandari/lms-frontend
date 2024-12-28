import React from "react";
import HomeLayout from "../Layout/HomeLayout";

const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col w-screen text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education{" "}
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is tp provide affordable and quality education to the
              world. we are providing the platform for the aspiring teacher and
              student to share their skills, creativity and knowledge to each
              other to empower and contribution in growth.
            </p>
          </section>
          <div className="w-1/2">
            <img
              className="mix-blend-color-dodge drop-shadow-2xl"
              src="https://w7.pngwing.com/pngs/275/188/png-transparent-education-school-icon-children-education-infographic-child-text-thumbnail.png"
              alt=""
            />
          </div>
        </div>
        <div className="m-auto my-16 flex">
          <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="rounded-box"
              />
            </div>
          </div>
          <div className="flex justify-center items-center px-16">
            <h1 className="font-bold text-3xl flex flex-col">
              “There is no end to education. It is not that you read a book,
              pass an examination, and finish with education. The whole of life,
              from the moment you are born to the moment you die, is a process
              of learning.”
              <span className="font-thin text-end leading-10 text-xl">
                — Jiddu Krishnamurti
              </span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;

import React from "react";
import heroImage from "../assets/heroImage.png";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white flex flex-col justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-cyan-400">
            Frontend React Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md font-semibold mx-auto md:mx-0">
            Hi, I am a frontend react developer skilled in HTML, CSS,
            JavaScript, React, TailwindCSS. Here you can find some of the
            projects I have worked on.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="Projects"
              smooth
              duration={600}
              className="group w-fit bg-gradient-to-l from-blue-600 to-blue-800 px-6 py-3 my-2 flex items-center rounded-md cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 pl-2 duration-200">
                <IoMdArrowDropright size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={heroImage}
            alt="profile"
            className="w-2/3 md:w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

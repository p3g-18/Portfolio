import React from "react";
import photo from "../assets/heroImage.png";
import { IoMdArrowDropright } from "react-icons/io";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">I'm Parth Goswami</h2>
          <p className="text-gray-500 py-4 max-w-md font-semibold">
            Hi, I am a frontend developer skilled in HTML, CSS, JavaScript,
            React, TailwindCSS. Here you can find some of the projects I have
            worked on.
          </p>
          <div className=" ">
            <button className=" group w-fit bg-gradient-to-l from-blue-600 to-blue-800 px-6 py-3 my-2 flex items-center rounded-md cursor-pointer ">
              Portfolio
              <span className="group-hover:rotate-90 pl-2 duration-200">
                <IoMdArrowDropright size={25} />
              </span>
            </button>
          </div>
        </div>

        <div className="w-[40%] h-3/2 rounded-3xl bg-gradient-to-b from-black via-black to-gray-800  m-10 md:ma">
          <img
            src={photo}
            alt="profile"
            className=" h-full relative rounded-2xl mx-auto  md:w-full  "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;

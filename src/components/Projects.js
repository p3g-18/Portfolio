import React from "react";
import mutube from "../assets/Projects/mutube.png";
import food from "../assets/Projects/Food_Ordering_App.png";
import movielist from "../assets/Projects/movielist.png";

const Projects = () => {
  return (
    <div
      name="Projects"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center md:text-left">
        <div>
          <h1 className="text-5xl  inline-block  border-b-4 border-gray-500">
            Projects
          </h1>
          <p className="py-4 text-lg">
            Check out some of the projects I have worked on.
          </p>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-center p-4">
              <img
                className=" h-64 md:h-96 w-full md:w-1/2 object-cover rounded-lg"
                src={movielist}
                alt="MovieList"
              />
              <div className="md:ml-4 mt-4 md:mt-0 text-left">
                <h2 className="text-4xl font-bold">MovieList</h2>
                <p className="text-lg mt-2">
                  MovieList is a dynamic movie database platform featuring
                  Firebase-powered authentication and Gemini AI-driven search
                  functionality. Users can securely sign in, search for movies,
                  and explore detailed descriptions, ratings, and trailers,
                  providing a comprehensive film discovery experience.
                </p>
                <div className="flex flex-wrap gap-2 py-2">
                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    React
                  </button>

                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    Tailwind
                  </button>

                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    React-Router
                  </button>

                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    Redux
                  </button>
                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    Firebase
                  </button>
                </div>
                <div className="px-1/2 items-center">
                  <a
                    href="https://github.com/p3g-18/movies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <button className="  font-semibold shadow-md rounded-xl bg-blue-600 w-50 p-2 m-4 hover:animate-pulse hover:bg-orange-500 duration-500">
                      Github Repo
                    </button>
                  </a>
                  <a
                    href="https://movielist-70ea1.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className=" font-semibold shadow-md rounded-xl bg-blue-600 w-50 p-2 m-4 hover:animate-pulse hover:bg-orange-500 duration-500">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center p-4">
              <img
                className=" h-64 md:h-96 w-full md:w-1/2 object-cover rounded-lg"
                src={mutube}
                alt="mutube"
              />
              <div className="md:ml-4 mt-4 md:mt-0 text-left">
                <h2 className="text-4xl font-bold">Mutube</h2>
                <p className="text-lg mt-2">
                  Mutube is a YouTube clone built with React, Tailwind CSS for
                  styling, and Redux for state management. It features an
                  optimized search bar with caching to enhance performance, a
                  dark mode toggle, a comment section, and live chat implemented
                  using API polling. This project showcases advanced frontend
                  development skills and efficient state management, providing a
                  smooth and responsive user experience.
                </p>
                <div className="flex flex-wrap gap-2 py-2">
                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    React
                  </button>

                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    Tailwind
                  </button>

                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    React-Router
                  </button>

                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    Redux
                  </button>
                </div>
                <div className="px-1/2 items-center">
                  <a
                    href="https://github.com/p3g-18/MUTUBE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <button className="  font-semibold shadow-md rounded-xl bg-blue-600 w-50 p-2 m-4 hover:animate-pulse hover:bg-orange-500 duration-500">
                      Github Repo
                    </button>
                  </a>
                  <a
                    href="https://mutubee.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className=" font-semibold shadow-md rounded-xl bg-blue-600 w-50 p-2 m-4 hover:animate-pulse hover:bg-orange-500 duration-500">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center p-4 py-6">
              <img
                className=" h-64 md:h-96 w-full md:w-1/2 object-cover rounded-lg"
                src={food}
                alt="food ordering app"
              />
              <div className="md:ml-4 mt-4 md:mt-0 text-left py-2">
                <h2 className="text-4xl font-bold">Food Ordering App</h2>
                <p className="text-lg mt-2">
                  A food ordering application that solidified my skills in
                  working with live APIs. This project enhanced my understanding
                  of Redux for state management, React Router,HOC,HMR. And
                  Features like Shimmer for better UX . It includes features
                  like dynamic menu displays, and real-time restaurant list
                  using live swiggy api.
                </p>
                <div className="flex flex-wrap gap-2 py-2">
                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    React
                  </button>

                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    Tailwind
                  </button>

                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    React-Router
                  </button>

                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    Redux
                  </button>
                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    Parcel
                  </button>
                  <button className=" bg-purple-500 text-black rounded-lg p-2">
                    babel
                  </button>
                </div>
                <div className="px-1/2 items-center">
                  <a
                    href="https://github.com/p3g-18/Food_Ordering_App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <button className="  font-semibold shadow-md rounded-xl bg-blue-600 w-50 p-2 m-4 hover:animate-pulse hover:bg-orange-500 duration-500">
                      Github Repo
                    </button>
                  </a>
                  <button className=" font-semibold shadow-md rounded-xl bg-blue-600 w-50 p-2 m-4 hover:animate-pulse hover:bg-orange-500 duration-500">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

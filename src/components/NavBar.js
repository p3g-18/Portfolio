import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="font-signature text-4xl">Parth</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-110 duration-200 capitalize"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className=" cursor-pointer z-10 pr-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0  left-0 w-full  h-screen bg-gradient-to-b from-black to bg-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-4 cursor-pointer font-bold text-4xl text-gray-500 hover:scale-110 duration-200 capitalize"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

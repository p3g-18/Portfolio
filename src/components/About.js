import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center md:text-left">
        <div className="pb-8 ">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 ">
            A little bit about me
          </p>
        </div>
        <p className="text-lg mt-10">
          Hi! I'm Parth, a passionate Web Developer based in Pune, originally
          from Navsari, Gujarat. I'm a recent Information Technology graduate
          but forever a student of the industry. I specialize in frontend,
          primarily in ReactJs and JavaScript, but love building with whatever
          tools are right for the job.
        </p>
        <br />
        <p className="text-lg">
          Currently, I am seeking opportunities to grow as a developer with a
          dynamic team that values creativity, strategic innovation, and a
          commitment to excellence. I am eager to contribute to projects that
          challenge my skills and allow me to grow alongside like-minded
          professionals in a supportive and forward-thinking environment.
        </p>
        <br />
        <p className="text-lg">
          Outside of work, you'll find me in a gym or inside a video game. Tell
          me a game you love because I'm always down for a good gaming session!
          But anyway, whether it's front-end aesthetics or robust back-end
          systems, I create solutions that not only work well but also delight
          users. Let's connect.
        </p>
      </div>
    </div>
  );
};

export default About;

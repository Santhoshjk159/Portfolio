// src/pages/About.jsx
import React from "react";
import imge from "../asset/santhosh.png";
import resume from "../asset/Santhosh_JK.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 px-4 md:px-20 lg:px-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-15">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            src={imge}
            alt="Santhosh J K"
            className="w-3/4 sm:w-1/2 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-teal-400 mb-4">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hello! I'm <span className="text-teal-400">Santhosh J K</span>, a
            passionate{" "}
            <span className="text-purple-400">Front-end Web Developer </span>
            and{" "}
            <span className="text-indigo-400">Biotechnology Enthusiast</span>. I
            love solving complex problems, creating innovative solutions, and
            exploring the intersection of technology and biology.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I specialize in <span className="text-teal-400">Java(DSA),</span>{" "}
            and <span className="text-purple-400">Web Development</span>. I’m
            constantly learning and applying my skills to impactful projects
            that address real-world challenges.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m eager to expand my expertise, explore emerging technologies, and
            contribute to impactful software development projects.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href={resume}
              download
              className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

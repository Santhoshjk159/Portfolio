import React from "react";
import { Typewriter } from "react-simple-typewriter";
import photo from "../asset/photo.png";

const Home = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-900 opacity-25 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5 pointer-events-none"></div>

      {/* Photo Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-16 xl:pl-32 mb-8 md:mb-0">
        <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-96 md:h-[28rem] xl:w-[30rem] xl:h-[32rem] bg-gradient-to-b from-transparent to-gray-900 rounded-xl overflow-hidden shadow-2xl relative">
          <img
            src={photo}
            alt="Santhosh"
            className="object-cover w-full h-full mix-blend-lighten" // Makes the photo blend with the background
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 w-full md:w-1/2 text-center md:text-left space-y-6 sm:space-y-8 md:space-y-10 flex flex-col items-center md:items-start">
        {/* Typewriter Effect */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Hey, This is <span className="text-teal-400">Santhosh</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-medium">
          I am a{" "}
          <span className="text-purple-400">
            <Typewriter
              words={[
                "Web-Developer 💻",
                "Java Programmer 👨‍💻",
                "Biotechnology Enthusiast 🔬",
                "UG @ NIT-AP 👨‍🎓",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        {/* Glassmorphism Card */}
        <div className="backdrop-blur-xl bg-white/10 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-700 max-w-sm sm:max-w-md">
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Passionate about blending technology and biotechnology to create
            innovative solutions. Let's build something amazing together!
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/myprojects"
            className="w-full sm:w-auto px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition transform hover:scale-105 text-center"
          >
            View My Projects
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition transform hover:scale-105 text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

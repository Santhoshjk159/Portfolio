import React, { useState, useEffect } from "react";
import poster from "../asset/poster.png";
import bmw from "../asset/bmw.png";
import news from "../asset/news247.png";

function Experience() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* My Projects Section */}
      <div className="bg-gray-900 text-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
          My Works
        </h2>

        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-8 hover:scale-105 transform transition-all duration-300">
          {/* Image */}
          <img
            src={bmw}
            alt="BookMyWay – Travel Planner Application"
            className="w-full md:w-1/3 h-80 object-cover md:h-auto rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
          />
          {/* Content */}
          <div className="p-6 md:w-2/3">
            <h3 className="text-2xl font-semibold mb-2 text-teal-400">
              BookMyWay – Travel Planner Application
            </h3>
            <p className="text-gray-400 mb-4">
              Built a travel planning app with ReactJS, allowing users to input
              trip details and view a cost breakdown for per-person and total
              expenses.
            </p>
            <p className="text-gray-400 mb-4">
              Tools: ReactJS, TailwindCSS, React Router
            </p>
            <a
              href="https://github.com/Santhoshjk159/BookMyWay"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-8 hover:scale-105 transform transition-all duration-300">
          {/* Image */}
          <img
            src={news}
            alt="News24X7 – Personalized News Dashboard"
            className="w-full md:w-1/3 h-80 object-cover md:h-auto rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
          />
          {/* Content */}
          <div className="p-6 md:w-2/3">
            <h3 className="text-2xl font-semibold mb-2 text-teal-400">
              News24X7 – Personalized News Dashboard
            </h3>
            <p className="text-gray-400 mb-4">
              Built a responsive news dashboard with ReactJS, fetching real-time
              news and enabling users to filter articles by category or
              preference.
            </p>
            <p className="text-gray-400 mb-4">
              Tools: ReactJS, TailwindCSS, News API
            </p>
            <a
              href="https://github.com/Santhoshjk159/News24X7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {!scrolling && (
        <div className="absolute bottom-8 flex flex-col items-center space-y-2">
          <div className="w-8 h-8 border-4 border-teal-400 rounded-full animate-bounce">
            ⬇
          </div>
          <p className="text-gray-400 text-sm">Scroll Down</p>
        </div>
      )}

      {/* Design Works Section */}
      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-semibold text-teal-400 text-center mb-10">
          Design Works & Posters
        </h2>

        {/* Big Poster */}
        <div className="flex justify-center">
          <a
            href="https://drive.google.com/drive/folders/1JLybGMw84Q1pt69E0as-sc0CXvlWdIMq"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden w-3/5 md:w-2/4 lg:w-1/3 cursor-pointer transition-transform transform hover:scale-105"
          >
            <img
              src={poster}
              alt="Design Works"
              className="w-full h-auto object-cover rounded-lg shadow-xl transition-transform duration-30 ease-in-out"
            />
            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 text-white text-3xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
              Click to View More
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Experience;

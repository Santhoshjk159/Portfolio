// src/pages/About.jsx
import React from "react";
import { Download, Award, Code, Beaker } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import imge from "../asset/santhosh.png";
import resume from "../asset/Santhosh_JK.pdf";

const About = () => {
  const { isDark, colors } = useTheme();

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Proficient in Java, React, and modern web technologies",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Beaker className="w-6 h-6" />,
      title: "Biotechnology Student",
      description: "Bridging technology and biological sciences",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about creating innovative solutions",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="about"
      className={`${colors.background} ${colors.text} min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header - Compact */}
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent mb-4 animate-fade-in leading-tight`}
          >
            ABOUT ME
          </h1>
          <div
            className={`w-24 sm:w-32 h-1 bg-gradient-to-r ${colors.primary} mx-auto rounded-full mb-3 sm:mb-4`}
          ></div>
        </div>

        {/* Main Content Grid - Compact mobile-first layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-10">
          {/* Enhanced Image Section - Compact */}
          <div className="flex justify-center animate-slide-up order-1 lg:order-2">
            <div className="relative group w-full max-w-sm">
              {/* Enhanced glowing background effect */}
              <div
                className={`absolute -inset-3 sm:-inset-4 bg-gradient-to-r ${colors.primary} opacity-20 sm:opacity-25 blur-xl sm:blur-2xl rounded-full group-hover:opacity-30 sm:group-hover:opacity-35 transition-all duration-700 animate-pulse`}
              ></div>

              {/* Compact circular image container */}
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-700 mx-auto"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={imge}
                  alt="Santhosh J K"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{
                    objectPosition: "center 30%",
                    objectFit: "cover",
                    transform: "scale(0.8)",
                  }}
                />
              </div>

              {/* Compact floating badges */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 animate-bounce-slow">
                <div
                  className={`${colors.card} ${colors.border} rounded-full p-2 shadow-lg backdrop-blur-sm group-hover:scale-110 transition-all duration-500`}
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
              </div>

              <div
                className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 animate-bounce-slow"
                style={{ animationDelay: "1s" }}
              >
                <div
                  className={`${colors.card} ${colors.border} rounded-full p-2 shadow-lg backdrop-blur-sm group-hover:scale-110 transition-all duration-500`}
                >
                  <Beaker className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
              </div>

              {/* Minimalist decorative elements */}
              <div
                className="absolute top-1/4 -left-2 sm:-left-3 animate-pulse"
                style={{ animationDelay: "2s" }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
              </div>

              <div
                className="absolute bottom-1/4 -right-2 sm:-right-3 animate-pulse"
                style={{ animationDelay: "3s" }}
              >
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section - Compact */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up order-2 lg:order-1">
            {/* Main description with compact mobile styling */}
            <div className="space-y-3 sm:space-y-4">
              <div
                className={`${colors.card} ${colors.border} p-5 sm:p-6 rounded-2xl shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group`}
              >
                <p
                  className={`${colors.textSecondary} text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 group-hover:${colors.text} transition-colors duration-300`}
                >
                  Hi! I'm{" "}
                  <span className="text-emerald-400 font-bold text-base sm:text-lg bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Santhosh J K
                  </span>
                  , an undergraduate student with a strong foundation in{" "}
                  <span className="text-emerald-400 font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Data Structures and Algorithms
                  </span>
                  , and hands-on experience in{" "}
                  <span className="text-purple-400 font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Web Development
                  </span>{" "}
                  and{" "}
                  <span className="text-indigo-400 font-semibold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                    Machine Learning
                  </span>
                  .
                </p>

                <p
                  className={`${colors.textSecondary} text-sm sm:text-base leading-relaxed group-hover:${colors.text} transition-colors duration-300`}
                >
                  I enjoy building responsive user interfaces and applying ML
                  models to solve real-world problems. I am commited in writing
                  clean, reliable, and maintainable code that follows best
                  practices.
                </p>
              </div>
            </div>

            {/* Compact Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://drive.google.com/file/d/1RGGNOx8696gdf5DfCS3xZaJxCbuSXM0o/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${colors.primary} text-white font-bold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center space-x-2 text-sm sm:text-base`}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                <span>View Resume</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
              </a>

              <a
                href="#myprojects"
                className={`group relative overflow-hidden px-5 sm:px-6 py-2.5 sm:py-3 ${
                  isDark ? "bg-slate-800/90" : "bg-gray-200/90"
                } backdrop-blur-sm ${
                  colors.text
                } font-bold rounded-xl hover:${
                  isDark ? "bg-slate-700/90" : "bg-gray-300/90"
                } transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  isDark
                    ? "border border-slate-600 hover:border-emerald-400"
                    : "border border-gray-300 hover:border-emerald-400"
                } shadow-lg text-center text-sm sm:text-base`}
              >
                <span className="relative z-10">View My Work</span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    isDark
                      ? "from-emerald-500/20 to-cyan-500/20"
                      : "from-emerald-600/20 to-cyan-600/20"
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl`}
                ></div>
              </a>
            </div>
          </div>
        </div>

        {/* Compact Call to Action */}
        <div
          className={`${colors.card} ${colors.border} p-5 sm:p-6 lg:p-7 rounded-2xl backdrop-blur-xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl"></div>
          
          <div className="relative z-10">
            <h3
              className={`text-lg sm:text-xl lg:text-2xl font-bold ${colors.text} mb-3 sm:mb-4 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
            >
              Let's Create Something Amazing Together
            </h3>
            <p
              className={`${colors.textSecondary} mb-4 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed`}
            >
              Ready to bring innovative ideas to life through the perfect blend of
              technology and creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#contact"
                className={`px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${colors.primary} text-white font-bold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/30 text-sm sm:text-base`}
              >
                Get In Touch
              </a>
              <a
                href="#experience"
                className={`px-5 sm:px-6 py-2.5 sm:py-3 ${
                  isDark ? "bg-slate-800/90" : "bg-gray-200/90"
                } backdrop-blur-sm ${
                  colors.text
                } font-bold rounded-xl hover:${
                  isDark ? "bg-slate-700/90" : "bg-gray-300/90"
                } transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  isDark
                    ? "border border-slate-600 hover:border-emerald-400"
                    : "border border-gray-300 hover:border-emerald-400"
                } shadow-lg text-sm sm:text-base`}
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

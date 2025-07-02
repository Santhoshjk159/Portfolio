import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Zap,
  Users,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import profilePhoto from "../asset/santhoshnobg.png";
import resume from "../asset/Santhosh_JK.pdf";

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { isDark, colors } = useTheme();

  const typewriterWords = [
    "Full Stack Developer",
    "Java Programmer",
    "Pre-final year @ NIT AP",
    "Software Biotech Alchemist",
    "Ex-Intern @ VDart",
  ];

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentWord = typewriterWords[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
          }
        }
      },
      isDeleting ? 80 : 120
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, typewriterWords]);

  return (
    <section
      className={`relative ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      } ${
        colors.text
      } min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ease-in-out`}
    >
      {/* Subtle Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Minimal gradient orbs for depth */}
        <div
          className={`absolute top-1/4 left-1/4 w-72 h-72 ${
            isDark ? "bg-emerald-400/5" : "bg-emerald-400/3"
          } rounded-full blur-3xl animate-pulse transition-all duration-1000`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 ${
            isDark ? "bg-cyan-400/5" : "bg-cyan-400/3"
          } rounded-full blur-3xl animate-pulse transition-all duration-1000`}
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Minimal floating elements */}
        <div
          className={`absolute top-20 left-10 opacity-10 transition-all duration-1000 ${
            isVisible ? "animate-bounce" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "0.5s", animationDuration: "4s" }}
        >
          <Code className="w-6 h-6 text-emerald-400" />
        </div>
        <div
          className={`absolute bottom-32 right-20 opacity-10 transition-all duration-1000 ${
            isVisible ? "animate-bounce" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "1.5s", animationDuration: "5s" }}
        >
          <Zap className="w-5 h-5 text-cyan-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Section - Takes 7 columns */}
          <div
            className={`order-2 lg:order-1 lg:col-span-7 text-center lg:text-left space-y-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Hero Badge */}

            {/* Main Heading with Enhanced Styling */}
            <div className="space-y-4">
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <span className="block">Hi, I'm</span>
                <span
                  className={`block bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300`}
                >
                  Santhosh J K
                </span>
              </h1>

              {/* Fixed Typewriter Section with Proper Alignment */}
              <div
                className={`relative overflow-hidden transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "0.6s" }}
              >
                <div className="flex items-center justify-center lg:justify-start">
                  <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed flex flex-wrap items-center justify-center lg:justify-start">
                    <span className={`${colors.textSecondary} mr-2`}>A</span>
                    <span
                      className={`bg-gradient-to-r ${colors.secondary} bg-clip-text text-transparent font-semibold min-w-[200px] sm:min-w-[280px] lg:min-w-[320px] text-left relative`}
                    >
                      <span className="block overflow-hidden whitespace-nowrap">
                        {currentText}
                        <span className="animate-pulse text-cyan-400 ml-1">
                          |
                        </span>
                      </span>
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div
              className={`relative max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  isDark
                    ? "from-emerald-500/10 to-cyan-500/10"
                    : "from-emerald-600/10 to-cyan-600/10"
                } rounded-2xl blur-sm`}
              ></div>
              <div
                className={`relative ${colors.card} p-4 sm:p-6 rounded-2xl shadow-2xl ${colors.border} backdrop-blur-sm transition-all duration-300 hover:shadow-3xl`}
              >
                <p
                  className={`text-sm sm:text-base lg:text-lg ${colors.textSecondary} leading-relaxed`}
                >
                  Bridging the gap between{" "}
                  <span className="text-emerald-400 font-semibold">
                    technology
                  </span>{" "}
                  and{" "}
                  <span className="text-cyan-400 font-semibold">
                    biotechnology
                  </span>
                  .
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Crafting innovative web solutions with modern technologies and
                  a passion for{" "}
                  <span className="text-blue-400 font-semibold">
                    problem-solving
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 justify-center lg:justify-start pt-4 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <a
                href="/myprojects"
                className={`group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${colors.primary} text-white font-semibold rounded-2xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25`}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">View My Work</span>
                </span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>

              <a
                href="/contact"
                className={`group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 ${
                  isDark ? "bg-slate-800/50" : "bg-white/50"
                } backdrop-blur-sm ${
                  colors.text
                } font-semibold rounded-2xl hover:${
                  isDark ? "bg-slate-700/60" : "bg-white/70"
                } transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                  isDark
                    ? "border border-slate-600/50 hover:border-slate-500"
                    : "border border-gray-300/50 hover:border-gray-400"
                } shadow-xl hover:shadow-2xl`}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Let's Connect</span>
                </span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    isDark
                      ? "from-emerald-500/5 to-cyan-500/5"
                      : "from-emerald-600/5 to-cyan-600/5"
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div
              className={`flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-4 sm:pt-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <a
                href="https://github.com/Santhoshjk159"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 sm:p-4 ${colors.card} rounded-2xl ${colors.border} hover:border-gray-500/50 hover:bg-gray-500/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
              >
                <Github
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.textMuted} group-hover:text-gray-300 transition-colors duration-300`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jksanthosh159/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 sm:p-4 ${colors.card} rounded-2xl ${colors.border} hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
              >
                <Linkedin
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.textMuted} group-hover:text-blue-400 transition-colors duration-300`}
                />
              </a>
              <a
                href="mailto:jksanthosh159@gmail.com"
                className={`group p-3 sm:p-4 ${colors.card} rounded-2xl ${colors.border} hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
              >
                <Mail
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.textMuted} group-hover:text-cyan-400 transition-colors duration-300`}
                />
              </a>
              <a
                href={resume}
                download
                className={`group p-3 sm:p-4 ${colors.card} rounded-2xl ${colors.border} hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
              >
                <Download
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.textMuted} group-hover:text-emerald-400 transition-colors duration-300`}
                />
              </a>
            </div>
          </div>

          {/* Professional Rectangular Photo Section - Takes 5 columns */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              {/* Clean Rectangular Photo Container with Color Animation */}
              <div className="relative group">
                {/* Animated color border background */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 opacity-75 blur-sm animate-spin-slow group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Secondary animated border for richer effect */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-50 blur-xs animate-pulse group-hover:opacity-75 transition-opacity duration-300"></div>

                {/* Main rectangular photo with enhanced positioning for face visibility */}
                <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[480px] overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <img
                    src={profilePhoto}
                    alt="Santhosh J K - Full Stack Developer"
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                    style={{
                      objectPosition: "center 20%", // Adjusted to show face better
                      filter: "brightness(1.1) contrast(1.05) saturate(1.05)",
                    }}
                  />

                  {/* Professional overlay gradient */}
                  <div
                    className={`absolute inset-0 ${
                      isDark
                        ? "bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"
                        : "bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"
                    } transition-opacity duration-300 group-hover:opacity-75`}
                  ></div>

                  {/* Enhanced border glow with color animation */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                      isDark
                        ? "border-transparent group-hover:border-emerald-500/50"
                        : "border-transparent group-hover:border-emerald-400/60"
                    }`}
                  ></div>
                </div>

                {/* Enhanced floating glow effects */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${
                    isDark
                      ? "from-emerald-500/10 via-cyan-500/10 to-blue-500/10"
                      : "from-emerald-400/8 via-cyan-400/8 to-blue-400/8"
                  } rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 animate-pulse`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Home;

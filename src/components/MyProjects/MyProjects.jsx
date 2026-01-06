import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Eye, Calendar, ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import poster from "../asset/poster.png";
import bmw from "../asset/bmw.png";
import news from "../asset/news247.png";
import campuscruze from "../asset/campuscruze.jpg";
import ddi from "../asset/ddi.png";

function MyProjects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { isDark, colors } = useTheme();

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const projects = [
    {
      id: 1,
      title: "CampusCruze – Campus Ride Share",
      description:
        "A modern full-stack ride-sharing platform designed for university campuses. Enables students to securely create and join rides, coordinate via real-time chat, and manage their ride history. Features include smart ride matching, JWT auth, admin analytics, and mobile-first UI.",
      image: campuscruze,
      technologies: [
        "ReactJS",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MySQL",
        "Socket.IO",
      ],
      githubLink: "https://github.com/Santhoshjk159/RideShare",
      liveLink: null,
      category: "Full Stack Development",
      gradient: "from-indigo-600 to-violet-700",
    },
    {
      id: 2,
      title: "Drug–Drug Interaction Severity Prediction",
      description:
        "A machine learning project that predicts the severity of drug–drug interactions using molecular and physicochemical properties of drugs. The system leverages data preprocessing, Random Forest classification, and visual analytics to identify potentially harmful drug combinations and improve patient safety.",
      image: ddi,
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Machine Learning",
      ],
      githubLink: "https://github.com/Santhoshjk159/DDI",
      liveLink: null,
      category: "Machine Learning / Healthcare",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: 3,
      title: "BookMyWay – Travel Planner",
      description:
        "A comprehensive travel planning application built with ReactJS that allows users to input trip details and view detailed cost breakdowns. Features include itinerary planning, budget tracking, and expense categorization.",
      image: bmw,
      technologies: ["ReactJS", "TailwindCSS", "React Router", "JavaScript"],
      githubLink: "https://github.com/Santhoshjk159/BookMyWay",
      liveLink: null,
      category: "Web Development",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 4,
      title: "News24X7 – News Dashboard",
      description:
        "A responsive news dashboard application that fetches real-time news from multiple sources and enables users to filter articles by category, search for specific topics, and save favorite articles.",
      image: news,
      technologies: ["ReactJS", "TailwindCSS", "News API", "JavaScript"],
      githubLink: "https://github.com/Santhoshjk159/News24X7",
      liveLink: null,
      category: "Web Development",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section
      id="myprojects"
      className={`${colors.background} ${colors.text} transition-all duration-500 min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-8`}
    >
      {/* Hero Section - More Compact */}
      <div className="relative px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent mb-3 animate-fade-in`}
          >
            MY WORKS
          </h1>
          <div
            className={`w-24 h-1 bg-gradient-to-r ${colors.primary} mx-auto rounded-full mb-4`}
          ></div>
          <p
            className={`${colors.textSecondary} text-base max-w-2xl mx-auto leading-relaxed`}
          >
            Innovative solutions blending creativity with technical expertise
          </p>
        </div>
      </div>

      {/* Project Gallery - Auto-rotating Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Project Display */}
          <div
            className={`${colors.card} ${colors.border} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative overflow-hidden h-64 sm:h-80 lg:h-96">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h3
                  className={`text-2xl sm:text-3xl font-bold ${colors.text} mb-4 leading-tight`}
                >
                  {projects[currentProject].title}
                </h3>

                <p
                  className={`${colors.textSecondary} text-base leading-relaxed mb-6`}
                >
                  {projects[currentProject].description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className={`${colors.text} font-semibold text-sm mb-3`}>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map(
                      (tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 ${colors.surfaceVariant} ${colors.textSecondary} rounded-full text-xs font-medium hover:${colors.cardHover} transition-colors duration-300`}
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={projects[currentProject].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${colors.primary} text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>

                  {projects[currentProject].liveLink && (
                    <a
                      href={projects[currentProject].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 ${
                        isDark ? "bg-slate-800/80" : "bg-gray-200/80"
                      } backdrop-blur-sm ${
                        colors.text
                      } font-semibold rounded-xl hover:${
                        isDark ? "bg-slate-700/80" : "bg-gray-300/80"
                      } transition-all duration-300 transform hover:scale-105 ${
                        isDark
                          ? "border border-slate-600"
                          : "border border-gray-300"
                      } shadow-lg`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevProject}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 ${colors.card} ${colors.border} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-30`}
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>

          <button
            onClick={nextProject}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 ${colors.card} ${colors.border} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-30`}
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? `bg-gradient-to-r ${colors.primary}`
                    : `${colors.surfaceVariant} hover:${colors.cardHover}`
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;

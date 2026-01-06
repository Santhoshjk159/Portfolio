import React, { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Users,
  Calendar,
  MapPin,
  Trophy,
  Building,
  ChevronRight,
  Star,
  Award,
  Code,
  Target,
  Zap,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import cauvery from "../asset/cauvery.png"

function Experience() {
  const { isDark, colors } = useTheme();
  const [activeSection, setActiveSection] = useState("all");

  const education = [
    {
      institution: "NIT Andhra Pradesh",
      degree: "B.Tech in Biotechnology",
      type: "Major",
      duration: "Aug 2023 - May 2027",
      cgpa: "8.74/10",
      logo: "https://nitandhra.ac.in/main/images/logo.png",
      description:
        "Strong foundation in Biotechnology with focus on biological sciences, research methodologies, and biotechnological applications.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      institution: "NIT Andhra Pradesh",
      degree: "Minor in Software Engineering",
      type: "Minor",
      duration: "Jan 2025 - May 2027",
      cgpa: "10/10",
      logo: "https://nitandhra.ac.in/main/images/logo.png",
      description:
        "Specialized training in programming, algorithms, software development, and modern web technologies.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      institution: "Cauvery Global Senior Secondary School",
      degree: "Class XII",
      type: "HSC",
      cgpa: "88.2%",
      logo: cauvery,
      description:
        "Built a strong foundation in mathematics, physics, and chemistry with consistent academic performance.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      institution: "Mahatma Gandhi Centenary Vidyalaya",
      degree: "Class X",
      type: "SSC",
      cgpa: "91.2%",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oUwHDef5WHVcJs0WzLzgpnaa_OmEfE9Eyg&s",
      description:
        "Achieved academic excellence across core subjects with a focus on conceptual understanding.",
      color: "from-pink-700 to-red-800",
    },
  ];

  const workExperience = {
    company: "VDart Inc.",
    role: "Web Development Intern",
    type: "On-site",
    duration: "May 2025 - June 2025",
    logo: "https://www.vdart.com/wp-content/uploads/2020/02/vdart.svg",
    achievements: [
      "Designed and developed internal web applications and dashboards to improve operations, enhance data visibility, and reduce reporting time by 40%, supporting faster decision-making.",
      "Identified workflow inefficiencies and contributed to internal tool development that improved process transparency, streamlined operations, and boosted productivity.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "PHP",
      "Tailwind CSS",
      "MySQL",
    ],
    color: "from-blue-500 to-indigo-600",
  };

  const positionsOfResponsibility = [
    {
      id: 1,
      organization: "Coding Club NIT Andhra Pradesh",
      role: "Joint Secretary",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEHrjcv_BzAgA/company-logo_200_200/B56Zixe0DJHUAI-/0/1755324306327?e=2147483647&v=beta&t=nHjmQJlRXZFIj2YJPlGFTWT4SQq94BMGoooTFleO7es",
      description:
        "Actively involved in problem-solving sessions and collaborative coding activities to strengthen core programming skills.",
      skills: ["Competitive Programming", "Problem Solving"],
      color: "from-blue-500 to-indigo-600",
    },

    {
      id: 2,
      organization: "Bhavisya Bharath Club, NIT Andhra Pradesh",
      role: "Joint Secretary",
      logo: "https://nitandhra.ac.in/main/images/clubs/clubs/Bhavisyabharat.png",
      description:
        "Contribute to youth-driven initiatives that promote sustainability, innovation, and responsible leadership beyond academics.",
      skills: ["Leadership", "Collaboration", "Social Impact"],
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="experience"
      className={`${colors.background} ${colors.text} min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Section Header - Compact */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent mb-4 leading-tight`}
          >
            MY JOURNEY
          </h1>
          <div
            className={`w-24 sm:w-32 h-1 bg-gradient-to-r ${colors.primary} mx-auto rounded-full mb-4`}
          ></div>
          <p
            className={`${colors.textSecondary} text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4`}
          >
            From biotechnology student to web developer - exploring the
            intersection of
            <span className="text-emerald-400 font-semibold"> science </span>
            and
            <span className="text-purple-400 font-semibold"> technology</span>
          </p>
        </div>

        {/* Filter Tabs - Compact */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {[
            { id: "all", label: "All", icon: Star },
            { id: "education", label: "Education", icon: GraduationCap },
            { id: "work", label: "Work", icon: Briefcase },
            { id: "leadership", label: "Positions", icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`group flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 text-sm sm:text-base ${
                activeSection === tab.id
                  ? `bg-gradient-to-r ${colors.primary} text-white shadow-lg shadow-emerald-500/30`
                  : `${colors.card} ${colors.border} ${colors.text} hover:${colors.cardHover} shadow-md`
              }`}
            >
              <tab.icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections - Optimized Layout */}
        <div className="space-y-6 sm:space-y-8">
          {/* Education Section */}
          {(activeSection === "all" || activeSection === "education") && (
            <div className="animate-slide-up">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/20 blur-lg rounded-full animate-pulse"></div>
                    <GraduationCap className="relative w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <h2
                    className={`text-xl sm:text-2xl lg:text-3xl font-bold ${colors.text} bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent`}
                  >
                    EDUCATION
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`group ${colors.card} ${colors.border} rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 animate-slide-up overflow-hidden relative`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Background decoration */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${edu.color} opacity-5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="relative group/logo">
                            <div
                              className={`absolute -inset-1 bg-gradient-to-r ${edu.color} opacity-20 blur-md rounded-full group-hover/logo:opacity-40 transition-opacity duration-500`}
                            ></div>
                            <div
                              className={`relative w-16 h-16 sm:w-18 sm:h-18 ${colors.surface} rounded-full p-3 shadow-lg ${colors.border} group-hover/logo:rotate-12 transition-transform duration-500 flex items-center justify-center overflow-hidden`}
                            >
                              <img
                                src={edu.logo}
                                alt="NIT Andhra Pradesh"
                                className="w-full h-full object-contain rounded-full"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.style.display = "none";
                                  e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-emerald-400 font-bold text-xl">NIT</div>`;
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 space-y-2">
                          <h3
                            className={`text-lg sm:text-xl font-bold ${colors.text} group-hover:text-emerald-400 transition-colors duration-300`}
                          >
                            {edu.institution}
                          </h3>
                          <p
                            className={`text-sm sm:text-base font-semibold ${colors.textSecondary} group-hover:${colors.text} transition-colors duration-300`}
                          >
                            {edu.degree}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 text-center sm:text-left">
                        <p
                          className={`${colors.textSecondary} text-sm leading-relaxed group-hover:${colors.text} transition-colors duration-300`}
                        >
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs">
                          {edu.duration && (
                            <div
                              className={`flex items-center space-x-2 ${colors.textMuted} group-hover:text-emerald-400 transition-colors duration-300`}
                            >
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">{edu.duration}</span>
                            </div>
                          )}
                          <div
                            className={`flex items-center space-x-2 ${colors.textMuted} group-hover:text-emerald-400 transition-colors duration-300`}
                          >
                            <Trophy className="w-4 h-4" />
                            <span className="font-medium">
                              Grades: {edu.cgpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Work Experience Section */}
          {(activeSection === "all" || activeSection === "work") && (
            <div className="animate-slide-up">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full animate-pulse"></div>
                    <Briefcase className="relative w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <h2
                    className={`text-xl sm:text-2xl lg:text-3xl font-bold ${colors.text} bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent`}
                  >
                    PROFESSIONAL EXPERIENCE
                  </h2>
                </div>
              </div>

              <div
                className={`group ${colors.card} ${colors.border} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 animate-slide-up overflow-hidden relative`}
              >
                {/* Background decoration */}
                <div
                  className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${workExperience.color} opacity-5 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700`}
                ></div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="relative group/logo">
                        <div
                          className={`absolute -inset-2 bg-gradient-to-r ${workExperience.color} opacity-20 blur-lg rounded-2xl group-hover/logo:opacity-40 transition-opacity duration-500`}
                        ></div>
                        <div
                          className={`relative w-18 h-18 sm:w-20 sm:h-20 ${
                            isDark ? "bg-white" : "bg-gray-50"
                          } rounded-2xl p-3 shadow-xl ${
                            colors.border
                          } group-hover/logo:rotate-6 transition-transform duration-500 flex items-center justify-center overflow-hidden`}
                        >
                          <img
                            src={workExperience.logo}
                            alt="VDart Inc."
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML =
                                '<div class="w-full h-full flex items-center justify-center text-blue-400 font-bold text-xl">V</div>';
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-bold ${colors.text} mb-2 group-hover:text-blue-400 transition-colors duration-300`}
                        >
                          {workExperience.company}
                        </h3>
                        <div
                          className={`inline-block px-4 py-2 bg-gradient-to-r ${workExperience.color} text-white text-sm font-bold rounded-full mb-3`}
                        >
                          {workExperience.role}
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                          <div
                            className={`flex items-center space-x-2 ${colors.textMuted} group-hover:text-blue-400 transition-colors duration-300`}
                          >
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">
                              {workExperience.duration}
                            </span>
                          </div>
                          <div
                            className={`flex items-center space-x-2 ${colors.textMuted} group-hover:text-blue-400 transition-colors duration-300`}
                          >
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">
                              {workExperience.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Achievements - Compact */}
                  <div className="space-y-4 mb-6">
                    <h4
                      className={`text-base font-bold ${colors.text} flex items-center space-x-2`}
                    >
                      <Target className="w-4 h-4 text-yellow-400" />
                      <span>Key Achievements</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {workExperience.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`${colors.surface} ${colors.border} rounded-xl p-3 hover:${colors.cardHover} transition-all duration-300 group/achievement`}
                        >
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-1.5 flex-shrink-0 group-hover/achievement:scale-150 transition-transform duration-300"></div>
                            <p
                              className={`${colors.textSecondary} text-sm leading-relaxed group-hover/achievement:${colors.text} transition-colors duration-300 line-clamp-3`}
                            >
                              {achievement}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Used - Compact */}
                  <div className="space-y-3">
                    <h4
                      className={`text-base font-bold ${colors.text} flex items-center space-x-2`}
                    >
                      <Code className="w-4 h-4 text-emerald-400" />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {workExperience.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 ${colors.surfaceVariant} ${colors.textSecondary} rounded-full text-xs font-semibold hover:${colors.cardHover} hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Positions Section */}
          {(activeSection === "all" || activeSection === "leadership") && (
            <div className="animate-slide-up">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-lg rounded-full animate-pulse"></div>
                    <Users className="relative w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <h2
                    className={`text-xl sm:text-2xl lg:text-3xl font-bold ${colors.text} bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}
                  >
                    POSITIONS OF RESPONSIBILITY
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
                {positionsOfResponsibility.map((pos, index) => (
                  <div
                    key={pos.id}
                    className={`group ${colors.card} ${colors.border} rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 animate-slide-up overflow-hidden relative`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Background decoration */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${pos.color} opacity-10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    <div className="relative z-10 space-y-4">
                      <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-3">
                        <div className="flex-shrink-0">
                          <div className="relative group/logo">
                            <div
                              className={`absolute -inset-1 bg-gradient-to-r ${pos.color} opacity-20 blur-md rounded-full group-hover/logo:opacity-40 transition-opacity duration-300`}
                            ></div>
                            <div
                              className={`relative w-14 h-14 sm:w-16 sm:h-16 ${colors.surface} rounded-full p-2.5 shadow-lg ${colors.border} group-hover/logo:rotate-12 transition-transform duration-300 flex items-center justify-center overflow-hidden`}
                            >
                              <img
                                src={pos.logo}
                                alt={pos.organization}
                                className="w-full h-full object-cover rounded-full"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.style.display = "none";
                                  e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-purple-400 font-bold text-lg bg-gradient-to-r ${
                                    pos.color
                                  } bg-opacity-20 rounded-full">${pos.organization.charAt(
                                    0
                                  )}</div>`;
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3
                            className={`text-base sm:text-lg font-bold ${colors.text} mb-2 leading-tight group-hover:text-purple-400 transition-colors duration-300`}
                          >
                            {pos.organization}
                          </h3>
                          <div
                            className={`inline-block px-3 py-1 bg-gradient-to-r ${pos.color} text-white text-xs font-bold rounded-full`}
                          >
                            {pos.role}
                          </div>
                        </div>
                      </div>

                      <p
                        className={`${colors.textSecondary} text-sm leading-relaxed group-hover:${colors.text} transition-colors duration-300 text-center sm:text-left`}
                      >
                        {pos.description}
                      </p>

                      <div className="space-y-2">
                        <div
                          className={`text-sm font-semibold ${colors.text} flex items-center justify-center sm:justify-start space-x-2`}
                        >
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span>Key Skills</span>
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {pos.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className={`px-2 py-1 ${colors.surfaceVariant} ${colors.textSecondary} rounded-full text-xs font-medium hover:${colors.cardHover} transition-colors duration-300`}
                            >
                              {skill}
                            </span>
                          ))}
                          {pos.skills.length > 3 && (
                            <span
                              className={`px-2 py-1 ${colors.textMuted} text-xs`}
                            >
                              +{pos.skills.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Experience;

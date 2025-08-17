import React from "react";
import { ExternalLink, Award } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import javaIcon from "../asset/icon/java.gif";
import pythonIcon from "../asset/icon/python.gif";
import jsIcon from "../asset/icon/js.gif";
import htmlIcon from "../asset/icon/html.png";
import cssIcon from "../asset/icon/css.png";
import reactIcon from "../asset/icon/react.png";
import tailwindIcon from "../asset/icon/tailwind.png";
import numpyIcon from "../asset/icon/np.png";
import pandasIcon from "../asset/icon/pandas.png";
import sqlIcon from "../asset/icon/sql.png";
import gitIcon from "../asset/icon/git.png";
import pc from "../asset/certificates/python.png";
import jv from "../asset/certificates/java.png";
import sql from "../asset/certificates/sql.png";
import ricon from "../asset/icon/rlang.png";
import seaborn from "../asset/icon/seaborn.svg";
import node from "../asset/icon/node.gif";
import matplot from "../asset/icon/matplot.png";
import php from "../asset/icon/phplogo.png";
import nvidia from "../asset/certificates/nvidia.jpeg"

function SkillsAndCertificates() {
  const { isDark, colors } = useTheme();

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: javaIcon },
        { name: "Python", icon: pythonIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "R", icon: ricon },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "React", icon: reactIcon },
        { name: "TailwindCSS", icon: tailwindIcon },
        { name: "Node", icon: node },
        { name: "PHP", icon: php },
        { name: "MySQL", icon: sqlIcon },
      ],
    },
    {
      title: "Data & Tools",
      skills: [
        { name: "NumPy", icon: numpyIcon },
        { name: "Pandas", icon: pandasIcon },
        { name: "Git", icon: gitIcon },
        { name: "Matplotlib", icon: matplot },
        { name: "Seaborn", icon: seaborn },
      ],
    },
  ];

  const certificates = [
    {
      title: "Java with DSA and System Design",
      provider: "PWSKILLS",
      image: jv,
      description:
        "Advanced skills in Java programming, Data Structures and Algorithms, and System Design.",
      link: "https://pwskills.com/learn/certificate/d5f08271-f8dd-483e-97c5-caf93744c8c1/",
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Python Programming",
      provider: "Scaler",
      image: pc,
      description:
        "Strong command of Python programming with practical applications and problem-solving.",
      link: "https://moonshot.scaler.com/s/li/MHEOztMSaf",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "SQL & RDBMS",
      provider: "IBM",
      image: sql,
      description:
        "Solid understanding of SQL & RDBMS, database design, querying, and optimization.",
      link: "https://courses.cognitiveclass.ai/certificates/2b6cc6709d4345e8b5ea35a7f1562f3e",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Fundamentals of Deep Learning",
      provider: "NVIDIA",
      image: nvidia,
      description:
        "Gained foundational knowledge in deep learning, covering neural networks, backpropagation, and practical model training using GPUs.",
      link: "https://www.linkedin.com/in/jksanthosh159/overlay/1742649510136/single-media-viewer/?type=IMAGE&profileId=ACoAAEWw-n0BA8980pv5ucRD6btYb1H1RPdfTec",
      color: "from-green-400 to-teal-500",
    },
  ];

  return (
    <section
      id="skills"
      className={`${colors.background} ${colors.text} transition-all duration-500 min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Compact */}
        <div className="text-center mb-8 animate-fade-in">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent mb-3`}
          >
            SKILLS & CERTIFICATIONS
          </h1>
          <div
            className={`w-20 h-1 bg-gradient-to-r ${colors.primary} mx-auto rounded-full mb-3`}
          ></div>
        </div>

        {/* Skills Section - Unified Professional Layout */}
        <div className="mb-10">

          {/* Skills organized by categories with consistent spacing */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${colors.text} mr-4`}
                  >
                    {category.title}
                  </h3>
                  <div
                    className={`flex-1 h-px bg-gradient-to-r ${colors.primary} opacity-30`}
                  ></div>
                </div>

                {/* Skills Grid - Responsive and Balanced */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${colors.card} ${colors.border} p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg group hover:${colors.cardHover} flex flex-col items-center justify-center min-h-[100px]`}
                    >
                      <div className="flex justify-center mb-3">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 group-hover:scale-110 filter group-hover:brightness-110 object-contain"
                        />
                      </div>
                      <h4
                        className={`text-xs sm:text-sm font-semibold ${colors.text} leading-tight text-center`}
                      >
                        {skill.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section - Enhanced Responsive */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2
              className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${colors.secondary} bg-clip-text text-transparent mb-3 flex items-center justify-center gap-3`}
            >
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
              Certifications
            </h2>
            <div
              className={`w-20 h-1 bg-gradient-to-r ${colors.secondary} mx-auto rounded-full`}
            ></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`${colors.card} ${colors.border} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden h-32">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Provider badge */}
                  <div className="absolute top-2 right-2">
                    <span
                      className={`px-2 py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-semibold rounded-full shadow-lg`}
                    >
                      {cert.provider}
                    </span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-5">
                  <h3
                    className={`text-lg font-semibold ${colors.text} mb-2 leading-tight`}
                  >
                    {cert.title}
                  </h3>

                  <p
                    className={`${colors.textSecondary} text-sm leading-relaxed mb-4`}
                  >
                    {cert.description}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors duration-300 group/link`}
                  >
                    <span>View Credentials</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsAndCertificates;

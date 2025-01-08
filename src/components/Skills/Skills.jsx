import React from "react";
import javaIcon from "../asset/icon/java.gif";
import pythonIcon from "../asset/icon/python.gif";
import jsIcon from "../asset/icon/js.gif";
import htmlIcon from "../asset/icon/html.png";
import cssIcon from "../asset/icon/css.png";
import reactIcon from "../asset/icon/react.gif";
import tailwindIcon from "../asset/icon/tailwind.png";
import numpyIcon from "../asset/icon/np.png";
import pandasIcon from "../asset/icon/pandas.png";
import vcs from "../asset/icon/sql.png";
import pc from "../asset/certificates/python.png";
import jv from "../asset/certificates/java.png";
import sql from "../asset/certificates/sql.png";

function SkillsAndCertificates() {
  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-6">
      {/* Skills Section */}
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Programming Languages */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={javaIcon}
            alt="Java"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">Java</h3>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={pythonIcon}
            alt="Python"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">Python</h3>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={jsIcon}
            alt="JavaScript"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">JavaScript</h3>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={htmlIcon}
            alt="HTML"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">HTML</h3>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={cssIcon}
            alt="CSS"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">CSS</h3>
        </div>

        {/* Libraries and Frameworks */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={reactIcon}
            alt="React"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">React</h3>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={tailwindIcon}
            alt="TailwindCSS"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">TailwindCSS</h3>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={numpyIcon}
            alt="NumPy"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">NumPy</h3>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={pandasIcon}
            alt="Pandas"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">Pandas</h3>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <img
            src={vcs}
            alt="MySQL"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 transition-all duration-300 hover:scale-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">MySQL</h3>
        </div>
      </div>

      {/* Certificates Section */}
      <h2 className="text-3xl font-semibold text-teal-400 text-center mt-16 mb-10">
        My Certificates
      </h2>

      <div className="space-y-8">
        {/* Certificate 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <img
              src={jv}
              alt="Certificate Image"
              className="w-full rounded-xl"
            />
          </div>
          <div className="ml-0 sm:ml-6 w-full sm:w-3/4">
            <h3 className="text-xl font-semibold text-teal-400">
              Java with DSA and System Design @ PWSKILLS
            </h3>
            <p className="text-gray-400 mt-2">
              Acquired advanced skills in Java programming, Data Structures and
              Algorithms, and System Design through comprehensive coursework.
            </p>
            <a
              href="https://pwskills.com/learn/certificate/d5f08271-f8dd-483e-97c5-caf93744c8c1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline mt-4 inline-block"
            >
              View Credentials
            </a>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <img
              src={pc}
              alt="Certificate Image"
              className="w-full rounded-xl"
            />
          </div>
          <div className="ml-0 sm:ml-6 w-full sm:w-3/4">
            <h3 className="text-xl font-semibold text-teal-400">
              Python Programming @ Scaler
            </h3>
            <p className="text-gray-400 mt-2">
              Developed a strong command of Python programming, focusing on
              practical applications and advanced problem-solving techniques
            </p>
            <a
              href="https://moonshot.scaler.com/s/li/MHEOztMSaf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline mt-4 inline-block"
            >
              View Credentials
            </a>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <img
              src={sql}
              alt="Certificate Image"
              className="w-full rounded-xl"
            />
          </div>
          <div className="ml-0 sm:ml-6 w-full sm:w-3/4">
            <h3 className="text-xl font-semibold text-teal-400">
              SQL & RDBMS @ IBM
            </h3>
            <p className="text-gray-400 mt-2">
              Gained a solid understanding of SQL & RDBMS, focusing on database
              design, querying, and optimization.
            </p>
            <a
              href="https://courses.cognitiveclass.ai/certificates/2b6cc6709d4345e8b5ea35a7f1562f3e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline mt-4 inline-block"
            >
              View Credentials
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndCertificates;

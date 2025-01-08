import React from "react";

function Experience() {
  return (
    <div>
      {/* Experience Section */}
      <div className="bg-gray-900 text-gray-100 py-16 px-6 pt-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Education
        </h2>

        {/* College Experience */}
        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-12 p-6 md:p-8 transition-transform transform hover:scale-105">
          {/* College Logo */}
          <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6">
            <img
              src="https://nitandhra.ac.in/main/images/logo.png"
              alt="College Logo"
              className="w-full h-full object-contain rounded-full shadow-md"
            />
          </div>
          {/* College Details */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-teal-400 mb-2">
              NIT Andhra Pradesh{" "}
              <span className="text-gray-400 text-sm block md:inline">
                (Aug 2023 - May 2027)
              </span>
            </h2>
            <h3 className="text-gray-400 text-xl mb-2">
              B.Tech in Biotechnology with a Minor in Software Engineering
            </h3>
            <p className="text-gray-400 mt-2 mb-4">CGPA: 8.53/10</p>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              Combining a strong foundation in Biotechnology with a specialized
              minor in Software Engineering, focusing on programming,
              algorithms, and software development. This interdisciplinary
              curriculum equips me with technical expertise and problem-solving
              skills, aligning with roles in software development.
            </p>
          </div>
        </div>

        {/* Volunteering Experience */}
        <h3 className="text-4xl font-semibold text-center mb-12">
          Volunteering Experience
        </h3>

        <div className="space-y-10">
          {/* Volunteering 1 */}
          <div className="flex flex-col sm:flex-row items-center bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            {/* Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-4 sm:mb-0 sm:mr-6">
              <img
                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F336108949%2F406395333387%2F1%2Foriginal.20220816-061514?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=304%2C0%2C1276%2C1276&s=5c743ea90a8e6940d28c9759069f277e"
                alt="Volunteer 1 Logo"
                className="w-full h-full object-contain rounded-full shadow-md"
              />
            </div>
            {/* Volunteering Details */}
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-semibold text-teal-400">
                Google Developer Group (GDG)
              </h4>
              <p className="text-gray-400 text-lg">
                Executive Member, Graphics and Designing Team
              </p>
              <p className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed">
                Working as a part of the graphics team, creating visually
                engaging content for events and promotions, including video
                content.
              </p>
            </div>
          </div>

          {/* Volunteering 2 */}
          <div className="flex flex-col sm:flex-row items-center bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            {/* Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-4 sm:mb-0 sm:mr-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJskiyn62Hp65-fTyfcvBS5olXlAusUgwIag&s"
                alt="Volunteer 2 Logo"
                className="w-full h-full object-contain rounded-full shadow-md"
              />
            </div>
            {/* Volunteering Details */}
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-semibold text-teal-400">
                Innovation & Entrepreneurship Cell, NIT Andhra Pradesh
              </h4>
              <p className="text-gray-400 text-lg">
                Executive Member, Technical Team
              </p>
              <p className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed">
                Collaborate with peers to develop innovative tech prototypes,
                focusing on emerging technologies and building functional
                models. Actively participate in national tech competitions to
                showcase projects and gain valuable exposure.
              </p>
            </div>
          </div>

          {/* Volunteering 3 */}
          <div className="flex flex-col sm:flex-row items-center bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            {/* Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-4 sm:mb-0 sm:mr-6">
              <img
                src="https://ugc.production.linktr.ee/7722bba3-e436-4480-9fc3-c6e89fdfce3b_Untitled-design.png?io=true&size=avatar-v3_0"
                alt="Volunteer 3 Logo"
                className="w-full h-full object-contain rounded-full shadow-md"
              />
            </div>
            {/* Volunteering Details */}
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-semibold text-teal-400">
                Biotechnology Engineering Association (BEA), NIT Andhra Pradesh
              </h4>
              <p className="text-gray-400 text-lg">
                Executive Member, Core Team
              </p>
              <p className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed">
                Design and develop eye-catching posters and digital content for
                events, ensuring uniform branding and clear communication.
                Manage social media platforms through content planning and
                interaction to enhance the association’s digital footprint.
                Promote events through focused campaigns, resulting in increased
                student involvement and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

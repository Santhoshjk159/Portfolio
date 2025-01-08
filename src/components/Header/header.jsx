import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-gray-900"
      }`}
    >
      <nav className="max-w-[95%] xl:max-w-[1400px] mx-auto flex justify-between items-center px-8 py-5">
        {/* Logo with gradient */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
          <a href="/">Santhosh Portfolio</a>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-lg text-gray-300">
          {[
            { label: "Home", link: "/" },
            { label: "About Me", link: "/about" },
            { label: "My Works", link: "/myprojects" },
            { label: "Education & Experience", link: "/experience" },
            { label: "Skills & Certifications", link: "/skills" },
          ].map((item) => (
            <li
              key={item.label}
              className="hover:text-teal-400 transition relative group"
            >
              <a href={item.link} className="flex items-center space-x-1">
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Call-to-Action Button */}
        <button className="hidden md:inline-block px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition">
          <a href="/contact">Let's Connect!</a>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-teal-400 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-gray-900 md:hidden">
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg text-gray-300">
            {[
              { label: "Home", link: "/" },
              { label: "About Me", link: "/about" },
              { label: "My Works", link: "/myprojects" },
              { label: "Education & Experience", link: "/experience" },
              { label: "Skills & Certifications", link: "/skills" },
              { label: "Contact Me", link: "/contact" },
            ].map((item) => (
              <li
                key={item.label}
                className="hover:text-teal-400 transition relative group"
              >
                <a
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-1"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

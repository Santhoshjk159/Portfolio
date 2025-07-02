import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme, colors } = useTheme();

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About Me", link: "/about" },
    { label: "My Works", link: "/myprojects" },
    { label: "Education & Experience", link: "/experience" },
    { label: "Skills & Certifications", link: "/skills" },
  ];

  const mobileNavItems = [
    ...navItems,
    { label: "Contact Me", link: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? `${
              isDark ? "bg-slate-900/95" : "bg-white/95"
            } backdrop-blur-md shadow-xl ${
              isDark
                ? "border-b border-slate-700/50"
                : "border-b border-gray-200/50"
            }`
          : `${isDark ? "bg-slate-900/90" : "bg-white/90"} backdrop-blur-sm`
      }`}
    >
      <nav className="max-w-[95%] xl:max-w-[1400px] mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo with enhanced gradient */}
        <h1
          className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text hover:scale-105 transition-transform duration-300`}
        >
          <a href="/">Santhosh Portfolio</a>
        </h1>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-base ${colors.textSecondary}`}
        >
          {navItems.map((item) => (
            <li
              key={item.label}
              className="hover:text-emerald-400 transition-all duration-300 relative group"
            >
              <a href={item.link} className="relative">
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r ${colors.primary} transition-all duration-300 group-hover:w-full`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle and CTA Container */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${colors.card} ${colors.border} hover:${colors.borderHover} transition-all duration-300 hover:scale-105`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {/* Enhanced Call-to-Action Button */}
          <button
            className={`hidden md:inline-block px-5 py-2 bg-gradient-to-r ${
              colors.primary
            } hover:from-emerald-600 hover:to-cyan-600 ${
              isDark ? "text-white" : "text-white"
            } font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25`}
          >
            <a href="/contact">Let's Connect!</a>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden text-emerald-400 focus:outline-none hover:text-emerald-300 transition-colors duration-300 ${
            isMobileMenuOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Close Button */}
        <button
          className={`md:hidden text-emerald-400 focus:outline-none hover:text-emerald-300 transition-colors duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`${
            isDark ? "bg-slate-900/95" : "bg-white/95"
          } backdrop-blur-md md:hidden ${
            isDark
              ? "border-t border-slate-700/50"
              : "border-t border-gray-200/50"
          }`}
        >
          <ul
            className={`flex flex-col items-center space-y-4 py-6 text-base ${colors.textSecondary}`}
          >
            {mobileNavItems.map((item) => (
              <li
                key={item.label}
                className="hover:text-emerald-400 transition-all duration-300 relative group"
              >
                <a
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative px-4 py-2"
                >
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r ${colors.primary} transition-all duration-300 group-hover:w-full`}
                  ></span>
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

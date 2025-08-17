import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Heart,
  ArrowUp,
  Code,
  Palette,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const Footer = () => {
  const { isDark, colors } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About Me", link: "/about" },
    { label: "Projects", link: "/myprojects" },
    { label: "Skills", link: "/skills" },
    { label: "Experience", link: "/experience" },
    { label: "Contact Me", link: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      url: "https://github.com/Santhoshjk159",
      name: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      url: "https://www.linkedin.com/in/jksanthosh159/",
      name: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      url: "https://www.instagram.com/j_k_santhosh/",
      name: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      url: "https://discord.com/users/santhoshjk159",
      name: "Discord",
      color: "hover:text-indigo-400",
    },
  ];

  return (
    <footer
      className={`relative ${colors.background} ${colors.text} ${colors.border} border-t transition-all duration-500`}
    >
      <div className="relative z-10">
        {/* Main Footer Content - Compact */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3
                className={`text-xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent mb-2`}
              >
                Santhosh J K
              </h3>
              <div
                className={`flex items-center justify-center md:justify-start ${colors.textSecondary} text-sm mt-2`}
              >
                <Mail className="w-4 h-4 text-emerald-400 mr-2" />
                <a
                  href="mailto:jksanthosh159@gmail.com"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  jksanthosh159@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className={`text-sm font-semibold ${colors.text} mb-3`}>
                Quick Links
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {quickLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className={`${colors.textSecondary} hover:text-emerald-400 transition-colors duration-300 text-sm relative group`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r ${colors.primary} transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="text-center md:text-right">
              <h4 className={`text-sm font-semibold ${colors.text} mb-3`}>
                Connect With Me
              </h4>
              <div className="flex justify-center md:justify-end space-x-3 mb-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 ${colors.card} ${colors.border} rounded-lg hover:${colors.cardHover} transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div
          className={`${colors.border} border-t ${
            isDark ? "bg-slate-900/50" : "bg-gray-50/50"
          } backdrop-blur-sm`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              {/* Copyright */}
              <div
                className={`flex items-center space-x-2 ${colors.textMuted} text-sm`}
              >
                <span>&copy; 2025 Santhosh J K. All rights reserved.</span>
              </div>

              {/* Tech Stack */}
              <div
                className={`flex items-center space-x-4 ${colors.textMuted} text-sm`}
              >
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className={`p-2 ${colors.card} ${colors.border} rounded-full hover:${colors.cardHover} transition-all duration-300 transform hover:scale-110 group`}
                title="Scroll to top"
              >
                <ArrowUp
                  className={`w-4 h-4 ${colors.textMuted} group-hover:text-emerald-400 transition-colors duration-300`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

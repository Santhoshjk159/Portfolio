import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const { isDark, colors } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      to_name: "Santhosh",
      from_name: formData.name,
      from_mail: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_556c4ev",
        "template_plpq1rp",
        emailData,
        "H7VVPBCmCOefzDCWl"
      )
      .then(
        (response) => {
          setLoading(false);
          setStatus({
            message: "Message sent successfully!",
            success: true,
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          setStatus({
            message: "An error occurred, please try again.",
            success: false,
          });
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "jksanthosh159@gmail.com",
      link: "mailto:jksanthosh159@gmail.com",
      color: "text-emerald-400",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Trichy, Tamil Nadu, India",
      link: null,
      color: "text-cyan-400",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/Santhoshjk159",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jksanthosh159/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/j_k_santhosh/",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaDiscord />,
      name: "Discord",
      url: "https://discord.com/users/santhoshjk159",
      color: "hover:text-indigo-500",
    },
  ];

  return (
    <section
      id="contact"
      className={`${colors.background} ${colors.text} min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent mb-4`}
          >
            CONTACT ME
          </h1>
          <div
            className={`w-24 h-1 bg-gradient-to-r ${colors.primary} mx-auto rounded-full mb-4`}
          ></div>
          <p
            className={`${colors.textSecondary} text-lg max-w-2xl mx-auto leading-relaxed`}
          >
            Ready to collaborate? Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h2 className={`text-2xl font-bold ${colors.text} mb-4`}>
                Get in Touch
              </h2>
              <p className={`${colors.textSecondary} leading-relaxed mb-6`}>
                Whether you have a project in mind or just want to say hello,
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards - Compact */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`${colors.card} ${colors.border} p-4 rounded-xl hover:${colors.cardHover} transition-all duration-300 group`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`${colors.text} font-semibold mb-1`}>
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className={`${
                            colors.textSecondary
                          } hover:${item.color.replace(
                            "text-",
                            "text-"
                          )} transition-colors duration-300 text-sm`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className={`${colors.textSecondary} text-sm`}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links - Compact */}
            <div className="pt-4">
              <h3 className={`${colors.text} font-semibold text-lg mb-4`}>
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 ${colors.card} ${colors.border} rounded-xl ${colors.textMuted} ${social.color} hover:scale-110 hover:shadow-lg transition-all duration-300 group`}
                    title={social.name}
                  >
                    <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Compact */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div
              className={`${colors.card} ${colors.border} p-6 rounded-2xl shadow-2xl backdrop-blur-xl relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h3 className={`text-xl font-bold ${colors.text} mb-4`}>
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className={`block ${colors.text} font-medium mb-2 text-sm`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className={`w-full px-4 py-3 ${
                        isDark
                          ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                      } border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 outline-none text-sm`}
                    />
                  </div>

                  <div>
                    <label
                      className={`block ${colors.text} font-medium mb-2 text-sm`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className={`w-full px-4 py-3 ${
                        isDark
                          ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                      } border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 outline-none text-sm`}
                    />
                  </div>

                  <div>
                    <label
                      className={`block ${colors.text} font-medium mb-2 text-sm`}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      required
                      rows={4}
                      className={`w-full px-4 py-3 ${
                        isDark
                          ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                      } border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 outline-none resize-none text-sm`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${colors.primary} text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Status Message */}
                {status && (
                  <div
                    className={`mt-4 p-3 rounded-lg flex items-center space-x-2 animate-fade-in ${
                      status.success
                        ? "bg-emerald-500/10 border border-emerald-500/20"
                        : "bg-red-500/10 border border-red-500/20"
                    }`}
                  >
                    {status.success ? (
                      <BsCheckCircleFill className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-red-400 flex-shrink-0"></div>
                    )}
                    <p
                      className={`${
                        status.success ? "text-emerald-400" : "text-red-400"
                      } font-medium text-sm`}
                    >
                      {status.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Compact */}
        <div
          className={`mt-12 ${colors.card} ${colors.border} p-6 rounded-2xl backdrop-blur-xl text-center`}
        >
          <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>
            Ready to Start Something Amazing?
          </h3>
          <p className={`${colors.textSecondary} mb-6 max-w-2xl mx-auto`}>
            Let's bring your ideas to life with innovative technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#myprojects"
              className={`px-6 py-3 bg-gradient-to-r ${colors.primary} text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25`}
            >
              View My Work
            </a>
            <a
              href="#about"
              className={`px-6 py-3 ${
                isDark ? "bg-slate-800/80" : "bg-gray-200/80"
              } backdrop-blur-sm ${
                colors.text
              } font-semibold rounded-lg hover:${
                isDark ? "bg-slate-700/80" : "bg-gray-300/80"
              } transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? "border border-slate-600 hover:border-slate-500"
                  : "border border-gray-300 hover:border-gray-400"
              } shadow-lg`}
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

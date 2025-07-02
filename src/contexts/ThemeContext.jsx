import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Default to dark mode
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      primary: isDark
        ? "from-emerald-400 to-cyan-400"
        : "from-emerald-600 to-cyan-600",
      secondary: isDark
        ? "from-cyan-400 to-blue-400"
        : "from-cyan-600 to-blue-600",
      accent: isDark
        ? "from-blue-400 to-indigo-500"
        : "from-blue-600 to-indigo-700",
      background: isDark ? "bg-gray-900" : "bg-gray-50",
      surface: isDark ? "bg-gray-800" : "bg-white",
      surfaceVariant: isDark ? "bg-slate-800" : "bg-gray-100",
      text: isDark ? "text-white" : "text-gray-900",
      textSecondary: isDark ? "text-gray-300" : "text-gray-600",
      textMuted: isDark ? "text-gray-400" : "text-gray-500",
      border: isDark ? "border-slate-700" : "border-gray-200",
      borderHover: isDark ? "border-slate-500" : "border-gray-300",
      card: isDark
        ? "bg-gray-800/60 backdrop-blur-xl"
        : "bg-white/80 backdrop-blur-xl",
      cardHover: isDark ? "bg-gray-700/60" : "bg-gray-50/80",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

"use client";

import { Moon } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeChangeBtn = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () =>
    setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button onClick={handleThemeChange} className="cursor-pointer">
      <Moon />
    </button>
  );
};

export default ThemeChangeBtn;

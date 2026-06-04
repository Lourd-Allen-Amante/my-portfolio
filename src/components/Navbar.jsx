import { useState, useEffect } from "react";
import logoWhite from "../assets/logo-whiteTheme.svg";
import logoDark from "../assets/logo-darkTheme.svg";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPrefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("darkmode");
      root.classList.remove("lightmode");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("lightmode");
      root.classList.remove("darkmode");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-brand">
        <img
          src={theme === "dark" ? logoWhite : logoDark}
          alt="Lourd Allen Logo"
          className="navbar-logo-img"
          style={{ height: "60px", transition: "all 0.3s ease" }}
        />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}

export default Navbar;


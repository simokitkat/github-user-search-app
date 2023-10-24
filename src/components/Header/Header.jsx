/* eslint-disable react/prop-types */
import { Moon, Sun } from "../SVGs/SVGs";
import "./header.scss";

export default function Header({ isDark, toggleTheme }) {
  return (
    <header className={isDark ? "" : "light"}>
      <h2>devfinder</h2>
      <div className="theme" onClick={toggleTheme}>
        <span>{isDark ? "LIGHT" : "DARK"}</span>
        {isDark ? <Sun /> : <Moon />}
      </div>
    </header>
  );
}

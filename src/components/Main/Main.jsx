import { useState } from "react";
import Header from "../Header/Header";
import "./main.scss";

export default function Main() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.body.classList.add("light");
    } else {
      setIsDark(true);
      document.body.classList.remove("light");
    }
  };

  return (
    <main>
      <div className="container">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </main>
  );
}

import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import useFetchData from "./useFetchData";
import User from "../User/User";
import "./main.scss";

export default function Main() {
  const [isDark, setIsDark] = useState(true);
  const [bodyClass, setBodyClass] = useState("");
  const [user, setUser] = useState("octocat");
  const { isError, setIsError, isLoading, data, fetchData } = useFetchData(
    `https://api.github.com/users/${user}`
  );

  document.body.className = bodyClass;

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      setBodyClass("dark");
      console.log("dark");
    } else {
      setIsDark(false);
      setBodyClass("light");
      console.log("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      setBodyClass("light");
    } else {
      setIsDark(true);
      setBodyClass("dark");
    }
  };

  return (
    <main>
      <div className="container">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Form
          isDark={isDark}
          data={data}
          fetchData={fetchData}
          isError={isError}
          setIsError={setIsError}
          setUser={setUser}
        />
        <User
          isDark={isDark}
          data={data}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </main>
  );
}

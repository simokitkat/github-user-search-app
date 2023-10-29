import { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import useFetchData from "./useFetchData";
import User from "../User/User";
import "./main.scss";

export default function Main() {
  const [isDark, setIsDark] = useState(true);
  const [user, setUser] = useState("octocat");
  const { isError, setIsError, isLoading, data, fetchData } = useFetchData(
    `https://api.github.com/users/${user}`
  );

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

/* eslint-disable react/prop-types */
import { Search } from "../SVGs/SVGs";
import "./form.scss";

export default function Form({
  isDark,
  data,
  isError,
  setIsError,
  fetchData,
  setUser,
}) {
  const handleChange = (e) => {
    setIsError(false);
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    console.log(data);
  };

  return (
    <form className={isDark ? "" : "light"} onSubmit={handleSubmit}>
      <div className="container">
        <div className="search">
          <Search />
          <input
            type="text"
            placeholder="Search GitHub username…"
            required
            onChange={handleChange}
            className={isError ? "input-error" : ""}
          />
        </div>
        <div className="right">
          {isError && <span>No results</span>}
          <button>Search</button>
        </div>
      </div>
    </form>
  );
}

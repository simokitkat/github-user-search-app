/* eslint-disable react/prop-types */
import Socials from "./Socials";
import Stats from "./Stats";
import getDate from "./getDate";
import "./user.scss";

export default function User({ isDark, data, isLoading, isError }) {
  if (isLoading) {
    return (
      <section className={isDark ? "user" : "user light"}>
        <h2 className="loading">Loading...</h2>
      </section>
    );
  }

  if (isError) {
    return (
      <section className={isDark ? "user" : "user light"}>
        <h2 className="fetching-error">Error!</h2>
      </section>
    );
  }

  return (
    <section className={isDark ? "user" : "user light"}>
      <div className="container">
        {/* Avatar */}
        <div className="avatar">
          <img src={data.avatar_url} alt={data.name} />
        </div>
        {/* Other data */}
        <div className="other-data">
          <div className="name-date">
            <h1 className="name">{data.name}</h1>
            <span className="date">Joined {getDate(data.created_at)}</span>
          </div>
          <span className="login">@{data.login}</span>
          {data.bio ? (
            <p className="bio">{data.bio}</p>
          ) : (
            <p className="bio">This profile has no bio</p>
          )}
          <Stats data={data} />
          <Socials data={data} />
        </div>
      </div>
    </section>
  );
}

/* eslint-disable react/prop-types */
import Socials from "./Socials";
import Stats from "./Stats";
import getDate from "./getDate";

export default function UserContainerMobile({ data }) {
  return (
    <div className="mobile-container">
      {/* Top */}
      <div className="top">
        <div className="avatar">
          <img src={data.avatar_url} alt={data.name} />
        </div>
        <div className="name-date">
          <h1 className="name">{data.name}</h1>
          <span className="login">@{data.login}</span>
          <span className="date">Joined {getDate(data.created_at)}</span>
        </div>
      </div>
      {/* Other data */}
      <div className="other-data">
        {data.bio ? (
          <p className="bio">{data.bio}</p>
        ) : (
          <p className="bio inactive">This profile has no bio</p>
        )}
        <Stats data={data} />
        <Socials data={data} />
      </div>
    </div>
  );
}

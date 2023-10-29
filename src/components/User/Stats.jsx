/* eslint-disable react/prop-types */
export default function Stats({ data }) {
  return (
    <div className="statistics">
      <div>
        <span>Repos</span>
        <h3>{data.public_repos}</h3>
      </div>
      <div>
        <span>Followers</span>
        <h3>{data.followers}</h3>
      </div>
      <div>
        <span>Following</span>
        <h3>{data.following}</h3>
      </div>
    </div>
  );
}

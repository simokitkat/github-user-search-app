/* eslint-disable react/prop-types */
import { Company, Location, Twitter, Website } from "../SVGs/SVGs";
export default function Socials({ data }) {
  return (
    <div className="socials">
      <div className="left">
        <div className={!data.location ? "not-available" : ""}>
          <Location />
          {data.location ? (
            <span>{data.location}</span>
          ) : (
            <span>Not Available</span>
          )}
        </div>
        <div className={!data.blog ? "not-available" : ""}>
          <Website />
          {data.blog ? (
            <span>
              <a href={data.blog}>{data.blog}</a>
            </span>
          ) : (
            <span>Not Available</span>
          )}
        </div>
      </div>
      <div className="right">
        <div className={!data.twitter_username ? "not-available" : ""}>
          <Twitter />
          {data.twitter_username ? (
            <span>{data.twitter_username}</span>
          ) : (
            <span>Not Available</span>
          )}
        </div>
        <div className={!data.company ? "not-available" : ""}>
          <Company />
          {data.company ? (
            <span>{data.company}</span>
          ) : (
            <span>Not Available</span>
          )}
        </div>
      </div>
    </div>
  );
}

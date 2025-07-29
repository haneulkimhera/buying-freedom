import React from "react";
import "./TeamMember.css";

const TeamMember = ({ name, position, description }) => {
  return (
    <div className="team-member">
      <div className="member-photo">
        <svg
          className="member-icon"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38 42V38C38 35.8783 37.1571 33.8434 35.6569 32.3431C34.1566 30.8429 32.1217 30 30 30H18C15.8783 30 13.8434 30.8429 12.3431 32.3431C10.8429 33.8434 10 35.8783 10 38V42"
            stroke="#94A3B8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M24 22C28.4183 22 32 18.4183 32 14C32 9.58172 28.4183 6 24 6C19.5817 6 16 9.58172 16 14C16 18.4183 19.5817 22 24 22Z"
            stroke="#94A3B8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <div className="member-position">{position}</div>
        <p className="member-description">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;

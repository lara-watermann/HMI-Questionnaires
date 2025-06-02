import React from "react";

const Credits: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Credits</h2>
      <p>
        This application uses resources from the following creators and sources:
      </p>
      <ul>
        <li>
          Git Logo by{" "}
          <a href="https://bsky.app/profile/jasonlong.me">Jason Long</a> is
          licensed under the{" "}
          <a href="https://creativecommons.org/licenses/by/3.0/">
            Creative Commons Attribution 3.0 Unported License
          </a>
          .
        </li>
        <li>
          <a
            href="https://www.flaticon.com/free-icons/globe"
            title="globe icons"
          >
            Globe icons created by srip - Flaticon
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Credits;

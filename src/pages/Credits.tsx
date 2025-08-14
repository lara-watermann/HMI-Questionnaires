import React from "react";

const Credits: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="m-4">
            <h1>Credits</h1>
            <p>
              This application uses resources from the following creators and
              sources:
            </p>

            <div className="mt-4">
              <h2>Icons and Graphics</h2>
              <ul>
                <li>
                  Git Logo by{" "}
                  <a
                    href="https://bsky.app/profile/jasonlong.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jason Long
                  </a>{" "}
                  is licensed under the{" "}
                  <a
                    href="https://creativecommons.org/licenses/by/3.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creative Commons Attribution 3.0 Unported License
                  </a>
                  .
                </li>
                <li>
                  <a
                    href="https://www.flaticon.com/free-icons/globe"
                    title="globe icons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Globe icons created by srip - Flaticon
                  </a>
                </li>
                <li>
                  DOI Logo - Public Domain. Source:{" "}
                  <a
                    href="https://commons.wikimedia.org/wiki/File:DOI_logo.svg#Licensing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikimedia Commons
                  </a>
                </li>
                <li>OSF Logo - CC0 1.0 Universal</li>
              </ul>
            </div>

            <div className="mt-4">
              <h2>Institution</h2>
              <p>
                This project is maintained by the Embedded Systems Lab at the
                Technische Hochschule Augsburg (THA). Contributions are welcome!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;

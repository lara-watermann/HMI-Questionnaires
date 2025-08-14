import React from "react";

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="m-4">
            <h1>About HMI Questionnaires</h1>

            <div className="mt-4">
              <h2>Purpose</h2>
              <p style={{ textAlign: "justify" }}>
                This application provides a comprehensive collection of
                questionnaires used in the field of Human-Machine Interaction
                (HMI) research. Our goal is to help researchers, designers, and
                practitioners find the most appropriate measurement instruments
                for their studies.
              </p>
            </div>

            <div className="mt-4">
              <h2>Features</h2>
              <ul>
                <li>
                  <strong>Comprehensive Database:</strong> Access to a wide
                  range of validated questionnaires
                </li>
                <li>
                  <strong>Advanced Filtering:</strong> Filter by scales, timing,
                  language, and more
                </li>
                <li>
                  <strong>Direct Links:</strong> Quick access to original
                  sources and documentation
                </li>
                <li>
                  <strong>Multi-language Support:</strong> Find questionnaires
                  available in different languages
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h2>How to Use</h2>
              <ol>
                <li>Browse the questionnaires on the main page</li>
                <li>
                  Use the search functionality to find specific questionnaires
                  by name
                </li>
                <li>
                  Apply filters to narrow down results based on your criteria
                </li>
                <li>
                  Click on the provided links to access original sources and
                  documentation
                </li>
              </ol>
            </div>

            <div className="mt-4">
              <h2>Data Sources</h2>
              <p style={{ textAlign: "justify" }}>
                The questionnaires in this database have been collected from
                various academic sources and research publications. We strive to
                provide accurate and up-to-date information, but recommend
                always verifying details with the original sources.
              </p>
            </div>

            <div className="mt-4 text-justify">
              <h2>Contributing</h2>
              <p style={{ textAlign: "justify" }}>
                This is an open-source project. If you know of questionnaires
                that should be included or have corrections to existing data, we
                welcome your contributions. Please visit our{" "}
                <a href="https://github.com/THA-Embedded-Systems-Lab/HMI-Questionnaires">
                  GitHub repository
                </a>{" "}
                for more information on how to contribute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

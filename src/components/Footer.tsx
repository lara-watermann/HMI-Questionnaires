import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-align-center m-2">
      <hr />
      <a
        href="https://www.tha.de/Service/Impressum.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Imprint
      </a>
      <span className="mx-2">|</span>
      <a
        href="https://www.tha.de/Service/Datenschutz.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;

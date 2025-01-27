import React from "react";
import { FaGithub } from "react-icons/fa"; // Font Awesome GitHub icon
import "../Styles/Components/Footer.scss"; // Footer styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Interventive Learning. All rights reserved.</p>
        <a
          href="https://github.com/CPSfinal/CPS498-Interventive-Learning"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub className="github-icon" /> Visit our GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;

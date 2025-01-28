import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Styles/Components/Header.scss"; // Import the SCSS for styling
import Logo from "../assets/Icon.svg"; // Import Logo

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Interventive Learning Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/#features">Features</Link>
              <div className="mega-menu">
                <ul>
                  <li>
                    <Link to="/#student-analytics">Student Analytics</Link>
                    <p>
                      Monitor student progress with detailed analytics and
                      insights.
                    </p>
                  </li>
                  <li>
                    <Link to="/#ai-platform">AI Features</Link>
                    <p>
                      Engage students with AI-driven assessments and learning
                      modules.
                    </p>
                  </li>
                  <li>
                    <Link to="/#curriculum-tracking">Curriculum Tracking</Link>
                    <p>
                      Follow student progress across standards and
                      proficiencies.
                    </p>
                  </li>
                  <li>
                    <Link to="/#multi-language">Multi-Language Support</Link>
                    <p>
                      Offer assessments and learning modules in multiple
                      languages.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="#">Dashboards</Link>
              <div className="mega-menu">
                <ul>
                  <li>
                    <Link to="/teacher-dashboard">Teacher Dashboard</Link>
                    <p>View student progress and manage learning modules.</p>
                  </li>
                  <li>
                    <Link to="/student-dashboard">Student Dashboard</Link>
                    <p>Access learning modules and view progress reports.</p>
                  </li>
                  <li>
                    <Link to="/admin-dashboard">Admin Dashboard</Link>
                    <p>Manage users, view analytics, and configure settings.</p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </nav>

        {/* Search, Sign-in, and Sign-up */}
        <div className="actions">
          <input type="text" placeholder="Search..." className="search-bar" />
          <Link to="/signin" className="sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

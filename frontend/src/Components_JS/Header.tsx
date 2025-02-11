import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Styles/Components/Header.scss"; // Import the SCSS for styling
import Logo from "../assets/Icon.svg"; // Import Logo
import { useAuth } from "../context/AuthContext"; // used for tracking user login
import { useNavigate } from "react-router-dom";

const Header = () => {
// used for storing JWT token after logging in
  const { token, logout } = useAuth();
  const navigate = useNavigate();


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
          {token ? (
            <>
            <button className="acct-button" onClick={() => {navigate("/teacher-dashboard")}}>My Account</button>
            <button className="logout" onClick={() => {if (window.confirm("Are you sure you want to logout?")) {logout()}}}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="sign-in">Sign In</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

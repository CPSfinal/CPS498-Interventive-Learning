import React from 'react';
import '../Styles/Components/Header.scss'; // Import the SCSS for styling

const Header = () => {
    return (
        <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <a href="/">MyLogo</a>
          </div>
  
          {/* Navigation */}
          <nav className="nav-menu">
  <ul>
    <li>
      <a href="#features">Features</a>
      <div className="mega-menu">
        <ul>
          <li>
            <a href="#student-analytics">Student Analytics</a>
            <p>Monitor student progress with detailed analytics and insights.</p>
          </li>
          <li>
            <a href="#ai-platform">AI Features</a>
            <p>Engage students with AI-driven assessments and learning modules.</p>
          </li>
          <li>
            <a href="#curriculum-tracking">Curriculum Tracking</a>
            <p>Follow student progress across standards and proficiencies.</p>
          </li>
          <li>
            <a href="#multi-language">Multi-Language Support</a>
            <p>Offer assessments and learning modules in multiple languages.</p>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <a href="#pricing">Pricing</a>
    </li>
    <li>
      <a href="#resources">Resources</a>
    </li>
  </ul>
</nav>
  
          {/* Search, Sign-in, and Sign-up */}
          <div className="actions">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
            />
            <a href="/signin" className="sign-in">
              Sign In
            </a>
            <a href="/signup" className="sign-up">
              Sign Up
            </a>
          </div>
        </div>
      </header>
    );
  };

  export default Header;
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
                      <a href="#boards">Boards</a>
                      <p>See and track your work on Kanban boards</p>
                    </li>
                    <li>
                      <a href="#docs">Docs</a>
                      <p>Document and collaborate on your work</p>
                    </li>
                    <li>
                      <a href="#roadmaps">Roadmaps</a>
                      <p>Track development workloads, organize</p>
                    </li>
                    <li>
                      <a href="#milestones">Milestones</a>
                      <p>Visualize checkpoints across your teams</p>
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
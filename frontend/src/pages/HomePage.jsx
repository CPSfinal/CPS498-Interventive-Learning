import React from 'react';
import '../Styles/Pages/HomePage.scss'; // Import the SCSS for styling

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <img
          src="/favicon.ico" // Replace with your logo path
          alt="Interventive Learning Logo"
          className="logo"
        />
        <nav className="nav-links">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </nav>
      </header>
      <main className="home-main">
        <h1>Interventive Learning</h1>
        <p>Personalized, intervention-based learning powered by AI</p>
        <div className="buttons">
          <button className="primary-button">Get Started</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </main>
      <footer className="home-footer">
        <p>© 2025 Interventive Learning - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

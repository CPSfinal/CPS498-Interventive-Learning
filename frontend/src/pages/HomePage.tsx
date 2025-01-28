import React from 'react';
import '../Styles/Pages/HomePage.scss'; // Import the SCSS for styling

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <main className="home-main">
        <h1>Interventive Learning</h1>
        <p>Personalized, intervention-based learning powered by AI</p>
        <div className="buttons">
          <button className="primary-button">Get Started</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

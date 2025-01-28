import { useState } from 'react'
import HomePage from './pages/HomePage';
import Header from './Components_JS/Header';
import Footer from './Components_JS/Footer';
import './Styles/Components/App.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App

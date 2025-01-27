import { useState } from 'react'
import HomePage from './pages/HomePage';
import Header from './Components_JS/Header';
import './Styles/Components/App.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
};

export default App

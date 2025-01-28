import React from 'react';
import '../Styles/Components/TopBar.scss';

const TopBar = () => {
  return (
    <div className="top-bar">
      <h1 className="subject">Reading</h1>
      <div className="dropdowns">
        <select title="Select State">
          <option>Select State</option>
          <option>Michigan</option>
        </select>
        < select title="Select Grade Level">
          <option>Grade Level</option>
          <option>K</option>
        </select>
        <select title= "Select Standard">
          <option>View a Standard</option>
          <option>K.2.B</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;

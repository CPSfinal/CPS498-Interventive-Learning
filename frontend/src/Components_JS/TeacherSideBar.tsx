import React from 'react';
import '../Styles/Components/Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul className="nav-list">
        <li className="nav-item active">Reading</li>
        <li className="nav-item">Math</li>
        <li className="nav-item">Student List</li>
      </ul>
      <div className="sidebar-footer">
        <button className="settings-button">Settings</button>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Sidebar from '../Components_JS/TeacherSideBar';
import TopBar from '../Components_JS/TeacherTopBar';
import '../Styles/Pages/TeacherDashboard.scss';



const TeacherDashboard = () => {
    return (
      <div className="teacher-dashboard">
        <Sidebar />
        <div className="main-section">
          <TopBar />
          <div className="main-content">
                <p>Welcome to the teacher dashboard. Select a subject to begin.</p>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default TeacherDashboard;

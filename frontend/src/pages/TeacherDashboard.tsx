import React, { useState } from "react";
import Sidebar from "../Components_JS/TeacherSideBar";
import TopBar from "../Components_JS/TeacherTopBar";
import "../Styles/Pages/TeacherDashboard.scss";

const tabs = ["Reading", "Math", "Classes", "Settings"] as const;
type TabType = (typeof tabs)[number];

const TeacherDashboard: React.FC = () => {
  return (
    <div className="teacher-dashboard">
      <div className="main-section">
        <TopBar />
        <div className="main-content">
          <p>Welcome to the dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

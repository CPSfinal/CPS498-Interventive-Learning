import React, { useState, useEffect } from "react";
//import Sidebar from "../Components_JS/SideBar";
import TopBar from "../Components_JS/TopBar";
import ReadingTab from "../Components_JS/ReadingTab";
import MathTab from "../Components_JS/MathTab";
import ClassesTab from "../Components_JS/ClassesTab";
import SettingsTab from "../Components_JS/SettingsTab";
import { useTeacherDashboard } from "../context/TeacherContext";
import "../Styles/Pages/TeacherDashboard.scss";


//lift state for topbar tab 
const tabs = {
  
  Reading: <ReadingTab />,
  Math: <MathTab />,
  Classes: <ClassesTab />,
  Settings: <SettingsTab />,
  
 } as const;

const TeacherDashboard: React.FC = () => {
   const {selectedTab, setSelectedTab} = useTeacherDashboard();
   
   

  return (
    <div className="teacher-dashboard">
      <div className="main-section">
      <TopBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} /> {/*Use context values */}
        <div className="main-content">
          {tabs[selectedTab]}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

import React, { useState } from "react";
//import Sidebar from "../Components_JS/SideBar";
import TopBar from "../Components_JS/TopBar";
import ReadingTab from "../Components_JS/ReadingTab";
import MathTab from "../Components_JS/MathTab";
import ClassesTab from "../Components_JS/ClassesTab";
import SettingsTab from "../Components_JS/SettingsTab";
import "../Styles/Pages/TeacherDashboard.scss";


//lift state for topbar tab 
const tabs = {
  
  Reading: <ReadingTab />,
  Math: <MathTab />,
  Classes: <ClassesTab />,
  Settings: <SettingsTab />,
  
 } as const;


const TeacherDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<keyof typeof tabs>("Math"); // this is the default tab that will be selected when the page loads
  const handleTabChange = (tab: keyof typeof tabs) => {
    console.log(`tab changed to: ${tab}`); // these are back ticks, not single quotes. 
    setSelectedTab(tab);
  };
  return (
    <div className="teacher-dashboard">
      <div className="main-section">
      <TopBar selectedTab={selectedTab} setSelectedTab={handleTabChange} />
        <div className="main-content">
          {tabs[selectedTab]}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

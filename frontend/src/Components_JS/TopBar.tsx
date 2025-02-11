import React, { useState } from "react";
import "../Styles/Components/TopBar.scss";

const tabs = ["Reading", "Math", "Classes", "Settings"] as const;
type TabType = (typeof tabs)[number];

interface TopBarProps {
  selectedTab: TabType;
  setSelectedTab: (tab: TabType) => void;
}

const TopBar: React.FC<TopBarProps> = ({selectedTab, setSelectedTab}) => {
  return (
    <section className="top-bar">
      <h2 className="subject">Dashboard</h2>
      <nav aria-label="Dashboard Tabs">
        <ul className="tabs" role="tablist">
          {tabs.map((tab) => (
            <li key={tab} role="presentation">
              <button
                className={`tab-button ${
                  selectedTab === tab ? "selected" : ""}`}
                role="tab"
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default TopBar;

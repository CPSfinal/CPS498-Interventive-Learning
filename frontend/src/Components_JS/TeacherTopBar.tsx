import React, { useState } from "react";
import "../Styles/Components/TopBar.scss";

const tabs = ["Reading", "Math", "Classes", "Settings"] as const;
type TabType = (typeof tabs)[number];

const TopBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("Math");

  return (
    <section className="top-bar">
      <h2 className="subject">Dashboard</h2>
      <nav aria-label="Dashboard Tabs">
        <ul className="tabs" role="tablist">
          {tabs.map((tab) => (
            <li key={tab} role="presentation">
              <button
                className={`tab-button ${
                  selectedTab === tab ? "selected" : ""
                }`}
                role="tab"
                aria-selected={selectedTab === tab}
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

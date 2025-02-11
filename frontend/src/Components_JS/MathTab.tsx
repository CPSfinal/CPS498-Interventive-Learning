import React from "react";
import AssessmentStream from "./AssessmentStream";
import StandardsDisplay from "./StandardViewer";
import "../Styles/Components/Tab.scss";

const MathTab: React.FC = () => {
  return (
    <section>
      
      <div className="content-container">
        {/* Standards on the left */}
        <div className="standards-section">
          <StandardsDisplay />
        </div>
        
        {/* Assessments on the right */}
        <div className="assessment-section">
          <AssessmentStream />
        </div>
      </div>
    </section>
  );
};

export default MathTab;

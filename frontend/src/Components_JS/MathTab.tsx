import React from "react";
import AssessmentStream from "./AssessmentStream";
import StandardsDisplay from "./StandardViewer";
import { useTeacherDashboard } from "../context/TeacherContext";
import "../Styles/Components/Tab.scss";

const MathTab: React.FC = () => {
  const { students, loading, toggleStudentSelection } = useTeacherDashboard();

  return (
    <section>
      <div className="content-container">
        <div className="standards-section">
          <StandardsDisplay />
        </div>
        <div className="assessment-section">
          <AssessmentStream students={students} loading={loading} onUpdateStudents={toggleStudentSelection} />
        </div>
      </div>
    </section>
  );
};

export default MathTab;

import React, { useState } from "react";
import { useTeacherDashboard } from "../context/TeacherContext";

const AssessmentStream: React.FC = () => {
  const { students, loading, toggleStudentSelection } = useTeacherDashboard();
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    students.forEach(student => toggleStudentSelection(student.id));
  };

  return (
    <div className="assessment-stream">
      <h3>Student List</h3>
      {loading ? <p>Loading students...</p> : students.length === 0 ? <p>No students enrolled.</p> : (
        <table className="student-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
              </th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>
                  <input type="checkbox" checked={student.selected} onChange={() => toggleStudentSelection(student.id)} />
                </td>
                <td>{student.name}</td>
                <td>{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssessmentStream;

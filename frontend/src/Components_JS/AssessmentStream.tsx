import React, {useState} from "react";

interface Student {
    id: number;
    name: string;
    status: string;
    selected: boolean;
  }
  
  const initialStudents: Student[] = [
    { id: 1, name: "Christopher Adams", status: "Meets Standard", selected: false },
    { id: 2, name: "Cole Tappan", status: "Meets Standard", selected: false },
    { id: 3, name: "Graham Eash", status: "Meets Standard", selected: false },
    { id: 4, name: "Colin Alton", status: "Meets Standard", selected: false },
    { id: 5, name: "John Smith", status: "Meets Standard", selected: false },
    { id: 6, name: "John Smith", status: "Meets Standard", selected: false },
  ]; // This is a mock list of students this will be replaced once connected to the backend

const AssessmentStream: React.FC = () => {
    const [students, setStudents] = useState<Student[]>(initialStudents);
    const [selectAll, setSelectAll] = useState(false);

    const toggleSelection = (id: number) => {
        setStudents((prev) =>
          prev.map((student) =>
            student.id === id ? { ...student, selected: !student.selected } : student
          )
        );
      };

    const toggleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setStudents((prev) =>
          prev.map((student) => ({ ...student, selected: newSelectAll }))
        );
      };


    return (
    <div className="assessment-stream">
      <h3>Viewing Class: XXXXX</h3>
      <table className="student-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
                aria-label="Select All Students"
              />
            </th>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <input
                  type="checkbox"
                  checked={student.selected}
                  onChange={() => toggleSelection(student.id)}
                  aria-label = {`Select ${student.name}`} 
                />
              </td>
              <td>{student.name}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons">
        <button className="start-button">Start Assessment</button>
        <button className="start-button">Start Module</button>
      </div>
    </div>
  );
};

export default AssessmentStream;
import React, {useState, useEffect} from "react";

interface Student {
    id: number;
    name: string;
    status: string;
    selected: boolean;
  }
  
  interface AssessmentStreamProps {
    classId: string; // The class ID to fetch students for
  }
  
  const AssessmentStream: React.FC<AssessmentStreamProps> = ({ classId }) => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectAll, setSelectAll] = useState(false);
  
    // Fetch students from backend
    useEffect(() => {
      const fetchStudents = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:8080/api/teacher/students/${classId}`);//this is an example not the real deal. 
          if (!response.ok) {
            throw new Error("Failed to fetch students");
          }
          const data: Student[] = await response.json();
          setStudents(data.map(student => ({ ...student, selected: false }))); // Ensure 'selected' field
        } catch (error) {
          console.error("Error fetching students:", error);
          setStudents([]); // Ensure empty state if fetch fails
        }
        setLoading(false);
      };
  
      fetchStudents();
    }, [classId]); // Refetch when classId changes
  
    // Toggle selection for a single student
    const toggleSelection = (id: number) => {
      setStudents(prev =>
        prev.map(student =>
          student.id === id ? { ...student, selected: !student.selected } : student
        )
      );
    };
  
    // Toggle "Select All"
    const toggleSelectAll = () => {
      const newSelectAll = !selectAll;
      setSelectAll(newSelectAll);
      setStudents(prev => prev.map(student => ({ ...student, selected: newSelectAll })));
    };
  
    return (
      <div className="assessment-stream">
        <h3>Viewing Class: {classId}</h3>
  
        {(() => {
          if (loading) {
            return <p>Loading students...</p>;
          } else if (students.length === 0) {
            return <p>No students enrolled in this class.</p>;
          } else {
            return (
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
                  {students.map(student => (
                    <tr key={student.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={student.selected}
                          onChange={() => toggleSelection(student.id)}
                          aria-label={`Select ${student.name}`}
                        />
                      </td>
                      <td>{student.name}</td>
                      <td>{student.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }
        })()}
  
        <div className="buttons">
          <button className="start-button" disabled={students.length === 0}>
            Start Assessment
          </button>
          <button className="start-button" disabled={students.length === 0}>
            Start Module
          </button>
        </div>
      </div>
    );
  };

  export default AssessmentStream;
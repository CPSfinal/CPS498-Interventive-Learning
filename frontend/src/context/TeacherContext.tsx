import React, { createContext, useContext, useState, useEffect } from "react";

interface Student {
  id: number;
  name: string;
  status: string;
  selected: boolean;
}
const tabs = ["Reading", "Math", "Classes", "Settings"] as const;
type TabType = (typeof tabs)[number];

interface TeacherDashboardContextProps {
  selectedTab: TabType;
  setSelectedTab: (tab: TabType) => void;
  students: Student[];
  loading: boolean;
  toggleStudentSelection: (id: number) => void;
}

const TeacherDashboardContext = createContext<TeacherDashboardContextProps | undefined>(undefined);

export const TeacherDashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<string>("Math");
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/teacher/students/math101");//not real
        if (!response.ok) throw new Error("Failed to fetch students");
        const data = await response.json();
        setStudents(data.map((student: Student) => ({ ...student, selected: false })));
      } catch (error) {
        console.error("Error fetching students:", error);
        setStudents([]);
      }
      setLoading(false);
    };

    fetchStudents();
  }, []);

  const toggleStudentSelection = (id: number) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, selected: !student.selected } : student
      )
    );
  };

  return (
    <TeacherDashboardContext.Provider value={{ selectedTab, setSelectedTab, students, loading, toggleStudentSelection }}>
      {children}
    </TeacherDashboardContext.Provider>
  );
};

export const useTeacherDashboard = () => {
  const context = useContext(TeacherDashboardContext);
  if (!context) {
    throw new Error("useTeacherDashboard must be used within a TeacherDashboardProvider");
  }
  return context;
};

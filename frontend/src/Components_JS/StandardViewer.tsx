import React, { useState, useEffect } from "react";
import "../Styles/Components/StandardViewer.scss";

interface Standard {
  id: number;
  title: string;
  description: string;
}

const StandardsDisplay: React.FC = () => {
  const [standards, setStandards] = useState<Standard[]>([]);
  const [selectedStandard, setSelectedStandard] = useState<Standard | null>(null);

  // Fetch standards from database
  useEffect(() => {
    const fetchStandards = async () => {
      try {
        const response = await fetch("/api/standards"); // Replace with actual API route
        const data = await response.json();
        setStandards(data);
        setSelectedStandard(data.length > 0 ? data[0] : null); // Default to first standard
      } catch (error) {
        console.error("Error fetching standards:", error);
      }
    };
    fetchStandards();
  }, []);

  // Handle selection of a new standard
  const handleStandardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);
    const standard = standards.find((std) => std.id === selectedId) || null;
    setSelectedStandard(standard);
  };

  return (
    <div className="standards-display">
      <h3>Current Standard</h3>
      {selectedStandard ? (
        <>
          <h4>{selectedStandard.title}</h4>
          <p>{selectedStandard.description}</p>
          <label>Select Standard: </label>
          <select onChange={handleStandardChange} value={selectedStandard.id}>
            {standards.map((standard) => (
              <option key={standard.id} value={standard.id}>
                {standard.title}
              </option>
            ))}
          </select>
        </>
      ) : (
        <p>Loading standards...</p>
      )}
    </div>
  );
};

export default StandardsDisplay;

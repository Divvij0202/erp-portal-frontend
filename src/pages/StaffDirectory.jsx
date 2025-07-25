import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Papa from "papaparse";

function StaffDirectory() {
  const [staff, setStaff] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStaff = async () => {
    const staffCollection = collection(db, "staff");
    const data = await getDocs(staffCollection);
    const staffList = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setStaff(staffList);
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const filteredStaff = staff.filter((member) =>
    member.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Staff Directory", 14, 15);
    doc.autoTable({
      startY: 20,
      head: [["Name", "Email", "Position", "Department"]],
      body: filteredStaff.map((s) => [s.name, s.email, s.position, s.department]),
    });
    doc.save("staff-directory.pdf");
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(
      filteredStaff.map(({ name, email, position, department }) => ({
        Name: name,
        Email: email,
        Position: position,
        Department: department,
      }))
    );
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "staff-directory.csv";
    link.click();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>👩‍🏫 Staff Directory</h2>

      <input
        type="text"
        placeholder="Search staff by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "300px",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      />

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={exportToPDF} style={btnStyle}>📄 Export PDF</button>
        <button onClick={exportToCSV} style={btnStyle}>📁 Export CSV</button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.length > 0 ? (
            filteredStaff.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.position}</td>
                <td>{member.department}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No staff found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "1rem",
};

const btnStyle = {
  padding: "0.5rem 1rem",
  marginRight: "1rem",
  backgroundColor: "#2d72d9",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default StaffDirectory;

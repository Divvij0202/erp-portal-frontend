import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Papa from "papaparse";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Reports() {
  const [reports, setReports] = useState([]);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      const reportCollection = collection(db, "reports");
      const data = await getDocs(reportCollection);
      const reportsList = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReports(reportsList);
    };

    fetchReports();
  }, []);

  const filteredReports = reports.filter((report) =>
    filterType ? report.type === filterType : true
  );

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("ERP Reports", 14, 15);
    doc.autoTable({
      startY: 20,
      head: [["Title", "Type", "Department", "Date"]],
      body: filteredReports.map((r) => [
        r.title,
        r.type,
        r.department,
        r.date,
      ]),
    });
    doc.save("erp-reports.pdf");
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(
      filteredReports.map(({ title, type, department, date }) => ({
        Title: title,
        Type: type,
        Department: department,
        Date: date,
      }))
    );
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "erp-reports.csv";
    link.click();
  };

  // Optional chart data summary
  const chartData = Object.entries(
    filteredReports.reduce((acc, report) => {
      acc[report.type] = (acc[report.type] || 0) + 1;
      return acc;
    }, {})
  ).map(([type, count]) => ({ type, count }));

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📊 ERP Reports</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Filter by Type: </label>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={{ padding: "0.5rem", marginLeft: "0.5rem" }}
        >
          <option value="">All</option>
          <option value="Finance">Finance</option>
          <option value="Academic">Academic</option>
          <option value="Staff">Staff</option>
        </select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={exportToPDF} style={btnStyle}>📄 Export PDF</button>
        <button onClick={exportToCSV} style={btnStyle}>📁 Export CSV</button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Department</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <tr key={report.id}>
                <td>{report.title}</td>
                <td>{report.type}</td>
                <td>{report.department}</td>
                <td>{report.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No reports found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Optional Summary Chart */}
      <h3 style={{ marginTop: "2rem" }}>📈 Report Type Summary</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#4a90e2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
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
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Reports;

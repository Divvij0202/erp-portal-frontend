import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "../styles/StudentRecords.css";

// Icons (should be 16x16px or 24x24px for better quality)
import searchIcon from "../assets/search.png";
import pdfIcon from "../assets/pdf.png";
import csvIcon from "../assets/csv.png";
import addIcon from "../assets/add.png";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import logoutIcon from "../assets/logout.png";
import sortIcon from "../assets/sort.png";

function StudentRecords() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const studentCollection = collection(db, "students");
      const data = await getDocs(studentCollection);
      const studentList = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentList);
      setError(null);
    } catch (err) {
      console.error("Error fetching students:", err);
      setError("Failed to load student data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student record?")) {
      try {
        await deleteDoc(doc(db, "students", id));
        setStudents(students.filter(student => student.id !== id));
      } catch (err) {
        console.error("Error deleting student:", err);
        setError("Failed to delete student record.");
      }
    }
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedStudents = [...students].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredStudents = sortedStudents.filter((student) =>
    Object.values(student).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Student Records", 14, 15);

    autoTable(doc, {
      startY: 20,
      head: [["Name", "Email", "Course", "Grade", "Enrollment Date"]],
      body: filteredStudents.map((s) => [
        s.name,
        s.email,
        s.course,
        s.grade,
        s.enrollmentDate || 'N/A',
      ]),
      theme: "grid",
      headStyles: { fillColor: [41, 128, 185] },
      styles: { fontSize: 10 },
      margin: { top: 20 },
    });

    doc.save("student-records.pdf");
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(
      filteredStudents.map(({ name, email, course, grade, enrollmentDate }) => ({
        Name: name,
        Email: email,
        Course: course,
        Grade: grade,
        "Enrollment Date": enrollmentDate || 'N/A',
      }))
    );

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "student-records.csv";
    link.click();
  };

  return (
    <div className="student-records-container">
      <header className="student-records-header">
        <h1>Student Records Management</h1>
        <button className="logout-btn" onClick={handleLogout}>
          <img src={logoutIcon} alt="Logout" className="icon-sm" />
          Logout
        </button>
      </header>

      <div className="student-records-content">
        {error && <div className="error-message">{error}</div>}

        <div className="controls-container">
          <div className="search-box">
            <img src={searchIcon} alt="Search" className="icon-sm" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="action-buttons">
            <button onClick={exportToPDF} className="export-btn pdf">
              <img src={pdfIcon} alt="PDF" className="icon-sm" />
              Export PDF
            </button>
            <button onClick={exportToCSV} className="export-btn csv">
              <img src={csvIcon} alt="CSV" className="icon-sm" />
              Export CSV
            </button>
            <button
              onClick={() => navigate("/add-student")}
              className="add-btn"
            >
              <img src={addIcon} alt="Add" className="icon-sm" />
              Add Student
            </button>
          </div>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            Loading student records...
          </div>
        ) : (
          <>
            <div className="summary-info">
              Showing {filteredStudents.length} of {students.length} students
            </div>

            <div className="table-wrapper">
              <table className="student-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort('name')}>
                      <div className="th-content">
                        Name
                        <img 
                          src={sortIcon} 
                          alt="Sort" 
                          className={`icon-xs sort-icon ${sortConfig.key === 'name' ? 'active' : ''}`}
                        />
                        {sortConfig.key === 'name' && (
                          <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th onClick={() => handleSort('email')}>
                      <div className="th-content">
                        Email
                        <img 
                          src={sortIcon} 
                          alt="Sort" 
                          className={`icon-xs sort-icon ${sortConfig.key === 'email' ? 'active' : ''}`}
                        />
                      </div>
                    </th>
                    <th onClick={() => handleSort('course')}>
                      <div className="th-content">
                        Course
                        <img 
                          src={sortIcon} 
                          alt="Sort" 
                          className={`icon-xs sort-icon ${sortConfig.key === 'course' ? 'active' : ''}`}
                        />
                      </div>
                    </th>
                    <th onClick={() => handleSort('grade')}>
                      <div className="th-content">
                        Grade
                        <img 
                          src={sortIcon} 
                          alt="Sort" 
                          className={`icon-xs sort-icon ${sortConfig.key === 'grade' ? 'active' : ''}`}
                        />
                      </div>
                    </th>
                    <th onClick={() => handleSort('enrollmentDate')}>
                      <div className="th-content">
                        Enrollment
                        <img 
                          src={sortIcon} 
                          alt="Sort" 
                          className={`icon-xs sort-icon ${sortConfig.key === 'enrollmentDate' ? 'active' : ''}`}
                        />
                      </div>
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.course}</td>
                        <td>{student.grade}</td>
                        <td>{student.enrollmentDate || 'N/A'}</td>
                        <td className="actions">
                          <button
                            onClick={() => navigate(`/edit-student/${student.id}`)}
                            className="action-btn edit"
                          >
                            <img src={editIcon} alt="Edit" className="icon-xs" />
                          </button>
                          <button
                            onClick={() => handleDelete(student.id)}
                            className="action-btn delete"
                          >
                            <img src={deleteIcon} alt="Delete" className="icon-xs" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="no-data">
                      <td colSpan="6">
                        <div className="no-data-content">
                          <img src={searchIcon} alt="No data" className="icon-md" />
                          <p>No matching students found</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StudentRecords;
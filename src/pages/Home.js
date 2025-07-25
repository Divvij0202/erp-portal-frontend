import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "../styles/Home.css";

// Import icons (make sure these files exist in your assets folder)
import profileIcon from "../assets/profile.png";
import financeIcon from "../assets/finance.png";
import staffIcon from "../assets/staff.png";
import reportIcon from "../assets/report.png";
import settingsIcon from "../assets/settings.png";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (page) => {
    navigate(page);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className={`home-container ${darkMode ? "dark" : "light"}`}>
      <header className="header">
        <h1 className="title">Welcome to ERP Portal</h1>
        <div className="header-controls">
          <button 
            className="mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <button 
            className="logout-btn"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Logging out..." : "🚪 Logout"}
          </button>
        </div>
      </header>

      <section className="dashboard">
        <div 
          className="card" 
          onClick={() => navigateTo("/StudentRecords")}
        >
          <img src={profileIcon} alt="Student Records" className="card-icon" />
          <h2 className="card-title">Student Records</h2>
          <p className="card-description">
            Manage student information, grades, and academic documents.
          </p>
        </div>

        <div 
          className="card" 
          onClick={() => navigateTo("/Finance")}
        >
          <img src={financeIcon} alt="Finance" className="card-icon" />
          <h2 className="card-title">Finance</h2>
          <p className="card-description">
            Track payments, generate invoices, and manage institutional budgets.
          </p>
        </div>

        <div 
          className="card" 
          onClick={() => navigateTo("/StaffDirectory")}
        >
          <img src={staffIcon} alt="Staff Directory" className="card-icon" />
          <h2 className="card-title">Staff Directory</h2>
          <p className="card-description">
            Access contact information and department details for all staff members.
          </p>
        </div>

        <div 
          className="card" 
          onClick={() => navigateTo("/Reports")}
        >
          <img src={reportIcon} alt="Reports" className="card-icon" />
          <h2 className="card-title">Reports</h2>
          <p className="card-description">
            Generate comprehensive academic and financial reports.
          </p>
        </div>

        <div 
          className="card" 
          onClick={() => navigateTo("/Settings")}
        >
          <img src={settingsIcon} alt="Settings" className="card-icon" />
          <h2 className="card-title">Settings</h2>
          <p className="card-description">
            Configure system preferences and user account settings.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} ERP Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
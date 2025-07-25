import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Finance from "./Finance";

function Home({ goToLogin }) {
  const [page, setPage] = useState("dashboard");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onSelect={setPage} />
      <div style={{ flex: 1 }}>
        <Navbar onLogout={goToLogin} />
        {page === "dashboard" && <Dashboard />}
        {page === "employees" && <Employees />}
        {page === "finance" && <Finance />}
      </div>
    </div>
  );
}

export default Home;
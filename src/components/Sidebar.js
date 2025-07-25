import React from "react";
function Sidebar({ onSelect }) {
  return (
    <div style={{ width: 200, background: "#333", color: "white", height: "100vh", padding: 20 }}>
      <h3>ERP</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li onClick={() => onSelect("dashboard")} style={{ margin: 10, cursor: "pointer" }}>Dashboard</li>
        <li onClick={() => onSelect("employees")} style={{ margin: 10, cursor: "pointer" }}>Employees</li>
        <li onClick={() => onSelect("finance")} style={{ margin: 10, cursor: "pointer" }}>Finance</li>
      </ul>
    </div>
  );
}
export default Sidebar;
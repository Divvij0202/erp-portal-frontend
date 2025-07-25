import React from "react";
function Navbar({ onLogout }) {
  return (
    <div style={{ background: "#eee", padding: 10, display: "flex", justifyContent: "space-between" }}>
      <h2>ERP Portal</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
export default Navbar;
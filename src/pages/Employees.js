import React, { useState } from "react";
function Employees() {
  const [employees, setEmployees] = useState([]);
  const add = () => {
    const name = prompt("Name?");
    const role = prompt("Role?");
    if (name && role) setEmployees([...employees, { name, role }]);
  };
  return (
    <div>
      <h3>Employees</h3>
      <button onClick={add}>Add</button>
      <ul>
        {employees.map((e, i) => (
          <li key={i}>{e.name} - {e.role}</li>
        ))}
      </ul>
    </div>
  );
}
export default Employees;
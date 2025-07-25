// App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Finance from "./pages/Finance";
import StudentRecords from "./pages/StudentRecords";
import StaffDirectory from "./pages/StaffDirectory";
import Reports from "./pages/Reports";
import AddStudent from "./pages/AddStudent";

import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  if (!user) {
    return isLogin ? (
      <Login goToSignup={() => setIsLogin(false)} />
    ) : (
      <Signup goToLogin={() => setIsLogin(true)} />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/studentrecords" element={<StudentRecords />} />
      <Route path="/staffdirectory" element={<StaffDirectory />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

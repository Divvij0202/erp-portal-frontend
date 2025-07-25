import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    grade: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trimStart() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple field validation
    if (!form.name || !form.email || !form.course || !form.grade) {
      alert("❌ Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("❌ Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "students"), {
        ...form,
        timestamp: serverTimestamp()
      });
      alert("✅ Student added successfully!");
      setForm({ name: "", email: "", course: "", grade: "" });
    } catch (error) {
      alert("❌ Error adding student: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New Student</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={form.course}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={form.grade}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Saving..." : "➕ Add Student"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;

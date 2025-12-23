import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };te

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome {user?.name} (Admin)
      </h1>

      <p className="mb-6">This is Admin Dashboard</p>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;

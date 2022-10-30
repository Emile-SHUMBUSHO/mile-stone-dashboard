import React from "react";
import Login from "./pages/Login";
import DashboardRoute from "./Route/DashboardRoutes";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardRoute />} />
      </Routes>
    
  );
}

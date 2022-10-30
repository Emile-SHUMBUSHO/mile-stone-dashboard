import React from "react";
import Login from "./pages/Login";
import DashboardRoute from "./Route/DashboardRoutes";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" />
        <Route path="/mile-stone-dashboard" exact element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardRoute />} />
      </Routes>
    </div>
  );
}
